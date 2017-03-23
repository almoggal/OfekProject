var mSuccess = $('#modalSuccess')[0];
var mFail = $('#modalFail')[0];

// Get the button that opens the modal
var btn = $('#submitBtn')[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$(document).ready(function() {
    console.log("manager page ready!");
    
    showSpinner(true);
    readBaseNamesPromise().then(function(names){
        window.allbases = names.val();
        showSpinner(false);
        //Populate list
        basesList($('#basesNames'));
    })
});

// When the user clicks the button, open the modal 
btn.onclick = function() {
    console.log("Clicked Regsiter!");
    showSpinner(true);
    
    var username = $('#username')[0].value;
    var password = $('#password')[0].value;
    var bases = [];
    var j = 0;
    for(var i = 0; i<window.allbases.length; i++){
        if($('#num'+i)[0].checked == true){
            bases[j] = $('#num'+i)[0].value;
            j++
        }
    }
    console.log(username +" "+ password +" "+bases);
    
    createUser(username, password, bases).then(function(){
        var modal = mSuccess;
        showSpinner(false);
        modal.style.display = "block";
        $('#username')[0].value = "";
        $('#password')[0].value = "";
        for(var i = 0; i<window.allbases.length; i++){
            if($('#num'+i)[0].checked == true){
                $('#num'+i)[0].checked = false;
            }
        }
    }).catch(function(error){
        console.log("failed to register");
        $('#error_desc')[0].innerHTML=error.message;
        var modal = mFail;
        showSpinner(false);
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

    if (event.target.className == "close") {
        mSuccess.style.display = "none";
        mFail.style.display = "none";

    }
}

var basesList = function(list){
    for(var i = 0; i<window.allbases.length; i++){
        list[0].innerHTML+="<input id=\"num"+i+"\" type=\"checkbox\" value=\""+window.allbases[i]+"\">  "+window.allbases[i];
        if((i%2==0) && i< (window.allbases.length - 1)){
            list[0].innerHTML+="    |   ";
        }
        else{
            list[0].innerHTML+="<br>";
        }
    }
}



function showSpinner(f){

    if(f)
        $("#loading_spinner").attr("class","");
    else
        $("#loading_spinner").attr("class","w3-hide");
}
