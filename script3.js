window.addEventListener("load", function() {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");

  setInterval(function() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var randomX = Math.floor(Math.random() * (screenWidth - 100));
    var randomY = Math.floor(Math.random() * (screenHeight - 100));

    box1.style.left = randomX + "px";
    box1.style.top = randomY + "px";

    randomX = Math.floor(Math.random() * (screenWidth - 100));
    randomY = Math.floor(Math.random() * (screenHeight - 100));

    box2.style.left = randomX + "px";
    box2.style.top = randomY + "px";

    randomX = Math.floor(Math.random() * (screenWidth - 100));
    randomY = Math.floor(Math.random() * (screenHeight - 100));

    box3.style.left = randomX + "px";
    box3.style.top = randomY + "px";
  }, 1000);
});
