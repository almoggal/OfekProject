function writeBaseNames(base_names) {
    firebase.database().ref('base_names/').set({
        base_name_list: base_names
    });
}

function writeBase(base_name, base_properties) {
    firebase.database().ref('bases/' + base_name).set({
        properties: base_properties
    });
    readBases().then(function (bases) {
        var found = false;
        var count = 0;
        if (bases != null) {
            if (Array.isArray(bases)) {
                bases.forEach(function (base) {
                    if (base_name == base) {
                        found = true;
                    }
                });
                count = bases.length;
            }
            else {
                if (bases == base_name) {
                    found == true;
                }
                count = 1;
            }
        }
        if (!found) {
            firebase.database().ref('bases_with_data/' + count + '/').set(base_name);
        }
    });
}


function readBaseNamesPromise() {
    return firebase.database().ref('base_names/').once("value");
}

function readBasePromise(base_name) {
    return firebase.database().ref('bases/' + base_name).once("value");
}
function readBases() {
    return new Promise(function (resolve, reject) {
        firebase.database().ref('bases_with_data/').once("value").then(function (bases) {
            resolve(bases.val());
        })
    });
}