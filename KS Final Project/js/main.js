console.log ('Hello from JS');

// Sidenav Fullscreen

$(document).ready(function() {
  $menuLeft = $('.sidenav-left');
  $hamburgermenu = $('.hamburgermenu');
  
  $hamburgermenu.click(function() {
    $(this).toggleClass('active');
    $('.sidenav-push').toggleClass('sidenav-push-toright');
    $menuLeft.toggleClass('sidenav-open');
  });
});


// Gallery Carosel


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activity", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activity";
}