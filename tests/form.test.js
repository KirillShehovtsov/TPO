const fs = require('fs');
const path = require('path');

// Загружаем HTML перед каждым тестом
beforeEach(() => {
  const html = fs.readFileSync(
    path.resolve(__dirname, '../index.html'),
    'utf8'
  );
  document.documentElement.innerHTML = html;
});

// Тест 1: заголовок страницы отображается корректно
test('заголовок страницы должен быть "Обратная связь"', () => {
  const title = document.getElementById('title');
  expect(title).not.toBeNull();
  expect(title.textContent).toBe('Обратная связь');
});

// Тест 2: поле "Имя" присутствует и имеет правильный placeholder
test('поле "Имя" должно существовать с нужным placeholder', () => {
  const nameInput = document.getElementById('name');
  expect(nameInput).not.toBeNull();
  expect(nameInput.placeholder).toBe('Введите имя');
});

// Тест 3: поле "Email" присутствует и имеет тип email
test('поле "Email" должно существовать и иметь тип email', () => {
  const emailInput = document.getElementById('email');
  expect(emailInput).not.toBeNull();
  expect(emailInput.type).toBe('email');
});

// Тест 4: кнопка отправки присутствует с правильным текстом
test('кнопка отправки должна иметь текст "Отправить"', () => {
  const btn = document.getElementById('submit-btn');
  expect(btn).not.toBeNull();
  expect(btn.textContent).toBe('Отправить');
});