$(document).ready(function() {
    console.log("bases page ready!");

    //Populate list
    var bases = getBases();
    var list = $('#bases_list');

    showSpinner(true);
    setTimeout(function() {
        popluateList(list, bases);
        showSpinner(false);
    }, 2000);
    
    
    //
});

var popluateList = function(list, bases){
    for(var i = 0; i<bases.length; i++){
        list[0].innerHTML+="<li><button class=\"w3-indigo w3-btn w3-round w3-xlarge\">"+bases[i]+"</button></li>";
    }
}

var getBases = function(){
    return ["צריפין","בחא","108","צריפין","בחא","108","צריפין","בחא","108","צריפין","בחא","108","צריפין","בחא","108"];
}

function showSpinner(f){

    if(f)
        $("#loading_spinner").attr("class","");
    else
        $("#loading_spinner").attr("class","w3-hide");
}
