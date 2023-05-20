function changeColor() {
  var divs = document.getElementsByTagName("div");
  var redIndex = -1;
  
  // Знаходимо елемент div з класом .red
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].classList.contains("red")) {
      redIndex = i;
      break;
    }
  }
  
  // Змінюємо кольори елементів div
  for (var i = 0; i < divs.length; i++) {
    if (i === redIndex) {
      divs[i].classList.remove("red");
    } else {
      divs[i].classList.add("red");
    }
  }
}
