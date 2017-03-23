$(document).ready(function () {
    console.log("bases page ready!");

    //Populate list
    showSpinner(true);
    getBases($('#bases_list'));

    //
});

var popluateList = function (list, bases) {
    for (var i = 0; i < bases.length; i++) {
        list[0].innerHTML += "<li><button class=\"w3-indigo w3-btn w3-round w3-xlarge\">" + bases[i] + "</button></li>";
    }
}

var getBases = function (list) {
    readBases().then(function (base_names) {
        console.log(JSON.stringify(base_names));
        popluateList(list, base_names);
        showSpinner(false);
    });
}

function showSpinner(f) {

    if (f)
        $("#loading_spinner").attr("class", "");
    else
        $("#loading_spinner").attr("class", "w3-hide");
}
