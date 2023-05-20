function login() {
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var rememberMeInput = document.getElementById("rememberMe");
  var message = document.getElementById("message");

  var username = usernameInput.value;
  var password = passwordInput.value;

  if (username === "" || password === "") {
    message.innerHTML = "Ви не заповнили поля логін та пароль";
    message.className = "error";
    usernameInput.className = "error";
    passwordInput.className = "error";
  } else if (username === "admin" && password === "12345") {
    message.innerHTML = "Ви авторизовані";
    message.className = "success";
    usernameInput.className = "";
    passwordInput.className = "";
  } else {
    message.innerHTML = "Неправильний логін або пароль";
    message.className = "error";
    usernameInput.className = "error";
    passwordInput.className = "error";
  }
}
