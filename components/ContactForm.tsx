"use client";

import { useState } from "react";

type FormState = {
  name: string;
  contact: string;
  type: string;
  comment: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    contact: "",
    type: "Женский портрет",
    comment: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      setStatus("error");
      setError("Телеграм-бот ещё не настроен (нет токена или chat_id).");
      return;
    }

    const message = [
      "📸 Новая заявка с сайта lalusya.photo",
      "",
      `Имя: ${form.name || "—"}`,
      `Контакт: ${form.contact || "—"}`,
      `Тип съёмки: ${form.type || "—"}`,
      "",
      "Комментарий:",
      form.comment || "—",
    ].join("\n");

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Telegram API error");
      }

      setStatus("success");
      setForm({
        name: "",
        contact: "",
        type: "Женский портрет",
        comment: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Не удалось отправить заявку. Попробуйте позже.");
    }
  };

  return (
    <form
      className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs text-white/60" htmlFor="name">
            Имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 outline-none ring-accent/40 focus:border-accent focus:ring-2"
            placeholder="Например, Лаура"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs text-white/60" htmlFor="contact">
            Контакт для связи
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 outline-none ring-accent/40 focus:border-accent focus:ring-2"
            placeholder="Телефон, Telegram или Instagram"
            value={form.contact}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-white/60" htmlFor="type">
          Тип съёмки
        </label>
        <select
          id="type"
          name="type"
          className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 outline-none ring-accent/40 focus:border-accent focus:ring-2"
          value={form.type}
          onChange={handleChange}
        >
          <option>Женский портрет</option>
          <option>Семейная фотосессия</option>
          <option>Фуд-съёмка</option>
          <option>Продвижение бизнеса</option>
          <option>Другое</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-white/60" htmlFor="comment">
          Комментарий
        </label>
        <textarea
          id="comment"
          name="comment"
          className="min-h-[120px] w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 outline-none ring-accent/40 focus:border-accent focus:ring-2"
          placeholder="Опишите задачу, желаемые даты и формат съёмки"
          value={form.comment}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-accent/30 transition hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Отправка..." : "Отправить запрос в Telegram"}
      </button>

      {status === "success" && (
        <p className="text-xs text-emerald-400">
          Заявка отправлена. Я свяжусь с вами в ближайшее время.
        </p>
      )}

      {status === "error" && (
        <p className="text-xs text-red-400">
          {error || "Произошла ошибка при отправке. Попробуйте ещё раз."}
        </p>
      )}

      <p className="text-xs text-white/40">
        Отправляя запрос, вы соглашаетесь на обработку персональных данных. Заявка приходит в
        Telegram-бот.
      </p>
    </form>
  );
}

