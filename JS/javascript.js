// A simple example to get my latest tweet and write to a HTML element with
// id "example1". Also automatically hyperlinks URLS and user mentions and
// hashtags.

//Twitter Config
var configProfile = {
  "profile": {"screenName": 'Kernow_jordan'},
  "id": '282752713',
  "domId": 'myTwitter',
  "maxTweets": 5,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "showImages": false,
};
twitterFetcher.fetch(configProfile);
//Check for Window resize
window.addEventListener("resize", mobileResize);
function mobileResize(){
  if(window.innerWidth > 1000){
  dropdowns.forEach(dropdown => dropdown.removeAttribute("style", "display:none"));
}
};
//Mobile Dropdown Menu
const dropdowns = document.querySelectorAll('.headShown');
function mobileDropDown(){
  if(dropdowns[1].style.display == "none"){
    dropdowns.forEach(dropdown => dropdown.setAttribute("style", "display:block"));}
  else{
    dropdowns.forEach(dropdown => dropdown.setAttribute("style", "display:none"));}
}
//Animations
const links = document.querySelectorAll('.link');
links.forEach(link => link.addEventListener('mouseenter', addAnimation));
links.forEach(link => link.addEventListener('animationend', removeAnimation));
const blured = document.querySelectorAll('.blur');
blured.forEach(blur => blur.addEventListener('mouseenter', addAnimation));
blured.forEach(blur => blur.addEventListener('animationend', removeAnimation));
function addAnimation(e){
  this.classList.add('animated','tada');
};
function removeAnimation(e){
  this.classList.remove('animated','tada');
};
const body = document.querySelector('body');
body.addEventListener('animationend', removeLoadIn);
function removeLoadIn(e){
  this.classList.remove('animated','fadeIn');
}
var slideIndexs = 0;
carouselText();

function carouselText() {
    var i;
    var timeout
    var x = document.getElementsByClassName("typewriter");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
    slideIndexs++;
    if (slideIndexs > x.length) {slideIndexs = 1}
    x[slideIndexs-1].style.display = "block";
    timeout = 10000;
    setTimeout(carouselText, timeout);
}


function mouseOn() {
    if(window.innerWidth > 768){
  displays[slideIndex-1].style.display = "block";
}}
function mouseOff() {
  if(window.innerWidth > 768){
  displays[slideIndex-1].style.display = "none";
}}
var j;

//slideShow
function setval(varval)
{
	slideIndex = varval;
  slideChange();
}

const slideDiv = document.querySelector('.imageHover');
slideDiv.addEventListener('mouseenter', mouseOn);
slideDiv.addEventListener('mouseleave', mouseOff);

var x = document.getElementsByClassName("mySlides");
var displays = document.getElementsByClassName("none");
var slideIndex = 0;
carousel();
var timeout = 10000;

function carousel() {
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    slideChange();
}
function slideChange() {
  window.clearTimeout(timeoutHandle);
  for (j = 0; j < x.length; j++) {
      x[j].style.display = "none";
    }
  x[slideIndex-1].style.display = "block";
  timeoutHandle = window.setTimeout(carousel, timeout);
}
var timeoutHandle = window.setTimeout(carousel, timeout);
