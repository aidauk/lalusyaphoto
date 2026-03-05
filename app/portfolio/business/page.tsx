import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Продвижение бизнеса — Портфолио",
};

const images = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  type: i % 2 === 0 ? "портрет" : "репортаж",
}));

export default function BusinessPage() {
  return (
    <div className="bg-black pb-16 pt-10 md:pt-14">
      <div className="container space-y-10">
        <div className="space-y-4 md:max-w-2xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-accent"
          >
            ← На главную
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Продвижение бизнеса
          </h1>
          <p className="text-sm text-white/60 md:text-base">
            Фото для личного бренда, услуг и продуктов: от деловых портретов до
            репортажей с мероприятий.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {images.map((item) => (
            <div
              key={item.id}
              className="group relative h-52 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-emerald-500/15 via-slate-900 to-black sm:h-60"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(16,185,129,0.45),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(15,23,42,0.95),transparent_45%)] transition-transform duration-500 group-hover:scale-110" />
              <div className="relative flex h-full flex-col justify-between p-3 text-xs text-white/70 sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/70">
                    {item.type}
                  </span>
                  <span className="text-white/30">
                    #{item.id.toString().padStart(2, "0")}
                  </span>
                </div>
                <p className="max-w-[80%] text-xs leading-relaxed text-white/80 sm:text-sm">
                  Визуальный контент, который помогает рассказывать о вас и вашем
                  деле клиентам.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 border-t border-white/10 pt-6 text-sm text-white/70 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-base font-semibold text-white md:text-lg">
              Для кого подходят такие съёмки
            </h2>
            <p className="mt-2">
              Эксперты, малый и средний бизнес, создатели продуктов и услуг,
              которые хотят говорить с аудиторией через качественный визуал.
            </p>
          </div>
          <div className="space-y-1 text-xs text-white/60">
            <p>· Контент для сайта, соцсетей и рекламных кампаний</p>
            <p>· Возможна съёмка в офисе, студии или на выезде</p>
            <p>· Помощь с подготовкой сценария и образов</p>
          </div>
        </div>
      </div>
    </div>
  );
}

