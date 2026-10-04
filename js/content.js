/**
 * Все тексты, ссылки и статусы сайта.
 * Чтобы поменять формулировку, порядок или ссылку — правьте этот файл.
 *
 * CONTACT_LINK_TODO — куда ведёт кнопка «Обсудить задачу».
 * Сейчас это блок контактов на странице. Не подставлять ссылку на канал.
 */
const CONTACT_LINK_TODO = "#contact";

const SITE = {
  contactLink: CONTACT_LINK_TODO,
  channels: [
    { label: "Telegram", href: "https://t.me/neiroseti_i_biznes" },
    { label: "MAX", href: "https://max.ru/channel_neiroseti_i_biznes" },
    { label: "Сообщество ВК", href: "https://vk.ru/club238909016" },
  ],
  portrait: {
    src: "images/ekaterina-nesterenko.webp",
    alt: "Екатерина Нестеренко",
    file: "images/ekaterina-nesterenko.webp",
  },
  nav: [
    { label: "Проекты", href: "#projects" },
    { label: "Обо мне", href: "#about" },
    { label: "Контакты", href: "#contact" },
  ],
  aboutTitle: "Обо мне",
  aboutAccentMark: "С 2016 года",
  aboutAccent: "развиваю собственный бизнес",
  aboutLead: [
    "Мой бренд медицинской одежды CAPRIZNAYA MODA — это полный цикл: от разработки моделей и производства до продвижения и продаж.",
    "Нейросети я начала применять в своей компании, чтобы сокращать затраты и освобождать время. Теперь создаю сайты, ботов и рабочие материалы для других предпринимателей.",
  ],
  aboutMethodTitle: "Как берусь за задачу",
  aboutMethod: [
    {
      title: "Разбираюсь в бизнесе",
      text: "Что важно вашим клиентам, где теряются заявки и какие задачи отнимают время у команды.",
    },
    {
      title: "Продумываю решение",
      text: "Сама выстраиваю структуру и пишу тексты под вашу задачу.",
    },
    {
      title: "Собираю и проверяю",
      text: "Создаю решение с помощью ИИ и проверяю путь пользователя — от первого знакомства до обращения к вам.",
    },
  ],
  contactsTitle: "Контакты",
  contactsLead: "Напишите, если есть задача: сайт, бот или материалы для бизнеса.",
  contacts: [
    { label: "Почта", value: "polkra@mail.ru", href: "mailto:polkra@mail.ru" },
    { label: "Telegram", value: "@NEk1900", href: "https://t.me/NEk1900" },
    {
      label: "MAX",
      value: "Написать в MAX",
      href: "https://max.ru/u/f9LHodD0cOK0oeIIcgejwnRnYUPH6lx8SqRFydyITMtkvERzMYKDKgEU2ck",
    },
    { label: "Телефон", value: "+7 927 277-68-76", href: "tel:+79272776876" },
    {
      label: "ВКонтакте",
      value: "Написать сообщение",
      href: "https://vk.ru/id828842579",
    },
  ],
  channelsTitle: "Каналы",
  channelsLead: "Здесь — о нейросетях и о том, как встраивать их в работу бизнеса.",
  projectsLead:
    "Восемь работ: от внедрения ИИ в свой бренд до сайтов, приложения, игры и контента для клиентов.",
  projectsMore: {
    label: "Ещё работы — на Яндекс Диске",
    href: "https://disk.yandex.ru/d/ieRHcf3QnrfjpQ",
  },
  hero: {
    name: "Екатерина Нестеренко",
    eyebrow: "Предприниматель · AI-специалист",
    titleBefore: "Создаю сайты, ботов и",
    titleAccent: "цифровые продукты",
    titleAfter: "для бизнеса",
    lead:
      "Беру задачу компании и довожу её до рабочего результата: сайт, бот или материалы, которые можно сразу встроить в работу.",
    primaryCta: { label: "Смотреть проекты", href: "#projects" },
    secondaryCta: { label: "Обсудить задачу", href: "#contact" },
    services: "Сайты и веб-сервисы · ИИ в работе компании · Упаковка и продвижение",
  },
  services: [
    {
      title: "Сайты и веб-сервисы",
      short: "Лендинг, сайт с кабинетом, структура и тексты",
      text: "Лендинги, многостраничные сайты и сервисы с личными кабинетами: структура, тексты и путь пользователя.",
    },
    {
      title: "ИИ в работе компании",
      short: "Боты, карточки для маркетплейсов и нейровидео",
      text: "Боты и рабочие инструменты, карточки товаров и нейровидео, которые входят в ежедневную работу.",
    },
    {
      title: "Упаковка и продвижение",
      short: "Каналы, Авито, контент, Директ и основа для SEO",
      text: "Каналы, профиль и объявления на Авито, контент, описание рекламы в Директе и основа для SEO.",
    },
  ],
  featured: [
    {
      id: "capriznaya",
      layout: "system",
      kicker: "CAPRIZNAYA MODA",
      title: "ИИ в действующем бизнесе",
      summary:
        "Собственный бренд медицинской одежды. Задача — встроить ИИ в ежедневную работу с материалами, каналами и клиентами.",
      points: [
        "Карточки товаров для маркетплейсов",
        "Контент для розницы и опта",
        "Презентации для клиентов",
        "Боты и рабочие инструменты",
        "Рекламные ролики, нейровидео и клипы",
      ],
      role: "Постановка задач, логика решений, материалы, внедрение и проверка в работе компании.",
      cover: "Материалы, каналы и боты для одного бренда.",
      href: "",
      status: "",
      media: [
        {
          file: "images/capriznaya/product-card.webp",
          caption: "Карточка товара",
        },
        {
          file: "images/capriznaya/neuro-video.webp",
          caption: "Кадр из нейровидео",
        },
        {
          file: "images/capriznaya/bot-order.webp",
          caption: "Бот подсказывает размер, наличие и цену",
        },
        {
          file: "images/capriznaya/bot-photo.webp",
          caption: "Бот присылает фото модели",
        },
      ],
    },
    {
      id: "weight-program",
      layout: "feature",
      kicker: "Веб-сервис",
      title: "Персональная программа снижения веса",
      titleLines: ["Персональная программа", "снижения веса"],
      summary:
        "Многостраничный сайт с регистрацией, личными кабинетами пользователей и админ-панелью. Создан с помощью вайбкодинга.",
      points: [],
      role: "",
      cover: "Главная, личный кабинет и админ-панель.",
      href: "https://nizkiives.ru",
      linkLabel: "Открыть сайт",
      status: "",
      media: [
        { file: "images/weight-program/home.webp", caption: "Главная" },
        { file: "images/weight-program/today.webp", caption: "Личный кабинет: сегодня" },
        { file: "images/weight-program/nutrition.webp", caption: "Питание" },
        { file: "images/weight-program/admin.webp", caption: "Админ-панель" },
      ],
    },
    {
      id: "laserroom",
      layout: "devices",
      kicker: "Laserroom",
      title: "Сайт и цифровая подача услуг специалиста",
      context:
        "Проект для специалиста по лазерной эпиляции. Сайт и фото- и видеоконтент для ВК и Telegram.",
      summary:
        "Сайт с услугами, комплексами и предложением первого визита. Рядом — фото- и видеоконтент для ВК и Telegram.",
      points: [],
      role: "Подача услуг, фото- и видеоконтент для ВК и Telegram, сайт.",
      cover: "Услуги, комплексы и путь к сообщению в мессенджер.",
      href: "https://irke-laser-room.lovable.app/",
      status: "",
      media: [
        { file: "images/laserroom/hero.webp", caption: "Главная и предложение для первого визита" },
        { file: "images/laserroom/packages.webp", caption: "Комплексы" },
        { file: "images/laserroom/prepare.webp", caption: "Пост «Как подготовиться к лазерной эпиляции»" },
        { file: "images/laserroom/showing-work.webp", caption: "Серия сториз для контента" },
      ],
    },
    {
      id: "autoservice",
      layout: "path",
      kicker: "Раскоксовка",
      title: "Авито, лендинг и продвижение",
      titleLines: ["Авито, лендинг", "и продвижение"],
      context:
        "Раскоксовка. Авито, лендинг, баннеры, план продвижения, Директ и основа для SEO.",
      summary:
        "Упаковка профиля на Авито: тексты объявлений и визуал к ним. Для лендинга подготовлены структура, тексты блоков, визуал и рекламные баннеры. Отдельно — план продвижения услуг, описание настройки Директа и основа для SEO.",
      points: [
        "Профиль и тексты объявлений на Авито",
        "Структура, тексты и визуал лендинга",
        "План продвижения и описание Директа",
        "Основа для SEO",
      ],
      role: "Авито, структура и тексты лендинга, баннеры, план продвижения, Директ и основа для SEO.",
      cover: "Авито, лендинг, баннеры и план продвижения.",
      href: "",
      status: "",
      media: [
        { file: "images/autoservice/banner.webp?v=2", caption: "Рекламный баннер" },
        { file: "images/autoservice/before-after.webp", caption: "Материал «до и после»" },
        { file: "images/autoservice/problems.webp", caption: "Блок для лендинга" },
        { file: "images/autoservice/avito.webp", caption: "Оформление профиля на Авито" },
      ],
    },
    {
      id: "psychology-channels",
      layout: "devices",
      kicker: "Цифровая психология",
      title: "Каналы, контент и профиль на Авито",
      titleLines: ["Каналы, контент", "и профиль на Авито"],
      summary:
        "Упаковка каналов в Telegram и MAX и профиля на Авито. Ведение каналов по контент-плану: посты и визуал. Линия одна — не предсказание, а ориентир по дате рождения.",
      points: [],
      role: "Упаковка каналов и Авито, контент-план, тексты и визуал.",
      cover: "Каналы, посты и профиль на Авито.",
      href: "",
      status: "",
      media: [
        {
          file: "images/psychology/post-help.webp",
          caption: "Пост «Почему я всем помогаю»",
        },
        {
          file: "images/psychology/post-faq.webp",
          caption: "Карточка «Частые вопросы»",
        },
        {
          file: "images/psychology/avito-profile.webp",
          caption: "Упаковка профиля на Авито",
        },
        {
          file: "images/psychology/post-child.webp",
          caption: "Пост «Ребёнок ленится — или мы ищем не там?»",
        },
      ],
    },
    {
      id: "nutritionist",
      layout: "devices",
      kicker: "Нутрициолог",
      title: "Контент для сообщества во ВКонтакте",
      titleLines: ["Контент для сообщества", "во ВКонтакте"],
      summary:
        "Стратегия продвижения во ВКонтакте: анализ целевой аудитории, план продвижения и контент-план. Для сообщества подготовлены посты, визуалы, квизы, серии сториз и нейроклипы.",
      points: [],
      role: "",
      cover: "Стратегия, контент-план и материалы для сообщества.",
      href: "",
      status: "",
      media: [
        {
          file: "images/nutritionist/video.webp",
          caption: "Кадр из нейровидео",
        },
        {
          file: "images/nutritionist/quiz.webp",
          caption: "Квиз «Насколько сбалансирован ваш рацион?»",
        },
        {
          file: "images/nutritionist/post.webp",
          caption: "Пост «5 ошибок, которые мешают нормализовать вес»",
        },
        {
          file: "images/nutritionist/review.webp",
          caption: "Визуал «Разбор питания»",
        },
      ],
    },
    {
      id: "budget-app",
      layout: "devices",
      kicker: "Приложение",
      title: "Калькулятор семейного бюджета",
      titleLines: ["Калькулятор", "семейного бюджета"],
      summary:
        "Приложение для Android: расходы по категориям, расчёт баланса бюджета, смена темы и категорий, настройка копилок.",
      points: [],
      role: "",
      cover: "Расходы, баланс и копилки.",
      href: "",
      status: "",
      media: [
        { file: "images/budget/home.webp", caption: "Главная: баланс и копилки" },
        { file: "images/budget/operations.webp", caption: "Операции по категориям" },
        { file: "images/budget/new.webp", caption: "Новая операция" },
        { file: "images/budget/settings.webp", caption: "Тема и категории" },
      ],
    },
    {
      id: "tanks",
      layout: "stack",
      kicker: "Игра",
      title: "Танчики",
      summary:
        "Браузерная игра: на уровне нужно защитить базу и уничтожить 20 врагов. Создана с помощью вайбкодинга.",
      points: [],
      role: "",
      cover: "Поле, база и враги.",
      href: "",
      status: "",
      media: [
        { file: "images/tanks/play.webp", caption: "Игровое поле" },
        { file: "images/tanks/menu.webp", caption: "Стартовый экран" },
      ],
    },
  ],
  galleryFilters: [
    { id: "all", label: "Все" },
    { id: "sites", label: "Сайты и приложения" },
    { id: "bots", label: "Боты" },
    { id: "marketing", label: "Маркетинг и контент" },
    { id: "visual", label: "Визуал" },
  ],
  gallery: [
    {
      id: "nutritionist",
      title: "Продвижение нутрициолога во ВК",
      categories: ["marketing"],
      description: "",
      image: "",
      href: "",
      kind: "client",
    },
    {
      id: "brows",
      title: "Бровист: ВК и визуальные материалы",
      categories: ["marketing", "visual"],
      description: "",
      image: "",
      href: "",
      kind: "client",
    },
    {
      id: "dance",
      title: "Студия танцев: ВК и визуальные материалы",
      categories: ["marketing", "visual"],
      description: "",
      image: "",
      href: "",
      kind: "client",
    },
    {
      id: "jewelry",
      title: "Украшения: материалы для Instagram",
      categories: ["visual", "marketing"],
      description: "",
      image: "",
      href: "",
      kind: "client",
    },
    {
      id: "digital-psychologist",
      title: "Цифровой психолог: Авито, Telegram и MAX",
      categories: ["marketing"],
      description: "",
      image: "",
      href: "",
      kind: "client",
    },
    {
      id: "neuro-media",
      title: "Нейрофото и нейровидео",
      categories: ["visual"],
      description: "",
      image: "",
      href: "",
      kind: "client",
    },
    {
      id: "budget",
      title: "Калькулятор семейного бюджета",
      categories: ["sites"],
      description: "",
      image: "",
      href: "",
      kind: "demo",
    },
    {
      id: "tanks",
      title: "Игра «Танчики»",
      categories: ["sites"],
      description: "",
      image: "",
      href: "",
      kind: "demo",
    },
  ],
  about: {
    paragraphs: [
      "Я основатель CAPRIZNAYA MODA — бренда медицинской одежды с собственным производством. Поэтому знаю задачи бизнеса со стороны человека, который отвечает за продукт, команду, расходы и продажи.",
      "В 2026 году начала системно внедрять ИИ в своей компании: от карточек товаров и материалов для клиентов до ботов и рабочих инструментов. Затем стала создавать решения для других предпринимателей и углубилась в разработку сайтов и приложений.",
      "Мне интересно доводить идею до момента, когда ею можно пользоваться: открыть сайт, написать боту, загрузить файл, получить ответ или отправить заявку.",
    ],
  },
  process: [
    {
      title: "Задача",
      text: "Вы описываете, что происходит в бизнесе и какой результат нужен. Я уточняю контекст и то, как решением будут пользоваться.",
    },
    {
      title: "Структура решения",
      text: "Собираю логику: что человек видит, какие шаги проходит и что должно получиться на выходе.",
    },
    {
      title: "Прототип",
      text: "Показываю рабочий набросок сайта, бота или материала, чтобы сценарий можно было пройти, а не обсуждать в общих словах.",
    },
    {
      title: "Проверка",
      text: "Сверяем путь клиента, тексты и удобство с реальной задачей. Поправляем то, что мешает пользоваться.",
    },
    {
      title: "Запуск и доработка",
      text: "Публикуем решение и смотрим, как оно ведёт себя в работе. После запуска его можно спокойно улучшать.",
    },
  ],
  contact: {
    title: "Расскажите, какую задачу вы хотите решить",
    text: "Возможно, вам нужен сайт, бот или более удобный способ готовить контент и работать с обращениями. Опишите ситуацию своими словами — я предложу, с чего разумно начать.",
    cta: "Написать Екатерине",
  },
};
