
function overlayClick () {
  document.getElementById("overDIV").addEventListener("click", addRemoveAnimation);
  document.getElementById("overDIV").addEventListener("animationend", removeAnimationDiv);

}
function addRemoveAnimation(e){
  this.classList.add('animated','slideOutUp','faster');
  document.body.classList.remove('bodyOverflow');
};
function removeAnimationDiv(e){
  this.classList.remove('animated','slideOutUp','faster');
  document.getElementById('overDIV').style.display = "none";
};
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

//Animations
const links = document.querySelectorAll('.link');
links.forEach(link => link.addEventListener('mouseenter', addAnimation));
links.forEach(link => link.addEventListener('animationend', removeAnimation));
function addAnimation(e){
  this.classList.add('animated','tada');
};
function removeAnimation(e){
  this.classList.remove('animated','tada');
};
//const body = document.querySelector('body');
//body.addEventListener('animationend', removeLoadIn);
//function removeLoadIn(e){
  //this.classList.remove('animated','fadeIn');
//}
//Twitter Fetcher
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
