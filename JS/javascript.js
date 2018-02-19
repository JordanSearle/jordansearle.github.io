// A simple example to get my latest tweet and write to a HTML element with
// id "example1". Also automatically hyperlinks URLS and user mentions and
// hashtags.
var x = 0;
const dropdowns = document.querySelectorAll('.headShown');
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
  x = 1;
}
};
//Mobile Dropdown Menu
function mobileDropDown(){
  if(x == 0){
    dropdowns.forEach(dropdown => dropdown.setAttribute("style", "display:block"));
    x = 1;
  }
  else{
    dropdowns.forEach(dropdown => dropdown.setAttribute("style", "display:none"));
    x = 0;
  }
};
//Link Animations
const links = document.querySelectorAll('.link');
links.forEach(link => link.addEventListener('mouseenter', addBounce));
links.forEach(link => link.addEventListener('animationend', removeBounce));
function addBounce(e){
  this.classList.add('animated','tada');
};
function removeBounce(e){
  this.classList.remove('animated','tada');
};
//slideShow
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var timeout
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    timeout = 10000;
    setTimeout(carousel, timeout);
}
