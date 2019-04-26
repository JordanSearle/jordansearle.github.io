
/*function overlayClick () {
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

*/
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
      /*
      var canvas, ctx;
      init();
      function init() {
        canvas = document.getElementById('canvas');
        if (canvas.getContext) {
          ctx = canvas.getContext("2d");

          window.addEventListener('resize', resizeCanvas, false);
          window.addEventListener('orientationchange', resizeCanvas, false);
          resizeCanvas();
        }
      }

      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }


      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

        var stars = [], // Array that contains the stars
            FPS = 60, // Frames per second
            x = 300, // Number of stars
            mouse = {
              x: 0,
              y: 0
            };  // mouse location

        // Push stars to array

        for (var i = 0; i < x; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1 + 1,
            vx: Math.floor(Math.random() * 50) - 25,
            vy: Math.floor(Math.random() * 50) - 25
          });
        }

      // Draw the scene

      function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);

        ctx.globalCompositeOperation = "lighter";

        for (var i = 0, x = stars.length; i < x; i++) {
          var s = stars[i];

          ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
        }

        ctx.beginPath();
        for (var i = 0, x = stars.length; i < x; i++) {
          var starI = stars[i];
          ctx.moveTo(starI.x,starI.y);
          if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
          for (var j = 0, x = stars.length; j < x; j++) {
            var starII = stars[j];
            if(distance(starI, starII) < 150) {
              //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
              ctx.lineTo(starII.x,starII.y);
            }
          }
        }
        ctx.lineWidth = 0.05;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.stroke();
      }

      function distance( point1, point2 ){
        var xs = 0;
        var ys = 0;

        xs = point2.x - point1.x;
        xs = xs * xs;

        ys = point2.y - point1.y;
        ys = ys * ys;

        return Math.sqrt( xs + ys );
      }

      // Update star locations

      function update() {
        for (var i = 0, x = stars.length; i < x; i++) {
          var s = stars[i];

          s.x += s.vx / FPS;
          s.y += s.vy / FPS;

          if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
          if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
        }
      }

      canvas.addEventListener('mousemove', function(e){
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      // Update and draw

      function tick() {
        draw();
        update();
        requestAnimationFrame(tick);
      }

      tick();
      */
/*
$(".html").on("animationend", function() {
  $(".html").removeClass("htmlAnimated");
  $(".css").removeClass("cssAnimated");
  $(".js").removeClass("jsAnimated");
  $(".c").removeClass("cAnimated");
  $(".ps").removeClass("psAnimated");

});
$(".parent").hover(function(){
  $(".html").addClass("htmlAnimated");
  $(".css").addClass("cssAnimated");
  $(".js").addClass("jsAnimated");
  $(".c").addClass("cAnimated");
  $(".ps").addClass("psAnimated");
});
*/
