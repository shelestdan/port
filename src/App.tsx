import { motion } from "framer-motion";

const heroStats = [
  { value: "Next.js + React", label: "рекомендуемый стек" },
  { value: "Личный кабинет", label: "регистрация, бонусы, QR-карта" },
  { value: "2 месяца", label: "гарантия и поддержка" }
] as const;

const siteSections = [
  "Главная",
  "О компании",
  "Наши АЗС + интерактивная карта",
  "Топливо и услуги",
  "Акции и спецпредложения",
  "Бонусная программа",
  "Личный кабинет",
  "Контакты и форма связи",
  "Юридические страницы"
] as const;

const loyaltyClient = [
  "Вход и регистрация по телефону + SMS-код",
  "Баланс бонусов, история начислений и списаний",
  "Виртуальная карта с QR-кодом для кассы",
  "Профиль, авто, дата рождения, уведомления",
  "Публичная страница правил и подключения"
] as const;

const loyaltyAdmin = [
  "Отдельная админ-панель под ваши процессы",
  "Управление правилами начисления и списания",
  "Ручные операции, акции, коэффициенты, сегменты",
  "Статистика участников, выпусков, использования, ROI",
  "Обновление цен топлива и контента по станциям"
] as const;

const deliverables = [
  {
    title: "Брендовый сайт сети АЗС",
    text: "Современный адаптивный сайт с сильной главной страницей, ценами, акциями, картой и полным набором разделов."
  },
  {
    title: "Бонусная программа",
    text: "Публичный лендинг программы, личный кабинет клиента, QR-карта, операции по бонусам и база зарегистрированных участников."
  },
  {
    title: "Кастомная админ-панель",
    text: "Я сделаю отдельную панель, где будет весь важный функционал для администратора: правила, участники, балансы, акции, цены."
  },
  {
    title: "Интеграции и аналитика",
    text: "Яндекс.Карты или 2ГИС, Метрика, Google Analytics, SEO-база, формы заявок для физлиц и юрлиц."
  }
] as const;

const stack = [
  "Next.js + React для сайта и клиентского кабинета",
  "Модульная архитектура под масштабирование сети",
  "Безопасная серверная зона для авторизации, бонусов и операций",
  "Хостинг: Beget / Timeweb / VK Cloud по финальной схеме",
  "Подготовка к PageSpeed 90+ и мобильному трафику"
] as const;

const roadmap = [
  {
    step: "01",
    title: "Концепция и прототип",
    text: "Структура, сценарии клиента, логика бонусной программы, карта АЗС, маршрут контента."
  },
  {
    step: "02",
    title: "Дизайн и UI-система",
    text: "Фирменный визуальный стиль, адаптивные макеты, акцент на акции и вход в программу лояльности."
  },
  {
    step: "03",
    title: "Разработка и кабинет",
    text: "Сайт, бонусный модуль, регистрация, виртуальная карта, формы, интеграции, админ-зона."
  },
  {
    step: "04",
    title: "Запуск и обучение",
    text: "Подключение аналитики, проверка SEO и скорости, обучение команды, передача инструкции."
  }
] as const;

const priceTerms = [
  "Полный объём сайта со всем описанным функционалом",
  "Отдельная админ-панель под ключевые задачи администратора",
  "Адаптивный дизайн, SEO-база, аналитика, формы, карта АЗС",
  "Обучение сотрудников после сдачи проекта",
  "2 месяца гарантии и технической поддержки"
] as const;

const reveal = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
} as const;

