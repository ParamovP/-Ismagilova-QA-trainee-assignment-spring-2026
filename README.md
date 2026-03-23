Решение задания 1 находится в папке TASK-1, решение задания 2.2, соответственно, в папке TASK-2
 
 # Задание 1: Скриншот с багами
 pdf-файл с выгрузкой баг-репортов из Jira (bug-reports.pdf) находится в папке TASK-1.
 Если открыть его не получится из-за специфики формата файла, можно скачать его **[отсюда](https://wdfiles.ru/3wH6r)**. Пароль: QA-Avito

# Задание 2.2: Тесты UI


UI тесты на Playwright для [сайта](https://cerulean-praline-8e5aa6.netlify.app/)

### Требования

- Node.js 18+
- npm 9+

### Установка

1) Установить зависимости:

```bash
npm install
```
Проверить, что установились браузеры
```bash
npx playwright install
```
### Запуск тестов

Запустить все тесты:

```bash
npx playwright test
```

Запустить конкретный тестовый файл priceRangeCheck.test.ts:
```bash
npx playwright test tests/searchTests/priceRangeCheck.test.ts
```

Запустить конкретный тест по названию:
```bash
npx playwright test -g "Проверка работы фильтров на диапазон цены"
```
