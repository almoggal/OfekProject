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