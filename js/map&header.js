var slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

function initMap() {
    
    var pwr = {lat: 51.107873, lng: 17.061731};
   
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: pwr});
    
    var marker = new google.maps.Marker({position: pwr, map: map});
  }