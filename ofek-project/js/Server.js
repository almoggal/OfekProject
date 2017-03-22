//public method
function createManager(email, password) {
    return createUsers(email, password, "true", "");
}
function createUser(email, password, bases) {
    return createUsers(email, password, "false", bases);
}
function signIn(email, password) {
    var auto = firebase.auth();
    return auto.signInWithEmailAndPassword(email, password);
}
function signOut() {
    var auto = firebase.auth();
    return auto.signOut();
}
function readAutoForUser() {
    var auto = firebase.auth();
    var curUser = auto.currentUser;
    if (!curUser) {
        return false;
    }
    return new Promise(function(resolve, reject){
            readUser(curUser.uid
).
    then(function (ruleUser) {
        var data = ruleUser.val();
        return data.AutoBases;
    })
});
}
function isAutoForBase(base) {
    var auto = firebase.auth();
    var curUser = auto.currentUser;
    if (!curUser) {
        return false;
    }
    return readUser(curUser.uid).then(function (ruleUser) {
        var data = ruleUser.val();
        if (Array.isArray(data.AutoBases)) {
            var found = false;
            data.AutoBases.forEach(function (p) {
                if (p == base)
                    found = true;
            });
            return found;
        }
        else if (data.AutoBases == base) {
            return true;
        }
        else {
            return false;
        }
    })
        ;
}
function isManager() {
    var auto = firebase.auth();
    var curUser = auto.currentUser;
    if (!curUser) {
        return false;
    }
    return readUser(curUser.uid)
        .then(function (ruleUser) {
            return ruleUser.val().isManager == "true";

        });
}
//private method
function write(url, isManager, data) {
    firebase.database().ref(url).set({
        isManager: isManager,
        AutoBases: data
    });
}
function read(url) {
    return firebase.database().ref(url).once("value");
}
function writeUser(userId, isManager, data) {
    write('users/' + userId, isManager, data);
}
function readUser(userId) {
    return read('users/' + userId);
}
function createUsers(email, password, isManager, rule) {
    var auto = firebase.auth();
    return auto.createUserWithEmailAndPassword(email, password).then(function (firebaseUser) {
        writeUser(firebaseUser.uid, isManager, rule);
    });
}