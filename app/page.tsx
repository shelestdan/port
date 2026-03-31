import Image from "next/image";
import type { ReactNode } from "react";
import {
  comparisonRows,
  exampleCards,
  exclusionNote,
  offerPackages,
  pageIntro,
  type ExampleCard,
  type OfferPackage
} from "@/src/content/offers";

const offerTitles: Record<OfferPackage["id"], string> = {
  site: "Когда нужен сайт",
  service: "Когда нужен сервис"
};

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function ExampleProjectCard({ item }: { item: ExampleCard }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="real-card group"
    >
      <div className="real-card__media">
        <Image
          src={item.image}
          alt={item.alt}
          width={1440}
          height={980}
          unoptimized
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-4">
          <span className="pill-subtle">реальный проект</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-black/38">
            {item.source}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="font-display text-[1.65rem] leading-[1.05] tracking-[-0.03em] text-black">
            {item.title}
          </h3>
          <p className="text-sm leading-7 text-black/62">{item.description}</p>
        </div>

        <span className="inline-flex items-center gap-2 text-sm font-medium text-black/72">
          Открыть проект
          <span aria-hidden>↗</span>
        </span>
      </div>
    </a>
  );
}

function OfferSection({
  offer,
  examples
}: {
  offer: OfferPackage;
  examples: ExampleCard[];
}) {
  return (
    <section id={offer.id} className="section-shell py-8 md:py-10">
      <div className="offer-block">
        <div className="grid gap-6 border-b border-black/8 pb-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel>{offerTitles[offer.id]}</SectionLabel>
              <span
                className="price-pill"
                style={{ borderColor: `${offer.accent}26`, color: offer.accent }}
              >
                {offer.label} — {offer.price}
              </span>
            </div>

            <p className="font-display text-[clamp(1.75rem,2.7vw,2.65rem)] leading-[1.05] tracking-[-0.04em] text-black">
              {offer.summary}
            </p>
          </div>

          <p className="max-w-xl text-sm leading-7 text-black/58 md:justify-self-end md:text-base">
            {offer.id === "site"
              ? "Этот формат нужен, когда важно показать продукт, компанию или услугу в сильной визуальной подаче и довести человека до контакта."
              : "Этот формат нужен, когда у продукта есть внутренняя логика, роли, сценарии, данные и регулярные действия внутри интерфейса."}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {examples.map((item) => (
            <ExampleProjectCard key={item.id} item={item} />
          ))}
        </div>

        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {offer.bullets.map((bullet) => (
            <li key={bullet} className="bullet-card">
              <span
                className="bullet-card__dot"
                style={{ backgroundColor: offer.accent }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  const siteOffer = offerPackages.find((item) => item.id === "site");
  const serviceOffer = offerPackages.find((item) => item.id === "service");

  if (!siteOffer || !serviceOffer) {
    return null;
  }

  const siteExamples = exampleCards.filter((item) => item.category === "site");
  const serviceExamples = exampleCards.filter(
    (item) => item.category === "service"
  );

  return (
    <main className="pb-14 md:pb-20">
      <header className="section-shell flex items-center justify-between gap-4 py-5 md:py-6">
        <div className="pill-subtle">Сайт / сервис под ключ</div>
        <nav className="hidden items-center gap-6 text-sm text-black/54 md:flex">
          <a href="#overview" className="hover:text-black">
            Обзор
          </a>
          <a href="#site" className="hover:text-black">
            Сайт
          </a>
          <a href="#service" className="hover:text-black">
            Сервис
          </a>
        </nav>
      </header>

      <section id="overview" className="section-shell pt-2 md:pt-4">
        <div className="intro-card">
          <div className="space-y-5">
            <SectionLabel>{pageIntro.eyebrow}</SectionLabel>
            <h1 className="font-display text-[clamp(2.2rem,4.2vw,4.2rem)] leading-[0.98] tracking-[-0.05em] text-black">
              {pageIntro.title}
            </h1>
            <p className="max-w-4xl text-base leading-8 text-black/66 md:text-lg">
              {pageIntro.description}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {pageIntro.facts.map((fact) => (
              <span key={fact} className="info-chip">
                {fact}
              </span>
            ))}
          </div>

          <div className="overview-grid mt-8">
            <div className="overview-grid__head">Критерий</div>
            <div className="overview-grid__head">Сайт</div>
            <div className="overview-grid__head">Сервис</div>

            {comparisonRows.map((row) => (
              <div key={row.label} className="contents">
                <div className="overview-grid__label">{row.label}</div>
                <div className="overview-grid__value">{row.site}</div>
                <div className="overview-grid__value">{row.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfferSection offer={siteOffer} examples={siteExamples} />
      <OfferSection offer={serviceOffer} examples={serviceExamples} />

      <section className="section-shell pt-6">
        <div className="note-strip">
          <SectionLabel>Важно</SectionLabel>
          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <p className="font-display text-[clamp(1.55rem,2.5vw,2.3rem)] leading-[1.08] tracking-[-0.04em] text-black">
              Сайт нужен для презентации и доверия. Сервис нужен для реальной
              работы внутри продукта.
            </p>
            <p className="max-w-xl text-sm leading-7 text-black/62 md:justify-self-end md:text-base">
              {exclusionNote}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
