var mSuccess = $('#modalSuccess')[0];
var mFail = $('#modalFail')[0];
var basesNum = 0;

// Get the button that opens the modal
var btn = $('#submitBtn')[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    console.log("Clicked Regsiter!");
    showSpinner(true);
    
    var username = $('#username')[0].value;
    var password = $('#password')[0].value;
    var bases = [];
    var j = 0;
    for(var i = 0; i<basesNum; i++){
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

$(document).ready(function() {
    console.log("Manager page ready!");

    //Populate list
    getBases($('#basesNames'));
    
    //
});

var basesList = function(list, bases){
    for(var i = 0; i<bases.length; i++){
        list[0].innerHTML+="<input id=\"num"+i+"\" type=\"checkbox\" value=\""+bases[i]+"\">  "+bases[i];
        if((i%2==0) && i< (bases.length - 1)){
            list[0].innerHTML+="    |   ";
        }
        else{
            list[0].innerHTML+="<br>";
        }
    }
    basesNum = i;
}

var getBases = function(list){
    readBaseNamesPromise().then(function(snapshot) {
        var base_names = snapshot.val();
        console.log(JSON.stringify(base_names));
        basesList(list, base_names);
});
}

function showSpinner(f){

    if(f)
        $("#loading_spinner").attr("class","");
    else
        $("#loading_spinner").attr("class","w3-hide");
}
