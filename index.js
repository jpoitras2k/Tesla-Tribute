var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

// Template for creating a custom Slide object
function Slide(title, background) {
  this.title = title;
  this.background = background;
  this.id = "slide" + slideIndex;
  slideIndex++;
  slideArray.push(this);
}

// Creating our slide objects, you can make as many as you want
var nissanLeaf = new Slide(
  "Nissan Leaf",
  "http://images.hgmsites.net/hug/2016-nissan-leaf_100527043_h.jpg"
);
var tesla = new Slide(
  "Tesla Model S",
  "http://cdn.bmwblog.com/wp-content/uploads/2015/07/01-2012-tesla-model-s-fd-1347336745.jpg"
);
var bmw = new Slide(
  "BMW i3",
  "http://www.telegraph.co.uk/cars/images/2016/03/08/bmw-i3-review-xlarge_trans++eildaIjvO-HwwPuuuizVFdMTcM0bIVyYpvFrGEXnwHY.jpg"
);
var mercedes = new Slide(
  "Mercedes SLS",
  "http://a.img-zemotoring.com/media/news/2012/09/mercedes-sls-electric-drive-06.jpg"
);

function buildSlider() {
  // A variable to hold all our HTML
  var myHTML;

  // Go through the Array and add the code to our HTML
  for (var i = 0; i < slideArray.length; i++) {

    myHTML += "<div id='" + slideArray[i].id +
      "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
      "<h3>"+"- " + slideArray[i].title + "</h3>" +
      "</div>" +
      "</div>";

  }

  document.getElementById("mySlider").innerHTML = myHTML;

  document.getElementById("slide" + currentSlideIndex).style.left = 0;

}

buildSlider();

// Navigates to the previous slide in the list
function prevSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === 0) {
    nextSlideIndex = slideArray.length - 1;
  } else {
    nextSlideIndex = currentSlideIndex - 1;
  }

  document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
  document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");

  currentSlideIndex = nextSlideIndex;
}

// Navigates to the next slide in the list
function nextSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === (slideArray.length - 1)) {
    nextSlideIndex = 0;
  } else {
    nextSlideIndex = currentSlideIndex + 1;
  }

  document.getElementById("slide" + nextSlideIndex).style.left = "100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
  document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

  currentSlideIndex = nextSlideIndex;
}