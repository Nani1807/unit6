function Secretary(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Створення екземпляра об'єкта "Секретар"
var secretary = new Secretary("Марія", "Іванова", 28);

// Виведення властивостей об'єкта "Секретар"
console.log("Ім'я: " + secretary.firstName);
console.log("Прізвище: " + secretary.lastName);
console.log("Вік: " + secretary.age);
