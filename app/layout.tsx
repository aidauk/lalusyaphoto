import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Фотограф — Портфолио и услуги",
  description: "Профессиональная фотография: женский портрет, семейные съемки, фуд-съемка и продвижение бизнеса.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-black text-white">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-1 text-lg font-semibold tracking-tight">
              <span className="text-white">lalusya</span>
              <span className="text-accent">photo</span>
            </Link>
            <nav className="hidden gap-6 text-sm md:flex">
              <Link href="/" className="hover:text-accent transition-colors">
                Главная
              </Link>
              <Link
                href="/portfolio/women-portrait"
                className="hover:text-accent transition-colors"
              >
                Женский портрет
              </Link>
              <Link
                href="/portfolio/family"
                className="hover:text-accent transition-colors"
              >
                Семейная съёмка
              </Link>
              <Link
                href="/portfolio/food"
                className="hover:text-accent transition-colors"
              >
                Фуд-съёмка
              </Link>
              <Link
                href="/portfolio/business"
                className="hover:text-accent transition-colors"
              >
                Бизнес
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10 bg-black/80">
          <div className="container flex flex-col gap-4 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold">
                <span className="text-white">lalusya</span>
                <span className="text-accent">photo</span>
              </span>
              . Все права защищены.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.instagram.com/lalusya.photo?igsh=MXQwcjU4eWE1bnh2eg=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15a3.5 3.5 0 0 0 0-7Zm5-2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
                </svg>
                <span>Instagram: @lalusya.photo</span>
              </a>
              <a
                href="https://t.me/lalusyaphoto"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M21.76 4.07a1.5 1.5 0 0 0-1.52-.2L3.7 11.3a1.5 1.5 0 0 0 .1 2.8l3.98 1.32 1.4 4.2a1.5 1.5 0 0 0 2.58.47l2.18-2.45 3.62 2.71a1.5 1.5 0 0 0 2.37-.9l2.02-12.3a1.5 1.5 0 0 0-.79-1.6ZM9.2 13.92l8.03-5.02L9.8 14.7l-.6 2.02-.74-2.8Zm8.75 4.5-3.37-2.52a1.5 1.5 0 0 0-2.04.2l-1.4 1.58.6-2.03 6.84-6.43-8.7 5.44-4.23-1.4 15.18-6.64Z" />
                </svg>
                <span>Telegram: @lalusyaphoto</span>
              </a>
              <a
                href="mailto:Sheralievalaura1998@gmail.com"
                className="inline-flex items-center gap-2 hover:text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11A2.5 2.5 0 0 1 4.5 4Zm0 1.5A1 1 0 0 0 3.5 6.5v.26l8.01 5.34 8-5.33V6.5a1 1 0 0 0-1-1h-15Zm15 3.34-7.44 4.96a1 1 0 0 1-1.12 0L3.5 8.84V17.5a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V8.84Z" />
                </svg>
                <span>Email: Sheralievalaura1998@gmail.com</span>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

