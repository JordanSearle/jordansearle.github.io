
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


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
      }
