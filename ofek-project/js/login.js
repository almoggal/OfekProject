var mSuccess = $('#modalSuccess')[0];
var mFail = $('#modalFail')[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
        var modal = mSuccess;
        modal.style.display = "block";
        showSpinner(false);
        
        if(isManager().then(function(f){
            if(f)
                setTimeout(function(){
                    this.redirectTo("pages/ManagerForm.html");
                },1000);
            else
                setTimeout(function(){
                    this.redirectTo("pages/bases.html");
                },1000);
        }));
        
        
    }).catch(function(error){
        showSpinner(false);
        //show error
        console.log(error);
        $('#error_desc')[0].innerHTML=error.message;
        var modal = mFail;
        modal.style.display = "block";
    })
}

function showSpinner(f){
    if(f)
        $("#loading_spinner").attr("class","");
    else
        $("#loading_spinner").attr("class","w3-hide");
}

function connSuccess(){
    $("#navbar_bottom").attr("class","");
    $("#navbar_buttons")[0].remove();
    //$('#navbar').attr("innerHtml","");
    setNavBarButtons(["התנתק", "בסיסים"]);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    mSuccess.style.display = "none";
    mFail.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

    if (event.target.className == "close") {
        mSuccess.style.display = "none";
        mFail.style.display = "none";
    }
}