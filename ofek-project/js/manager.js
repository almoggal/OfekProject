var mSuccess = $('#modalSuccess')[0];
var mFail = $('#modalFail')[0];

// Get the button that opens the modal
var btn = $('#submitBtn')[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    console.log("Clicked Regsiter!");
    
    var username = $('#username')[0].value;
    var password = $('#password')[0].value;
    var bases = $('#bases')[0].value;
    console.log(username +" "+ password +" "+bases);
    
    createUser(username, password, bases).then(function(){
        var modal = mSuccess;
        modal.style.display = "block";
    }).catch(function(error){
        console.log("failed to register");
        $('#error_desc')[0].innerHTML=error.message;
        var modal = mFail;
        modal.style.display = "block";
    });
    
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    mSuccess.style.display = "none";
    mFail.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

    if (event.target == mSuccess) {
        mSuccess.style.display = "none";
    } else if(event.target == mFail)
        mFail.style.display = "none";
}