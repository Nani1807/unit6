window.addEventListener("load", function() {
  var box = document.getElementById("box");
  var upBtn = document.getElementById("upBtn");
  var downBtn = document.getElementById("downBtn");
  var leftBtn = document.getElementById("leftBtn");
  var rightBtn = document.getElementById("rightBtn");

  upBtn.addEventListener("click", function() {
    animateBox("up");
  });

  downBtn.addEventListener("click", function() {
    animateBox("down");
  });

  leftBtn.addEventListener("click", function() {
    animateBox("left");
  });

  rightBtn.addEventListener("click", function() {
    animateBox("right");
  });

  function animateBox(direction) {
    var currentTop = parseInt(box.style.top) || 0;
    var currentLeft = parseInt(box.style.left) || 0;

    if (direction === "up") {
      box.style.top = currentTop - 100 + "px";
    } else if (direction === "down") {
      box.style.top = currentTop + 100 + "px";
    } else if (direction === "left") {
      box.style.left = currentLeft - 100 + "px";
    } else if (direction === "right") {
      box.style.left = currentLeft + 100 + "px";
    }
  }
});
