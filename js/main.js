var hasClickedMenu = new Boolean(false);
var element = document.getElementById("change");

/*-----LIST MENU-----*/

/*$("#menu > li a").click(function() {
    $("#change").parent().find('ul').slideToggle(1000);
}); */

function openMenu() {
    
    if(hasClickedMenu == true) {
        $("#menu").animate({
            'top': '0px'
        },1000);
        hasClickedMenu = false; 
        element.innerHTML = "show topics";
        
    }
    
    else {
        $("#menu").animate({'top': '-140px'}, 1000);
        hasClickedMenu = true;
        element.innerHTML = "hide topics";
    }
    
    $("#change").parent().find('ul').slideToggle(1000);
}

/*-----LOAD PAGES-----*/

var pages = [
    "about.html",
    "topic1.html",
    "topic2.html",
    "topic3.html",
    "topic4.html",
    "topic5.html"
];

var hasOpenedContent = new Boolean(false);

function loadPage(page) {
        
    $( "#content" ).fadeOut(1000);
    $( "#bodyContent ").hide();
    $( ".intro").hide();
    
    if(hasOpenedContent == false) {
        
        if(page !== 0) {
            $( "#left" ).removeClass( "lw" ).addClass( "lw-nav" );
            $( "#right" ).removeClass( "rw" ).addClass ("rw-nav" );
            hasOpenedContent == true;
        }
    }
    
    setTimeout(function(){
        $( "#content" ).load(pages[page]);
        if(hasClickedMenu == true) { openMenu(); };
    }, 1000); 

    $( "#content" ).fadeIn(1000);
    
}