$(document).ready(function() {
    console.log("login page ready!");
    
});

function onSubmit() {
    event.preventDefault();
    console.log("submit clicked!");
    
    showSpinner(true);
    setTimeout('showSpinner(false);showConnAlert(\'#id01\',2000);', 2000);
    setTimeout('showSpinner(false);showConnAlert(\'#id02\',2000);connSuccess();', 5000);
}

function showSpinner(f){

    if(f)
        $("#loading_spinner").attr("class","");
    else
        $("#loading_spinner").attr("class","w3-hide");
}

function showConnAlert(id, timeout){
    
    $(id)[0].style.display='block';
    setTimeout(function() {
        $(id)[0].style.display='none';
    }, timeout);
}

function connSuccess(){
    $("#navbar_bottom").attr("class","");
    $("#navbar_buttons")[0].remove();
    //$('#navbar').attr("innerHtml","");
    setNavBarButtons(["התנתק", "בסיסים"]);
}