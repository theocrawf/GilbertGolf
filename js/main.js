//When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

//Get the navbar
var navbar = document.getElementById("navbar");

//Get the offset position of the navbar
var sticky = navbar.offsetTop;

//Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }else {
        navbar.classList.remove("sticky");
    }
}


//Hamburger menu
var Navigation = document.getElementById("Navigation");

Navigation.style.maxHeight = "0px";

function menutoggle(){
    if(Navigation.style.maxHeight == "0px")
    {
        Navigation.style.maxHeight = "200px";
    }
    else
    {
        Navigation.style.maxHeight = "0px"
    }
}


//Bootstrap modal copied message
function myFunction() {
var copyText = document.getElementById('myInput');
copyText.select();
copyText.setSelectionRange(0, 99999)
document.execCommand("copy")
$(".message").text("link copied");
}
