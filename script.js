// step 1 (Get)
var stars = document.getElementById("stars");
var moon = document.getElementById("moon");
var mountains_behind = document.getElementById("mountains_behind");
var mountains_front = document.getElementById("mountains_front");
var text = document.getElementById("text");
var btn = document.getElementById("btn");

// step 2
addEventListener("scroll", function () {
  var value = window.scrollY; // Let's me know where am I in the site
  stars.style.left = value * 0.5 + "px"; // ask abouut the value
  moon.style.marginTop = value * 4 + "px";
  mountains_behind.style.marginTop = value * 1 + 'px';
  text.style.right = value * 2 + 'px';
});

addEventListener('scroll', function () {
  var btno2 = document.getElementById('btn2');

  if (scrollY >= 100) {
    btno2.style.display = 'block';
  } else {
    btno2.style.display = 'none';
  }
});

