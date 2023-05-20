var randomNumber = Math.floor(Math.random() * 100) + 1; // Генерація випадкового числа від 1 до 100

function checkGuess() {
  var guessInput = document.getElementById("guessInput");
  var message = document.getElementById("message");

  var userGuess = parseInt(guessInput.value);

  if (userGuess === randomNumber) {
    message.textContent = "Ви вгадали! Загадане число: " + randomNumber;
    message.style.color = "green";
    guessInput.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Загадане число більше введеного вами";
    message.style.color = "red";
  } else {
    message.textContent = "Загадане число менше введеного вами";
    message.style.color = "red";
  }

  guessInput.value = "";
}
