"use strict"

const hamburger = document.querySelector(".hamburger");
if (hamburger.addEventListener) {
    hamburger.addEventListener("click", hamburgermenu, false);
} else {
    hamburger.attachEvent("onclick", hamburgermenu);
};

function hamburgermenu() {
    let isExpanded = hamburger.getAttribute("aria-expanded");
    if (isExpanded === "false") {
        document.querySelector(".page-header").classList.add("nav-opened");
        hamburger.setAttribute("aria-expanded", "true");
        document.querySelector(".hamburger").classList.add("try");

    } else {
        document.querySelector(".page-header").classList.remove("nav-opened");
        hamburger.setAttribute("aria-expanded", "false");
        document.querySelector(".hamburger").classList.remove("try");
    }
};
hamburger.setAttribute("aria-expanded", "false");

window.onresize = function () {
    let h = window.innerWidth;
    if (h > 1100) {
        document.querySelector(".page-header").classList.remove("nav-opened");
        hamburger.setAttribute("aria-expanded", "false");
        document.querySelector(".hamburger").classList.remove("try");
    }
}

const navList = document.querySelector(".overlay ul");
navList.addEventListener("click", function () {
    document.querySelector(".page-header").classList.remove("nav-opened");
    hamburger.setAttribute("aria-expanded", "false");
    document.querySelector(".hamburger").classList.remove("try");
});

document.onscroll = function () {

    let nav = document.querySelector(".page-nav");
    let pageHeader = document.querySelector(".page-header");

    if (window.scrollY > (0.55 * pageHeader.offsetHeight)) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};

$(".sliding-link").click(function (e) {
    e.preventDefault();
    let link = $(this).attr("href");
    $('html,body').animate({
        scrollTop: $(link).offset().top - 150
    }, 'slow');
});

const doAnimations = function () {
    const windowHeight = window.innerHeight;
    if (windowHeight > 850) {

        let offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.section-content');
        $animatables.each(function (i) {
            const $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 500) < offset) {
                $animatable.addClass('animated');
            }
            if (($animatable.offset().top + $animatable.height() + 950) < offset) {
                $animatable.removeClass('animated');
            }
        });
    } else {
        let $animatables = $('.section-content');
        $animatables.each(function (i) {
            let $animatable = $(this);
            $animatable.addClass('animated');
        });
    }
};
$(window).on('scroll', doAnimations);
$(window).trigger('scroll');

let slideIndex = 1;
showPhoto(slideIndex);

const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", function () {
    plusSlides(-1);
}, false);
next.addEventListener("click", function () {
    plusSlides(1);
}, false);

let buttons = document.querySelectorAll('.demo');

for (let i = 0; i < buttons.length; i++) {
    let photoNumber = i + 1;
    buttons[i].addEventListener("click", function () {
        currentPhoto(photoNumber);
    }, false);
}

function plusSlides(n) {
    showPhoto(slideIndex += n);
}

function currentPhoto(n) {
    showPhoto(slideIndex = n);
}

function showPhoto(n) {
    let i;
    const slides = document.getElementsByClassName("Slides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

let tablinks = document.querySelectorAll('.tablinks');

for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function () {
        openInfo(event);
    }, false);
}

function openInfo(e) {
    let year = (e.target.value);
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(year).style.display = "block";
    e.currentTarget.className += " active";
}

document.getElementById("year2016").click();

let membersLink = document.querySelectorAll('.members-link');

for (let i = 0; i < membersLink.length; i++) {
    membersLink[i].addEventListener("click", function () {
        memberInfo(event);
    }, false);
}

function memberInfo(e) {
    let worker = (e.target.value);
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("members-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("members-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(worker).style.display = "block";
    e.currentTarget.className += " active";
}
document.getElementById("head1").click();

const date = new Date();
const rok = date.getFullYear();
document.getElementsByClassName("footer-copyright")[0].innerHTML = " Using the application you accept the terms and condition of use. Copyright &copy" + rok + " Paweł Dzienny.";