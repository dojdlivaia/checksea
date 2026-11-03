# 🌊 Морской чек-лист Макади

Интерактивный чек-лист для юных исследователей (7–10 лет), отдыхающих в бухте Макади (Египет, Красное море). Ребёнок отмечает увиденных рыб, кораллы и морских обитателей, разблокирует ачивки и делится результатом.

![Палитра](https://img.shields.io/badge/бирюза-0FB3C4?style=flat-square) ![Палитра](https://img.shields.io/badge/коралл-FF6B6B?style=flat-square) ![Палитра](https://img.shields.io/badge/солнечный-FFD93D?style=flat-square)

## ✨ Возможности

- 📋 **Чек-лист** — 20 морских обитателей с эмодзи, фактами и категориями
- 🏆 **Ачивки** — 7 достижений с тост-уведомлениями при разблокировке
- 🎓 **Сертификат** — генерация PNG через Canvas с именем ребёнка
- 📤 **Шеринг** — Web Share API на мобильных, буфер обмена на десктопе
- 💾 **Сохранение** — всё хранится в localStorage
- 📱 **Mobile-first** — работает от 320px до десктопа
- 🎨 **Анимации** — пузыри, покачивание, bounce, конфетти

## 🚀 Как развернуть на GitHub Pages

### Шаг 1: Создайте репозиторий

1. Зайдите на [github.com](https://github.com) → **New repository**
2. Назовите, например: `makadi-checklist`
3. Выберите **Public**
4. Нажмите **Create repository**

### Шаг 2: Загрузите код

```bash
# Клонируйте или создайте локально
git init
git add .
git commit -m "🌊 Морской чек-лист Макади"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/makadi-checklist.git
git push -u origin main
```

### Шаг 3: Включите GitHub Pages

1. Зайдите в **Settings** → **Pages**
2. В разделе **Source** выберите:
   - Branch: `main` (или `gh-pages` если используете деплой)
   - Folder: `/ (root)` если файлы в корне, или настройте деплой

#### Вариант А: Деплой через GitHub Actions (рекомендуется)

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

После пуша сайт будет доступен по адресу:
`https://ВАШ_ЛОГИН.github.io/makadi-checklist/`

#### Вариант Б: Простой деплой (без сборки)

Если хотите залить только готовые файлы из папки `dist/`:

```bash
# Скопируйте содержимое dist/ в ветку gh-pages
git checkout -b gh-pages
# Скопируйте файлы из dist/ в корень
git add .
git commit -m "Deploy"
git push origin gh-pages
```

### Шаг 4: Откройте сайт

Перейдите по ссылке: `https://ВАШ_ЛОГИН.github.io/makadi-checklist/`

На телефоне: откройте сайт → «Добавить на главный экран» для PWA-режима.

## 🛠 Локальная разработка

```bash
npm install
npm run dev      # Запуск dev-сервера
npm run build    # Сборка для продакшена
npm run preview  # Предпросмотр собранной версии
```

## 📁 Структура проекта

```
src/
├── App.tsx                    — Главный компонент, навигация
├── index.css                  — Стили + анимации (Tailwind)
├── main.tsx                   — Точка входа
├── data/
│   ├── creatures.ts           — Каталог обитателей (20 карточек)
│   └── achievements.ts        — Ачивки (7 штук)
├── components/
│   ├── Bubbles.tsx            — Фоновые пузыри
│   ├── Toast.tsx              — Тост-уведомления
│   ├── ProgressBar.tsx        — Прогресс-бар
│   ├── FilterChips.tsx        — Фильтры-чипсы
│   ├── CreatureCard.tsx       — Карточка обитателя
│   ├── AchievementsScreen.tsx — Экран ачивок
│   └── CertificateModal.tsx   — Генерация сертификата
└── hooks/
    └── useLocalStorage.ts     — Хук для localStorage
```

## 🐠 Как добавить новых обитателей

Откройте `src/data/creatures.ts` и добавьте в массив:

```typescript
{
  id: 'unique-id',           // Уникальный идентификатор
  name: 'Название',          // На русском
  emoji: '🐡',              // Эмодзи или SVG
  fact: 'Короткий факт',    // 1 строка
  category: 'fish',          // fish | coral | other
  rare: false,               // true если редкий
}
```

## 🏆 Ачивки

| Ачивка | Условие |
|--------|---------|
| 🎯 Первая находка | 1 карточка |
| 🤿 Начинающий ныряльщик | 5 карточек |
| 🧭 Исследователь | 10 карточек |
| 🔬 Морской биолог | 15 карточек |
| 🏆 Легенда Макади | Все 20 карточек |
| 💎 Редкая находка | Хоть один rare |
| 🪸 Коралловый сад | Все 4 коралла |

## 💡 Идеи для развития

1. **📸 Фотоохота** — камера + распознавание (TensorFlow.js) для реальных фото рыб
2. **🔊 Звуки моря** — фоновая музыка + звуки пузырей при взаимодействии
3. **🗺️ Карта рифа** — интерактивная карта с точками обитателей
4. **👨‍👩‍👧 Семейный режим** — несколько профилей, совместный прогресс
5. **🌙 Ночной дайвинг** — тёмная тема с биолюминесцентными существами

## 📄 Лицензия

MIT — используйте свободно для образовательных целей!
