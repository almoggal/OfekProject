function writeBaseNames(base_names) {
    firebase.database().ref('base_names/').set({
     base_name_list: base_names
    });
}

function writeBase(base_name, base_properties) {
    firebase.database().ref('bases/' + base_name).set({
        properties: base_properties
    });
}


function readBaseNamesPromise() {
    return firebase.database().ref('base_names/').once("value");
}

function readBasePromise(base_name) {
    return firebase.database().ref('bases/' + base_name).once("value");
}

function readBaseNames() {
    firebase.database().ref('base_names/').once("value").then(function(snapshot) {
        var base_names = snapshot.val();
        //document.write(base_names);
        return snapshot.val();
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
// var basesNamesPromise = readBaseNamesPromise()
// basesNamesPromise.then(function(snapshot) {
//     var base_names = snapshot.val();
//     //document.write(base_names);
//     // document.write( snapshot.val());
// })
// writeBase("Shizaform", {ShekemHours:"08:00-16:00", Location:"Tizinahui"})
// var hatzorPromise = readBasePromise("Shizaform")
// hatzorPromise.then(function(snapshot) {
//     var props = snapshot.val().properties
//     document.write(JSON.stringify(props))
// })
// removeBase("Shizaform")