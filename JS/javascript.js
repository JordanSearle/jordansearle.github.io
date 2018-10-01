
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
const body = document.querySelector('body');
body.addEventListener('animationend', removeLoadIn);
function removeLoadIn(e){
  this.classList.remove('animated','fadeIn');
}
