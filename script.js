'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let bestScore = 0


document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20
  document.querySelector('body').style.backgroundColor = '#000'
  document.querySelector('.score').textContent = score
  document.querySelector('.question').style.width = '25rem'
  document.querySelector('.number-input').value = ''
  document.querySelector('.question').textContent = '???'
  document.querySelector('.guess-message').textContent = 'Начни угадывать!'
})


document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!'
// Won
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно!'
    document.querySelector('.question').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#386641'
    document.querySelector('.question').style.width = '50rem'
    if (bestScore < score) {
      bestScore = score
      document.querySelector('.bestscore').textContent = bestScore
    }
// Number is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      score--;
      document.querySelector('.score').textContent = score
      document.querySelector('body').style.backgroundColor = '#6f1d1b'
      setTimeout(() => {
        document.querySelector('body').style.backgroundColor = '#000'
      }, 500);
    } else {
      document.querySelector('.guess-message').textContent = 'Вы проиграли :('
      document.querySelector('.score').textContent = 0
      document.querySelector('body').style.backgroundColor = '#6f1d1b'
    }
  }
})