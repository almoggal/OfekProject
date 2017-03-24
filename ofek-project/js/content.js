$(document).ready(function(){
    console.log("loaded content page!");
    
    if(window.userID != 1){
        setContentView(window.currentField[0],window.currentField[1]);
        setViewText(true);
        setEditText(false);
    }
    else{
        setContentEdit(window.currentField[0],window.currentField[1]);
        setViewText(false);
        setEditText(true);
    }
});

var setContentView = function(title, text){
    //console.log("loading: "+title+" and "+text);
    $('#myTitle')[0].innerHTML = title;
    $('#myText')[0].innerHTML = text;
    $("#BaseTitle")[0].innerHTML=window.currentBaseName
    console.log(window.currentBaseName)
}

var setContentEdit = function(title, text){
    //console.log("loading: "+title+" and "+text);
    $('#myTitleEdit')[0].innerHTML = title;
    $('#myTextEdit')[0].innerHTML = text;
}

var setViewText = function(f){
    if(f)
        $('#container-view')[0].classList.remove("w3-hide");
    else
        $('#container-view')[0].classList.add("w3-hide");
}

var setEditText = function(f){
    if(f)
        $('#container-edit')[0].classList.remove("w3-hide");
    else
        $('#container-edit')[0].classList.add("w3-hide");
}

var updateChanges = function(){
    var title = $('#myTitleEdit')[0].innerHTML;
    var text = $('#myTextEdit')[0].value;
    updateBase(window.currentBase, title, text).then(function(){
        console.log("Update successful!");
    });
}