$(document).ready(function() {
    console.log("bases page ready!");

    var id = window.userID;
    //Populate list
    if(window.bases.length == null || window.bases.length == 0)
        fireOnce(id, $('#bases_list'));
    else
        doneRequest($('#bases_list'));
        
});

var getUserBases = function(list){
    readAutoForUser().then(function(bases){
            window.bases = bases;
            doneRequest(list);
        });
}

var fireOnce = function(userid, list){
    if(userID == 0) //DEFAULT
        getBases(list);
    else if(userID == 1) //EDITOR
        getUserBases(list);
        
    showSpinner(true);
    w3_enableSidear(false);
}

var doneRequest = function(list){
    popluateList(list, window.bases);
    showSpinner(false);
}

var getBases = function (list) {
    readBases().then(function (base_names) {
        console.log(JSON.stringify(base_names));
        window.bases = base_names;
        doneRequest(list);
    });
}

var getBase = function(id){
    var base = window.bases[id];
    console.log("Click for base: "+base);
    readBasePromise(base).then(function(snapshot) {
        var base_names = snapshot.val();
        var jsonObj = base_names.properties;
        console.log(jsonObj);
        var btns = Object.keys(jsonObj);//[];
        //console.log(Object.keys(jsonObj));
        //jsonObj.forEach( function(p){
        //    btns.push(p.key);
        //});
        window.currentBase = jsonObj;
        setSideBarButtons(btns);
        w3_enableSidear(true);
}).catch(function(error){
        console.log(error);
        w3_enableSidear(false);
    });
}

var getKeys = function(jsonData){

    var keys = [];

    for(var i in jsonData){
    var key = i;
    var val = jsonData[i];
    for(var j in val){
        var sub_key = j;
        var sub_val = val[j];
        keys.push(sub_key);
        console.log(sub_key);
    }
}

   return keys;
}

function showSpinner(f){

    if(f)
        $("#loading_spinner").attr("class","");
    else
        $("#loading_spinner").attr("class","w3-hide");
}
