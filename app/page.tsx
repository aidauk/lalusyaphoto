import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Фотограф — Главная",
};

const portfolioSections = [
  {
    slug: "women-portrait",
    title: "Женский портрет",
    description: "Эстетичные женские портреты с акцентом на свет, настроение и индивидуальность.",
  },
  {
    slug: "family",
    title: "Семейная фотосессия",
    description: "Тёплые семейные истории, которые хочется пересматривать снова и снова.",
  },
  {
    slug: "food",
    title: "Фуд-съёмка",
    description: "Аппетитные кадры для кафе, ресторанов и брендов еды.",
  },
  {
    slug: "business",
    title: "Продвижение бизнеса",
    description: "Контент для личного бренда и бизнеса: от портретов до репортажей.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(255,255,255,0.12),transparent_55%),radial-gradient(circle_at_90%_0,rgba(249,115,22,0.3),transparent_55%)]" />
        <div className="container relative flex min-h-[80vh] flex-col items-start justify-center gap-10 py-16 md:py-24">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Моё портфолио
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Добро пожаловать на мою страницу!
            </h1>
            <p className="max-w-xl text-base font-bold text-white sm:text-lg md:text-xl">
              Меня зовут Лаура. Здесь обо мне и о моем творчестве, а так же о услугах по контенту и
              продвижению.
            </p>
            <p className="max-w-xl text-base font-bold text-white sm:text-lg md:text-xl">
              Берусь не за все и не всегда, но выполняю свое дело профессионально, дорого, чувствуя
              тонко ДНК вашего бренда.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#portfolio"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-accent/30 transition hover:bg-orange-400"
              >
                Смотреть портфолио
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-accent hover:text-accent"
              >
                Записаться на съёмку
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio overview with original gallery layout */}
      <section
        id="portfolio"
        className="border-t border-white/10 bg-black/95 py-16 md:py-20"
      >
        <div className="container space-y-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Мое портфолио
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/60 md:text-base">
                Четыре направления, в которых я работаю чаще всего. Выберите раздел, чтобы
                посмотреть полноценную серию.
              </p>
            </div>
          </div>

          {/* Mosaic gallery by sections */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Left column: big women portrait */}
            <GalleryCard
              href="/portfolio/women-portrait"
              title="Женский портрет"
              subtitle="Эмоции, пластика, свет"
              accent="01"
              className="md:row-span-2"
              layout="vertical"
            />

            {/* Top-right: family + food */}
            <GalleryCard
              href="/portfolio/family"
              title="Семейная фотосессия"
              subtitle="Истории для семейного архива"
              accent="02"
              layout="horizontal"
            />
            <GalleryCard
              href="/portfolio/food"
              title="Фуд-съёмка"
              subtitle="Для кафе, ресторанов и брендов еды"
              accent="03"
              layout="horizontal"
            />

            {/* Bottom full width: business */}
            <GalleryCard
              href="/portfolio/business"
              title="Продвижение бизнеса"
              subtitle="Контент для брендов и экспертов"
              accent="04"
              className="md:col-span-2"
              layout="horizontal"
            />
          </div>
        </div>
      </section>

      {/* Services / how we work */}
      <section className="border-t border-white/10 bg-black py-16 md:py-20">
        <div className="container grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Как проходит съёмка
            </h2>
            <p className="text-sm text-white/60 md:text-base">
              Я сопровождаю клиента от идеи до готовых фотографий: помогаю с образами, локацией и
              позированием. На съёмке вы не останетесь наедине с камерой.
            </p>
            <div className="grid gap-4 text-sm text-white/70 md:grid-cols-2">
              <div className="glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  01 · Подготовка
                </p>
                <p className="mt-2 font-medium text-white">
                  Обсуждаем задачу, подбираем стиль, референсы и локацию.
                </p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  02 · Съёмка
                </p>
                <p className="mt-2 font-medium text-white">
                  Помогаю встать в кадр, подсказываю позы и работаю со светом.
                </p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  03 · Отбор и ретушь
                </p>
                <p className="mt-2 font-medium text-white">
                  Отбираю лучшие кадры, делаю аккуратную цветокоррекцию и ретушь.
                </p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  04 · Готовые фото
                </p>
                <p className="mt-2 font-medium text-white">
                  Отправляю фото в онлайн-галерее, удобной для сохранения и обмена.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
            <h3 className="text-lg font-semibold">Тарифы</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-baseline justify-between gap-4">
                <span>Портретная съёмка</span>
                <span className="font-medium text-white">от 1,5 часов</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span>Семейная съёмка</span>
                <span className="font-medium text-white">от 2 часов</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span>Фуд / бизнес</span>
                <span className="font-medium text-white">по задаче</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/50">
              Точные цены и детали обсуждаются индивидуально в зависимости от задачи, количества
              образов и локаций.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/10 bg-black/95 py-16 md:py-20"
      >
        <div className="container grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Записаться на съёмку
            </h2>
            <p className="text-sm text-white/60 md:text-base">
              Расскажите, какую съёмку вы хотите: формат, количество людей, примерные даты. Я
              предложу варианты и подскажу, как подготовиться.
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <p>
                Заявка автоматически приходит в Telegram-бот.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

type GalleryCardProps = {
  href: string;
  title: string;
  subtitle: string;
  accent: string;
  className?: string;
  layout?: "horizontal" | "vertical";
};

function GalleryCard({
  href,
  title,
  subtitle,
  accent,
  className,
  layout = "horizontal",
}: GalleryCardProps) {
  const base =
    "group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-black/80 p-4 sm:p-5";

  return (
    <Link href={href} className={`${base} ${className ?? ""}`}>
      <div
        className={`flex h-full gap-4 ${
          layout === "vertical" ? "flex-col" : "flex-col sm:flex-row"
        }`}
      >
        <div className="relative flex-1 overflow-hidden rounded-2xl bg-gradient-to-tr from-black via-slate-900 to-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(249,115,22,0.4),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(15,23,42,0.9),transparent_45%)] transition-transform duration-500 group-hover:scale-110" />
          <div className="relative flex h-32 items-end justify-between p-3 text-xs text-white/70 sm:h-40 sm:p-4">
            <p className="max-w-[70%] leading-snug">
              {layout === "vertical"
                ? "Серия кадров, объединённых настроением и светом."
                : "Небольшая серия из избранных кадров раздела."}
            </p>
            <span className="text-3xl font-semibold text-white/20 sm:text-4xl">
              {accent}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 sm:max-w-[48%]">
          <div>
            <h3 className="text-base font-semibold text-white sm:text-lg">
              {title}
            </h3>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">{subtitle}</p>
          </div>
          <p className="flex items-center gap-1 text-xs font-medium text-accent">
            Открыть серию
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

