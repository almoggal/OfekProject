$(function(){
      $("#includedContent").load("pages/content.html"); 
    });

$( document ).ready(function() {
    console.log( "page ready!" );
    
    var nav_buttons = ["שעות שקם", "דירה חדשה", "ביבי בנציהו", "חדשות"];
    var bases_buttons = ["צריפין", "108", "בחא 6", "כנף 180", "למה מלכתחילה"];
    var main_buttons = ["בית", "בסיסים", "חדשות"];
    
    //Get button lists from json
    
    //Set the buttons in the webpage
    setNavBarButtons(main_buttons);
    setSideBarButtons(nav_buttons);
});


var setSideBarButtons = function(buttons){
   
    //var buttons = ["Logo", "About", "Value", "News", "Contact"];
    
    //<a href="#" class="w3-bar-item w3-button w3-theme-l1">Logo</a>
    //<a class="w3-bar-item w3-button w3-hover-black" href="#">Link</a>
    
    var sidebar = document.createElement("div");
    
    for(var i = 0; i<buttons.length; i++){
        sidebar.innerHTML+="<a href=\"#\" class=\"w3-bar-item w3-right-align w3-button w3-hover-black\">"+buttons[i]+"</a>";
            
    }
    
    $('#mySidebar').append(sidebar);
};

var setNavBarButtons = function(buttons){
   
    //var buttons = ["Logo", "About", "Value", "News", "Contact"];
    
    //<a href="#" class="w3-bar-item w3-button w3-theme-l1">Logo</a>
    //<a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white">About</a>
    
    var topBar = document.createElement("div");
    topBar.style.position='absolute';
    
    for(var i = 1; i<buttons.length; i++){
        topBar.innerHTML+="<a href=\"#\" class=\"w3-bar-item w3-button w3-hover-white\">"+buttons[i]+"</a>";
            
    }
    
    topBar.innerHTML+="<a href=\"#\" class=\"w3-bar-item w3-button w3-theme-l1\">"+buttons[0]+"</a>";
    $('#navbar').append(topBar);
};

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
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
