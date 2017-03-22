//var props = null;
//
//readBasePromise("kirya").then(function () {
//    var data = snapshot.val()
//    var name = data.name
//    var properties = data.properties
//    
//    // write to html
//    props = properties
//    
//    writeBase("kirya", "קריה", properties)
//})
//
//prop.push({key:"", value: ""})

function writeBase(id, name, properties) {
    firebase.database().ref('bases/' + id).set({
        name: name,
        properties: properties
    });
}

function readBasePromise(id) {
    return firebase.database().ref('bases/' + id).once("value");
}

$(document).ready(function() {
    
    console.log("main page ready!");

    // 

    var nav_buttons = [""];
    //var bases_buttons = ["צריפין", "108", "בחא 6", "כנף 180", "למה מלכתחילה"];
    var main_buttons = ["משתמשים רשומים", "בסיסים"]

    //Get button lists from json

    //Set the buttons in the webpage
    setNavBarButtons(main_buttons);
    //setSideBarButtons([]);

    // writeBase example
    //    writeBase("kirya", "קיריה", [{
    //        key : "זמני פתיחת שקם",
    //        value : "8:00-16:00"
    //    },{
    //        key : "חלביה",
    //        value : "קפה מגעיל"
    //    }])

    //Test
    readBasePromise("בסיס חצור").then(function (snapshot) {
        //var data = snapshot.val()
        //var name = data.name
        //var properties = data.properties
        var btns = []

        //properties.forEach(function (p) {
        //    btns.push(p.key)
        //})

        setSideBarButtons(btns)
    });
    
    
        firebase.database().ref('base_names/').once("value").then(function(snapshot){
            var names = snapshot.val();
            //return base_names;
            setSideBarButtons(names);
        });
    
    onClickNavBarButton(1);
});


var onClickNavBarButton = function(id){
    console.log("Nav bar button click detected!")
    
    if(id == 1) //Bases
        $("#includedContent").load("pages/bases.html");
    else if(id == 2) //Login
        $("#includedContent").load("pages/login.html");
}

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
    topBar.id = ("navbar_buttons");
    topBar.style.position='absolute';
    
    buttons.forEach(function(element, index, arr){
        var btn = document.createElement("a");
        btn.className="w3-bar-item w3-button w3-hover-white";
        btn.innerHTML = element;
        btn.href = 'javascript:onClickNavBarButton('+(arr.length-(index))+')';
        topBar.appendChild(btn);  
        
    })
    
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
