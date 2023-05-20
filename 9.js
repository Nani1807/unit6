function Manager(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Створення екземпляра об'єкта "Менеджер"
var manager = new Manager("Іван", "Петров", 35);

// Виведення властивостей об'єкта "Менеджер"
console.log("Ім'я: " + manager.firstName);
console.log("Прізвище: " + manager.lastName);
console.log("Вік: " + manager.age);
