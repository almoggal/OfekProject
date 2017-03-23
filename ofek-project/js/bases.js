var bases = [];

$(document).ready(function() {
    console.log("bases page ready!");

    //Populate list
    showSpinner(true);
    getBases($('#bases_list'));
    w3_enableSidear(false);
});

var popluateList = function(list, bases){
    for(var i = 0; i<bases.length; i++){
        var baseName = bases[i];
        var btn = "<button"+" onclick=getBase("+i+")"
        +" class=\"w3-indigo w3-btn w3-round w3-xlarge\">"+baseName+"</button>";
        list[0].innerHTML+="<li>"+btn+"</li>";
    }
    this.bases = bases;
}

var getBases = function(list){
    readBaseNamesPromise().then(function(snapshot) {
        var base_names = snapshot.val();
        console.log(JSON.stringify(base_names));
        popluateList(list, base_names);
        //popluateList(list, ["1","בסיס 108", "נבטים"]);
        showSpinner(false);
});
}

var getBase = function(id){
    var base = this.bases[id];
    console.log("Click on click for base: "+base);
    readBasePromise(base).then(function(snapshot) {
        var base_names = snapshot.val();
        var jsonObj = base_names.properties;
        console.log(jsonObj);
        var btns = Object.keys(jsonObj);//[];
        //console.log(Object.keys(jsonObj));
        //jsonObj.forEach( function(p){
        //    btns.push(p.key);
        //});
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
