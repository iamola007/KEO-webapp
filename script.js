
function getStarted(){
    var home =  document.getElementById('welcome-page');
    var start = document.getElementById('contain');
    home.style.display = 'none';
    start.style.display = 'block';
}


function displayContent()   {
    document.getElementById('contain').style.display = 'block';
}


var slideIndex = 1;
showSlides(slideIndex);

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

  slides[slideIndex-1].style.display = "block";
}