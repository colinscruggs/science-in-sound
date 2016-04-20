var hasOpenedContent = new Boolean(false);
var element = document.getElementById("change");
var pages = [
    "about.html",
    "topic1.html",
    "topic2.html",
    "topic3.html",
    "topic4.html",
    "topic5.html",
    "introduction.html"];

/*-----LIST MENU-----*/

function openMenu() {
    var menuStatus = document.getElementById("change").innerHTML;
    if (menuStatus == "hide topics") {
        $("#menu").animate({
            'top': '0px'
        }, 1000);
        element.innerHTML = "show topics";
        $("#change").parent().find('ul').slideToggle(1000);
    } else {
        $("#menu").animate({
            'top': '-140px'
        }, 1000);
        element.innerHTML = "hide topics";
        $("#change").parent().find('ul').slideToggle(1000);
    }
}

/*-----LOAD PAGES-----*/

function loadPage(page) {
    $("#content").fadeOut(500);
    $(".intro").hide();

    setTimeout(function () {
        $("#content").load(pages[page]);
    }, 500);

    $("#content").fadeIn(500);
    $("html, body").animate({
        scrollTop: 0
    }, 1000);

    if (hasOpenedContent == false) {

        if (page !== 0) {
            $("#left").removeClass("lw").addClass("lw-nav");
            $("#right").removeClass("rw").addClass("rw-nav");
            hasOpenedContent = true;
        }
    }
}