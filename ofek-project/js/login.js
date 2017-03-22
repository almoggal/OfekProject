$(document).ready(function() {
    console.log("login page ready!");
    
});

function onSubmit() {
    event.preventDefault();
    console.log("submit clicked!");
    
    showSpinner(true);
    //setTimeout('showSpinner(false);showConnAlert(\'#id01\',1000);', 2000);
    //setTimeout('showSpinner(false);showConnAlert(\'#id02\',1000);connSuccess();', 5000);
    //setTimeout(function(){onClickNavBarButton(3); },1000);
    
    var username = $('#username')[0].value;
    var password = $('#password')[0].value;
    
    signIn(username, password).then(function(){
        console.log("Signed in!");
        showSpinner(false);
        $("#includedContent").load("pages/ManagerForm.html");
    }).catch(function(error){
        showSpinner(false);
        //show error
        console.log(error);
    })
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