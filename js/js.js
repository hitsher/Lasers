"use strict"

var date = new Date();
var rok = date.getFullYear();
document.getElementsByClassName("footer-copyright")[0].innerHTML = " Using the application you accept the terms and condition of use. Copyright &copy" + rok + " Paweł Dzienny.";


var hamburger = document.querySelector(".hamburger");
if (hamburger.addEventListener) {
hamburger.addEventListener("click",hamburgermenu, false);}
else{
    hamburger.attachEvent("onclick",hamburgermenu);
};

    function hamburgermenu() {
    let isExpanded = hamburger.getAttribute("aria-expanded");
    console.log(isExpanded);
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

var navList = document.querySelector(".overlay ul");
navList.addEventListener("click", function () {
    document.querySelector(".page-header").classList.remove("nav-opened");
    hamburger.setAttribute("aria-expanded", "false");
    document.querySelector(".hamburger").classList.remove("try");
});


$(function () {
    $(document).scroll(function () {
      let $nav = $(".page-nav");
      let $pagenav =$(".page-header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $pagenav.height());
    });
  });

$(".sliding-link").click(function (e) {
    e.preventDefault();
    let aid = $(this).attr("href");
    $('html,body').animate({
        scrollTop: $(aid).offset().top
    }, 'slow');
});

var doAnimations = function () {
    let wH = window.innerHeight;
    if (wH > 800) {

    let offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.section-content');

    if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
    }

    $animatables.each(function (i) {
        var $animatable = $(this);
        if (($animatable.offset().top + $animatable.height() - 500) < offset) {
            $animatable.removeClass('animatable').addClass('animated');
        }
    });
}   else { 
    let offset = $(window).scrollTop() + $(window).height(),
    $animatables = $('.section-content');

    if ($animatables.length == 0) {
    $(window).off('scroll', doAnimations);
}

$animatables.each(function (i) {
    let $animatable = $(this);
    if (($animatable.offset().top + $animatable.height() - 3000) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
    }
});}
};
$(window).on('scroll', doAnimations);
$(window).trigger('scroll');


var slideIndex1 = 1;
showPhoto(slideIndex1);

var prev = document.getElementById("prev");
var next = document.getElementById("next");

prev.addEventListener("click", function() {plusSlides(-1);},false);
next.addEventListener("click", function() {plusSlides(1);},false);

function plusSlides(n) {
    showPhoto(slideIndex1 += n);
}

var photo1 = document.getElementById('photo1');
var photo2 = document.getElementById('photo2');
var photo3 = document.getElementById('photo3');
var photo4 = document.getElementById('photo4');
var photo5 = document.getElementById('photo5');
var photo6 = document.getElementById('photo6');

photo1.addEventListener("click", function() {currentPhoto(1);},false);
photo2.addEventListener("click", function() {currentPhoto(2);},false);
photo3.addEventListener("click", function() {currentPhoto(3);},false);
photo4.addEventListener("click", function() {currentPhoto(4);},false);
photo5.addEventListener("click", function() {currentPhoto(5);},false);
photo6.addEventListener("click", function() {currentPhoto(6);},false);

function currentPhoto(n) {
    showPhoto(slideIndex1 = n);
}

function showPhoto(n) {
    let i;
    let slides = document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1 - 1].style.display = "block";
    dots[slideIndex1 - 1].className += " active";
    captionText.innerHTML = dots[slideIndex1 - 1].alt;
}

var year2016 = document.getElementById('year2016');
var year2015 = document.getElementById('year2015');
var year2014 = document.getElementById('year2014');
var year2013 = document.getElementById('year2013');

year2016.addEventListener("click", function() {openInfo(event, '2016');},false);
year2015.addEventListener("click", function() {openInfo(event, '2015');},false);
year2014.addEventListener("click", function() {openInfo(event, '2014');},false);
year2013.addEventListener("click", function() {openInfo(event, '2013');},false);


function openInfo(e, year) {
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


var member1 = document.getElementById('head1');
var member2 = document.getElementById('head2');
var member3 = document.getElementById('student1');
var member4 = document.getElementById('student2');
var member5 = document.getElementById('student3');
var member6 = document.getElementById('student4');


member1.addEventListener("click", function() {memberInfo(event, 'Head1');},false);
member2.addEventListener("click", function() {memberInfo(event, 'Head2');},false);
member3.addEventListener("click", function() {memberInfo(event, 'Student1');},false);
member4.addEventListener("click", function() {memberInfo(event, 'Student2');},false);
member5.addEventListener("click", function() {memberInfo(event, 'Student3');},false);
member6.addEventListener("click", function() {memberInfo(event, 'Student4');},false);



function memberInfo(e, worker) {
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