export default function App() {
  return (
    <div className="proposal-page">
      <header className="proposal-nav">
        <a className="proposal-brand" href="#top">
          <span className="proposal-brand__mark" />
          <span>
            <strong>Татгазсервис</strong>
            <small>коммерческое предложение</small>
          </span>
        </a>

        <nav className="proposal-nav__links">
          <a href="#solution">Решение</a>
          <a href="#loyalty">Лояльность</a>
          <a href="#roadmap">Этапы</a>
          <a href="#price">Стоимость</a>
        </nav>

      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__media">
            <img
              src="https://images.pexels.com/photos/32736641/pexels-photo-32736641.jpeg?cs=srgb&dl=pexels-youssef-amrir-2148825650-32736641.jpg&fm=jpg"
              alt="Ночная автозаправочная станция с ярко подсвеченным навесом"
            />
          </div>

          <div className="hero__veil" />

          <div className="hero__inner">
            <motion.div
              className="hero__copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <p className="eyebrow">ООО «Татгазсервис» · сеть АЗС в Казани и Республике Татарстан</p>
              <h1>Сайт, который продаёт бренд, ведёт клиента в бонусную программу и возвращает его на АЗС снова.</h1>
              <p className="hero__lead">
                Предлагаю сделать проект на <strong>Next.js + React</strong>: сильная презентация сети, карта станций,
                актуальные цены, акции, личный кабинет и полноценный модуль лояльности с отдельной админ-панелью.
              </p>

              <div className="hero__actions">
                <a className="button button--solid" href="#price">
                  Согласовать запуск
                </a>
                <a className="button button--ghost" href="#loyalty">
                  Смотреть бонусную программу
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero__rail"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              {heroStats.map((item) => (
                <div key={item.label} className="hero__metric">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <motion.section className="section section--intro" {...reveal}>
          <div className="section__head">
            <p className="eyebrow">Что получает сеть</p>
            <h2>Один продукт для бренда, трафика, лояльности и операционного управления.</h2>
          </div>

          <div className="intro-grid">
            {deliverables.map((item) => (
              <article key={item.title} className="intro-grid__item">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="solution" className="section section--split" {...reveal}>
          <div className="section__head">
            <p className="eyebrow">Структура сайта</p>
            <h2>Вся логика проекта выстроена вокруг быстрых сценариев: узнать цену, найти АЗС, подключиться к программе, зайти в кабинет.</h2>
          </div>

          <div className="section-list">
            <div className="section-list__copy">
              <p>
                Главная страница делается как главный конверсионный экран: акции, цены, быстрый вход в бонусную программу,
                навигация по станциям и преимущества топлива ТАНЕКО.
              </p>
              <p>
                Внутри проекта сразу закладывается масштабирование: новые станции, новые механики лояльности, больше
                акций, больше каналов уведомлений.
              </p>
            </div>

            <ol className="section-list__grid">
              {siteSections.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ol>
          </div>
        </motion.section>

        <motion.section id="loyalty" className="section section--loyalty" {...reveal}>
          <div className="section__head">
            <p className="eyebrow">Ключевой модуль</p>
            <h2>Бонусная программа делается как отдельный двигатель повторных продаж, а не как формальный раздел сайта.</h2>
          </div>

          <div className="loyalty-layout">
            <div className="loyalty-layout__media">
              <img
                src="https://images.pexels.com/photos/8372635/pexels-photo-8372635.jpeg?cs=srgb&dl=pexels-leeloothefirst-8372635.jpg&fm=jpg"
                alt="Смартфон с QR-кодом на экране"
              />
            </div>

            <div className="loyalty-layout__content">
              <article>
                <p className="eyebrow">Для клиента</p>
                <ul>
                  {loyaltyClient.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article>
                <p className="eyebrow">Для администратора</p>
                <ul>
                  {loyaltyAdmin.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </motion.section>

        <motion.section className="section section--image-band" {...reveal}>
          <div className="image-band__media">
            <img
              src="https://images.pexels.com/photos/2284164/pexels-photo-2284164.jpeg?cs=srgb&dl=pexels-mvdheuvel-2284164.jpg&fm=jpg"
              alt="Освещённая автозаправочная станция ночью"
            />
          </div>

          <div className="image-band__copy">
            <p className="eyebrow">Дополнительный функционал</p>
            <h2>Карта АЗС, цены на топливо, заявки для юрлиц, акции и аналитика собираются в единую цифровую точку бренда.</h2>
            <ul className="band-list">
              <li>Интерактивная карта Яндекс.Карты или 2ГИС с фильтрами по услугам станции.</li>
              <li>Актуальные цены на бензин, дизель и СУГ с обновлением через админ-панель.</li>
              <li>Онлайн-заявка на топливные карты для юридических лиц.</li>
              <li>Яндекс.Метрика, Google Analytics, SEO-оптимизация, HTTPS и юридические страницы.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section className="section section--stack" {...reveal}>
          <div className="section__head">
            <p className="eyebrow">Техническое решение</p>
            <h2>Рекомендую строить проект на Next.js + React: сильный фронтенд для маркетинга и кабинета, плюс отдельная серверная логика для бонусного модуля.</h2>
          </div>

          <div className="stack-layout">
            <ul className="stack-layout__list">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <aside className="stack-layout__note">
              <strong>Важно</strong>
              <p>
                Контент, фото АЗС, логотип, список станций, координаты и режим работы можно вшить без потери темпа:
                структура уже рассчитана на быстрый контентный проход после согласования концепции.
              </p>
            </aside>
          </div>
        </motion.section>

        <motion.section id="roadmap" className="section section--roadmap" {...reveal}>
          <div className="section__head">
            <p className="eyebrow">Этапы</p>
            <h2>Проект выстраивается последовательно: от сценариев и визуальной концепции до запуска, поддержки и обучения команды.</h2>
          </div>

          <div className="roadmap">
            {roadmap.map((item) => (
              <article key={item.step} className="roadmap__item">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="price" className="section section--price" {...reveal}>
          <div className="price-block">
            <div className="price-block__copy">
              <p className="eyebrow">Стоимость проекта</p>
              <h2>60 000 ₽</h2>
              <p>
                В стоимость включаю весь заявленный объём: сайт, бонусную программу, личный кабинет, кастомную
                админ-панель, карту АЗС, формы, аналитику, SEO-базу, обучение и поддержку.
              </p>
            </div>

            <ul className="price-block__list">
              {priceTerms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="price-cta">
            <a className="button button--solid" href="mailto:daniil.shelesteev@yandex.ru">
              Подтвердить старт
            </a>
            <p>Сделаю проект на высшем уровне, с упором на доверие бренду, повторные визиты и управляемую лояльность.</p>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
