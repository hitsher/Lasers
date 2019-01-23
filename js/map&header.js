"use strict"

let slideIndexNav = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexNav++;
    if (slideIndexNav > slides.length) {
        slideIndexNav = 1
    }
    slides[slideIndexNav - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

function initMap() {
    
    let pwr = {lat: 51.107873, lng: 17.061731};
   
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: pwr});
    
    let marker = new google.maps.Marker({position: pwr, map: map});
  }