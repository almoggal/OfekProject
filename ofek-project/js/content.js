$(document).ready(function(){
    console.log("loaded content page!");
    
    setContent(window.currentField[0],window.currentField[1]);
});

var setContent = function(title, text){
    //console.log("loading: "+title+" and "+text);
    $('#myTitle')[0].innerHTML = title;
    $('#myText')[0].innerHTML = text;
}