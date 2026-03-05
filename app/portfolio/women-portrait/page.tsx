import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Женский портрет — Портфолио",
};

const images = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  orientation: i % 3 === 0 ? "vertical" : "horizontal",
}));

export default function WomenPortraitPage() {
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
            Женский портрет
          </h1>
          <p className="text-sm text-white/60 md:text-base">
            Портреты, в которых главное — вы. Я работаю с естественным светом и создаю
            атмосферу, в которой комфортно даже тем, кто «не любит фотографироваться».
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {images.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-zinc-900 to-black ${
                item.orientation === "vertical"
                  ? "md:row-span-2 h-72 md:h-full"
                  : "h-52 md:h-64"
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(249,115,22,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(15,23,42,0.95),transparent_45%)] transition-transform duration-500 group-hover:scale-110" />
              <div className="relative flex h-full flex-col justify-between p-3 text-xs text-white/70 sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/60">
                    портрет
                  </span>
                  <span className="text-white/30">
                    #{item.id.toString().padStart(2, "0")}
                  </span>
                </div>
                <p className="max-w-[80%] text-xs leading-relaxed text-white/75 sm:text-sm">
                  Лёгкий, живой портрет в естественном освещении. Аутентичные эмоции
                  без лишней постановки.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 border-t border-white/10 pt-6 text-sm text-white/70 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-base font-semibold text-white md:text-lg">
              О формате съёмки
            </h2>
            <p className="mt-2">
              Обычно мы делаем 2–3 образа за съёмку, работая с одеждой, позами и
              локацией. Мне важно, чтобы вы чувствовали себя собой, а не просто
              «красиво стояли в кадре».
            </p>
          </div>
          <div className="space-y-1 text-xs text-white/60">
            <p>· Длительность съёмки: от 1,5 часов</p>
            <p>· Готовые фото: от 20 обработанных кадров</p>
            <p>· Форма выдачи: онлайн-галерея в высоком качестве</p>
          </div>
        </div>
      </div>
    </div>
  );
}

