function writeBaseNames(base_names) {
    firebase.database().ref('base_names/').set({
     base_name_list: base_names
    });
}

function writeBase(base_name, base_properties) {
    firebase.database().ref('bases/' + base_name).set({
        properties: properties
    });
}


function readBaseNamesPromise() {
    firebase.database().ref('base_names/').once("value");
}

function readBasePromise(base_name) {
    return firebase.database().ref('bases/' + base_name).once("value");
}

function readBaseNames() {
    firebase.database().ref('base_names/').once("value").then(function(snapshot) {
        var base_names = snapshot.val().base_name_list
        return base_names
    })
}

function readBaseData(base_name) {
    firebase.database().ref('bases/' + base_name).once("value").then(function(snapshot) {
        var properties = snapshot.val().properties
        return properties
    });
}

function removeBase(base_name) {
    firebase.database().ref('bases/' + base_name).remove()
}

//Here we're trying to test the code.
