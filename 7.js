// Функція для перевірки віку гравця
function checkAge(age) {
  if (age >= 18) {
    console.log('Ласкаво просимо до гри!');
    startGame();
  } else {
    console.log('Ви надто молоді для цієї гри!');
  }
}

// Функція для запуску гри
function startGame() {
  console.log('--- Початок гри ---');

  // Жанр гри
  const genre = 'пригоди';
  console.log('Жанр гри:', genre);

  // Питання та варіанти відповідей
  const questions = [
    {
      question: 'Чи подобається вам грати в пригодницькі ігри?',
      options: ['Так', 'Ні']
    },
    {
      question: 'Чи бажаєте ви розпочати цю квест-гру?',
      options: ['Так', 'Ні']
    },
    // Додайте інші питання тут
  ];

  // Привітання та опис гри
  console.log('Ласкаво до квест-гри в жанрі', genre);
  console.log('Вам будуть задані деякі питання. Будь ласка, надайте відповіді.');

  // Перебираємо питання та отримуємо відповіді гравця
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    console.log('Питання', i + 1, ':', question.question);
    console.log('Варіанти відповідей:', question.options.join(', '));

    // Отримуємо відповідь гравця
    const answer = prompt('Введіть номер відповіді:');

    // Обробка відповіді
    if (answer !== null) {
      const selectedOption = question.options[parseInt(answer) - 1];
      console.log('Ви обрали:', selectedOption);
    } else {
      console.log('Ви не надали відповідь');
    }
  }

  console.log('--- Кінець гри ---');
}

// Запуск гри
const age = parseInt(prompt('Введіть ваш вік:'));
checkAge(age);
