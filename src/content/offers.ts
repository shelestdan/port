export type OfferCategory = "site" | "service";

export type OfferPackage = {
  id: OfferCategory;
  label: string;
  price: string;
  summary: string;
  bullets: string[];
  accent: string;
};

export type ExampleCard = {
  id: string;
  category: OfferCategory;
  title: string;
  description: string;
  image: string;
  alt: string;
  url: string;
  source: string;
};

export type ComparisonRow = {
  label: string;
  site: string;
  service: string;
};

export const pageIntro = {
  eyebrow: "Сайт / сервис под ключ",
  title: "Два формата под задачу бизнеса: витрина или рабочий инструмент.",
  description:
    "Сайт нужен, когда важно красиво и понятно показать компанию, услуги, товары и довести человека до обращения. Сервис нужен, когда пользователь должен работать внутри системы: через кабинеты, роли, данные и бизнес-логику.",
  facts: [
    "Сайт — 100 000 ₽ под ключ",
    "Сервис — 300 000 ₽ под ключ",
    "Хостинг, реклама и продвижение считаются отдельно"
  ]
} as const;

export const comparisonRows: ComparisonRow[] = [
  {
    label: "Роль продукта",
    site: "Презентует компанию и помогает быстро понять ценность.",
    service: "Помогает пользователю выполнять действия внутри системы."
  },
  {
    label: "Что внутри",
    site: "Информация о компании, услугах, товарах, кейсах, формах и контактах.",
    service:
      "Личный кабинет, роли, таблицы, статусы, формы, данные и автоматизация."
  },
  {
    label: "Когда подходит",
    site: "Когда нужен сильный первый экран, понятная структура и доверие.",
    service: "Когда нужен не лендинг, а реальный рабочий сценарий для клиента или команды."
  },
  {
    label: "Бюджет",
    site: "100 000 ₽ под ключ",
    service: "300 000 ₽ под ключ"
  }
];

export const offerPackages: OfferPackage[] = [
  {
    id: "site",
    label: "Сайт",
    price: "100 000 ₽",
    summary:
      "Сайт работает как витрина: показывает компанию, объясняет, чем вы полезны, и собирает внимание в один понятный сценарий.",
    bullets: [
      "Архитектура и логика первого экрана: что человек должен понять сразу.",
      "Индивидуальный дизайн без перегруза и шаблонной «сайтовости».",
      "Блоки про компанию, услуги, товары, кейсы, FAQ и точки доверия.",
      "Адаптивная верстка и готовая сборка под запуск."
    ],
    accent: "#a66739"
  },
  {
    id: "service",
    label: "Сервис",
    price: "300 000 ₽",
    summary:
      "Сервис работает как инструмент: в нем пользователь не читает про продукт, а решает задачу через интерфейс, данные, роли и процессы.",
    bullets: [
      "Карта ролей, сценариев и структуры внутренних экранов.",
      "Кабинеты, таблицы, формы, статусы, фильтры и рабочие потоки.",
      "Интеграция бизнес-логики, действий с данными и автоматизаций.",
      "Структура, рассчитанная на развитие, поддержку и следующие этапы."
    ],
    accent: "#445d64"
  }
];

export const exampleCards: ExampleCard[] = [
  {
    id: "site-stripe",
    category: "site",
    title: "Stripe",
    description:
      "Продуктовый сайт: сильный оффер, понятная сегментация решений и очень ясная структура для разных типов бизнеса.",
    image: "/examples/real/site-stripe.png",
    alt: "Реальный сайт Stripe с ярким hero-блоком и продуктовой подачей.",
    url: "https://stripe.com/",
    source: "stripe.com"
  },
  {
    id: "site-aesop",
    category: "site",
    title: "Aesop",
    description:
      "Брендовый сайт: визуальная атмосфера, редакционная подача и премиальный ритм без лишнего интерфейсного шума.",
    image: "/examples/real/site-aesop.png",
    alt: "Реальный сайт Aesop с крупным визуальным hero-блоком.",
    url: "https://www.aesop.com/",
    source: "aesop.com"
  },
  {
    id: "site-vercel",
    category: "site",
    title: "Vercel",
    description:
      "Современный B2B-сайт: лаконичный первый экран, сильная типографика и быстрое объяснение ценности продукта.",
    image: "/examples/real/site-vercel.png",
    alt: "Реальный сайт Vercel с чистой композицией и крупной типографикой.",
    url: "https://vercel.com/",
    source: "vercel.com"
  },
  {
    id: "service-linear",
    category: "service",
    title: "Linear",
    description:
      "Сервис для продуктовых команд: задачи, статусы, инициативы и рабочая среда, в которой команда действует ежедневно.",
    image: "/examples/real/service-linear.png",
    alt: "Реальный сервис Linear с темным рабочим интерфейсом и задачами.",
    url: "https://linear.app/",
    source: "linear.app"
  },
  {
    id: "service-notion",
    category: "service",
    title: "Notion",
    description:
      "Сервис-рабочее пространство: документы, knowledge base, проекты и процессы в едином интерфейсе.",
    image: "/examples/real/service-notion.png",
    alt: "Реальный сервис Notion с рабочим пространством и задачами.",
    url: "https://www.notion.so/product",
    source: "notion.so"
  },
  {
    id: "service-trello",
    category: "service",
    title: "Trello",
    description:
      "Сервис для управления задачами: доски, карточки, коллаборация и понятная модель действий внутри продукта.",
    image: "/examples/real/service-trello.png",
    alt: "Реальный сервис Trello с интерфейсом задач и мобильным сценарием.",
    url: "https://trello.com/",
    source: "trello.com"
  }
];

export const exclusionNote =
  "Хостинг, реклама и продвижение оплачиваются отдельно и считаются после согласования объема проекта.";
