
let body = document.getElementById("body");
let landing = document.getElementById('landing');
let mainLogo = document.querySelector(".site-header__logo");
let picturesReel = document.getElementById("picturesReel");
let about = document.getElementById("about-us");
let logos = document.getElementsByClassName("clients__logo");
let ourClients = document.getElementById("ourClients");
let clientsBtn = document.getElementById("clients-btn");
let footer = document.getElementById("footer");
let testimonials = document.getElementById("testimonials");
let languages = document.querySelectorAll(".language-nav__element");
let arrow = document.querySelector(".back-top__arrow");
let back = document.querySelector(".back-top__back");
let productsGrid = document.getElementById("products-grid");
let productsBtn = document.getElementById("product-btn");
let carousel = document.querySelector(".carousel");
let menu = document.querySelector(".menu");
let menuLink = document.querySelector("#menu__link");
let menuTitles = document.querySelectorAll(".menu__title");
let menuCross = document.querySelector(".menu__modal");

//Contact forms in footer
let con1 = document.getElementById("contact-1");
let con2 = document.getElementById("contact-2");
let con3 = document.getElementById("contact-3");
let cons = [con1, con2, con3];


//Body bacground to white and back button and language selection to black
function toWhite() {
    body.style.backgroundColor = "white";
    arrow.style.stroke = "black";
    back.style.color = "black";
    for(const language of languages) {
        language.style.color = "black";
    }
}
//Body bacground to white and back button and language selection to black
function toBlack() {
    body.style.backgroundColor = "black";
    arrow.style.stroke = "white";
    back.style.color = "white";
    for(const language of languages) {
        language.style.color = "white";
    }
}
//Set Element opacity to 1 rendering it visible
function opacity(element) {
    element.style.opacity = 1;
}

//Set Element opacity to 0 rendering it invisible
function opacityOut(element) {
    element.style.opacity = 0;
}
//Open Modal and render menu in modal
function modal() {
    menu.classList.toggle("menu__active");
    menuCross.classList.toggle("menu__cross");
}


//Set menu and main logo color depending if background is white (1) or black (2)
function changeMenu(color) {

    if (color == 1) {
        menuLink.classList.remove("site-header__white");
        menuLink.classList.add("site-header__black");

        mainLogo.classList.remove("site-header__logo--white");
        mainLogo.classList.add("site-header__logo--black");
    } else {
        menuLink.classList.remove("site-header__black");
        menuLink.classList.add("site-header__white");

        mainLogo.classList.remove("site-header__logo--black");
        mainLogo.classList.add("site-header__logo--white");
    }
    
}


//Adding percentage on scrolling of page 0 - 100%

function scrollF() {
    let height = document.documentElement, 
        body = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
        percentage = (height[st]||body[st]) / ((height[sh]||body[sh]) - height.clientHeight) * 100;
    return percentage;
}

//Event Listener on scroll
window.addEventListener("scroll", function (event) {

console.log(scrollF());
//Landing
    if(scrollF() >= 0 && scrollF() < 13.55) {
        toWhite();
        changeMenu(1);
        opacity(landing);
        opacityOut(productsGrid);

    }
//Products
    if(scrollF() > 13.55 && scrollF() < 45) {
        toBlack();
        changeMenu(2);
        opacity(productsGrid);
        opacityOut(landing);
        opacityOut(about);
        //Remove animation for images reel
        picturesReel.classList.remove("reel-active");
        //Remove btn from products grid
        productsBtn.classList.remove("btn-active");
    }
//Render btn for products grid
    if(scrollF() > 33.50 && scrollF() < 45) {
        productsBtn.classList.add("btn-active");
    }
//About Us
    if(scrollF() > 45 && scrollF() < 64.73) {
        toWhite();
        changeMenu(1);
        opacity(about);
        opacityOut(productsGrid);
        opacityOut(ourClients);
        //start animation for images reel
        picturesReel.classList.add("reel-active");
        //Remove btn from products grid
        productsBtn.classList.remove("btn-active");
        //Remove animation for clients logo
        for (const logo of logos) {
            logo.classList.remove("client-animation");
          }
        clientsBtn.classList.remove("client-animation");

    }

//Our Clients
    if(scrollF() > 64.73 && scrollF() < 82) {
        toBlack();
        changeMenu(2);
        opacity(ourClients);
        opacityOut(about);
        opacityOut(carousel);
        opacityOut(testimonials);
        //Start animation for clients logo
        for (const logo of logos) {
            logo.classList.add("client-animation");
          }
        clientsBtn.classList.add("client-animation");
        //Remove animation for images reel
        picturesReel.classList.remove("reel-active");
    }
//Testimonials in Carousel
    if(scrollF() > 82 && scrollF() < 90.33) {
        toWhite();
        changeMenu(1);
        opacity(testimonials);
        opacity(carousel);
        opacityOut(ourClients);
        opacityOut(footer);
        //Remove animation in clients section
        for (const logo of logos) {
            logo.classList.remove("client-animation");
          }
        clientsBtn.classList.remove("client-animation");
        //Remove animation for footer
        for(const con of cons) {
            con.classList.remove("contact-reset");
        }
    }
//Footer/Contact Us
    if(scrollF() > 90.33) {
        //Start animation for email, phone number and address in contact us
        
        for(const con of cons) {
            con.classList.add("contact-reset");
        }
        toBlack();
        changeMenu(2);
        opacity(footer);
        opacityOut(testimonials);
        opacityOut(carousel);
    }

});






