$(document).ready(function() {
    console.log("bases page ready!");

    //Populate list
    showSpinner(true);
    //getBases($('#bases_list'));
    
    getBase('Nevatim');
    
    //
});

var popluateList = function(list, bases){
    for(var i = 0; i<bases.length; i++){
        list[0].innerHTML+="<li><button class=\"w3-indigo w3-btn w3-round w3-xlarge\">"+bases[i]+"</button></li>";
    }
}

var getBases = function(list){
    readBaseNamesPromise().then(function(snapshot) {
        var base_names = snapshot.val();
        console.log(JSON.stringify(base_names));
        popluateList(list, base_names);
        showSpinner(false);
});
}

var getBase = function(base){
    readBasePromise(base).then(function(snapshot) {
        var base_names = snapshot.val();
        var jsonObj = base_names.properties;
        console.log(jsonObj);
        var btns = [];
        jsonObj.forEach( function(p){
            btns.push(p.key);
        });
        setSideBarButtons(btns);
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


var getButtons = function(jsonObj){
    //jsonObj.keys
}

function showSpinner(f){

    if(f)
        $("#loading_spinner").attr("class","");
    else
        $("#loading_spinner").attr("class","w3-hide");
}
