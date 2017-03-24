$(document).ready(function() {
    
    console.log("main page ready!");

    var main_buttons = ["משתמשים רשומים", "בסיסים"]

    //Get button lists from json

    //Set the buttons in the webpage
    setNavBarButtons(main_buttons);
    onClickNavBarButton(1);
});

var redirectTo = function(page){
    $("#includedContent").load(page);
}

var onClickNavBarButton = function(id){
    console.log("Nav bar button click detected!")
    
    if(id == 1) //Bases
        redirectTo("pages/bases.html");
    else if(id == 2 && userID == 0) //Login only if im in default mode
        redirectTo("pages/login.html");
    else if(id == 2 && userID != 0){ //I'm logged in and want to sign out
        signOut();
        console.log("Signed out!");
        $("#navbar_bottom").attr("class","w3-bottom w3-hide");
        $("#navbar_buttons")[0].remove();
        setNavBarButtons(["משתמשים רשומים", "בסיסים"]);
        window.clearData();
        window.location.reload();
    }
}

var setSideBarButtons = function(buttons){
    
    while ($('#mySidebar')[0].childElementCount >= 3) {
        $('#mySidebar')[0].removeChild($('#mySidebar')[0].lastChild);
    };
    
    var sidebar = document.createElement("div");
    
    for(var i = 0; i<buttons.length; i++){
        sidebar.innerHTML+="<a href=\"#\" onclick=onClickSidebarButtons("+i+"); return false; class=\"w3-bar-item w3-right-align w3-button w3-hover-black\">"+buttons[i]+"</a>";
    }
    
    $('#mySidebar').append(sidebar);
};

var setNavBarButtons = function(buttons){
    
    var topBar = document.createElement("div");
    topBar.id = ("navbar_buttons");
    topBar.style.position='absolute';
    topBar.style.marginRight = '48px';
    
    buttons.forEach(function(element, index, arr){
        var btn = document.createElement("a");
        btn.className="w3-bar-item w3-button w3-hover-white";
        btn.innerHTML = element;
        btn.href = 'javascript:onClickNavBarButton('+(arr.length-(index))+')';
        topBar.appendChild(btn);  
        
    })
    
    $('#navbar').append(topBar);
};


var popluateList = function(list, bases){
    for(var i = 0; i<bases.length; i++){
        var baseName = bases[i];
        var btn = "<button"+" onclick=getBase("+i+")"
        +" class=\"w3-indigo w3-btn w3-round w3-xlarge\">"+baseName+"</button>";
        list[0].innerHTML+="<li>"+btn+"</li>";
    }
}

var onClickSidebarButtons = function(id){
    console.log("clicked on sidebar button: "+id);
    window.currentField[0] = Object.keys(window.currentBaseFields)[id];
    window.currentField[1] = window.currentBaseFields[window.currentField[0]];
    this.redirectTo("pages/content.html");
}

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if($('#navbar-btn-click')[0].classList.contains("w3-disabled"))
        return;
    
    if ($('#mySidebar')[0].style.display === 'block') {
        $('#mySidebar')[0].style.display = 'none';
        $('#navbar-btn')[0].className = "fa fa-bars";
    } else {
        $('#mySidebar')[0].style.display = 'block';
        $('#navbar-btn')[0].className = "fa fa-arrow-right";
    }
}

// Close the sidebar with the close button
function w3_close() {
    $('#mySidebar')[0].style.display = "none";
    $('#navbar-btn')[0].className = "fa fa-bars";
}

function w3_enableSidear(f){
    if(f)
        $('#navbar-btn-click')[0].classList.remove("w3-disabled");
    else
        $('#navbar-btn-click')[0].classList.add("w3-disabled");
}