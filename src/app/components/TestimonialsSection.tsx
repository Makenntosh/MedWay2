import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Виктор М.",
    date: "Март 2024",
    rating: 5,
    text: "Обратились с женой в экстренном режиме. Врачи приехали в течение 40 минут. Муж прошёл детокс и полный курс реабилитации. Уже 14 месяцев в трезвости. Спасибо всей команде!",
    service: "Реабилитация",
  },
  {
    name: "Светлана К.",
    date: "Январь 2024",
    rating: 5,
    text: "Долго боялась обращаться, думала осудят. Здесь всё совсем иначе — уважение, поддержка, никаких лекций. Прошла кодирование, уже 11 месяцев не пью. Рекомендую всем.",
    service: "Кодирование",
  },
  {
    name: "Алексей Н.",
    date: "Ноябрь 2023",
    rating: 5,
    text: "Клиника помогла моему сыну. Три предыдущие попытки лечения у других врачей ни к чему не привели. Здесь подошли системно, работали с психологом полгода. Результат есть.",
    service: "Лечение зависимости",
  },
  {
    name: "Марина Д.",
    date: "Февраль 2024",
    rating: 5,
    text: "Выезд на дом, вывод из запоя. Врач был внимателен, всё объяснял. Никакого осуждения. Муж сейчас в стационаре, идёт третья неделя. Впервые за 5 лет верю, что всё получится.",
    service: "Вывод из запоя",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "#2a9d8f" }} />
          <span className="text-xs tracking-widest font-semibold uppercase" style={{ color: "#2a9d8f" }}>Отзывы</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              color: "#0f2137",
              lineHeight: 1.2,
            }}
          >
            Истории выздоровления
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#f4a261" color="#f4a261" />)}
            </div>
            <span className="text-sm font-semibold" style={{ color: "#0f2137" }}>4.9</span>
            <span className="text-sm" style={{ color: "#5a7a9a" }}>/ 5 на Яндекс.Картах</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl flex flex-col"
              style={{ background: "#f8fafc", border: "1px solid rgba(26,77,124,0.07)" }}
            >
              <Quote size={24} className="mb-4" style={{ color: "#2a9d8f", opacity: 0.5 }} />
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#3a5a7a" }}>{t.text}</p>
              <div>
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} fill="#f4a261" color="#f4a261" />
                  ))}
                </div>
                <div className="text-sm font-semibold" style={{ color: "#0f2137" }}>{t.name}</div>
                <div className="text-xs mt-0.5" style={{ color: "#5a7a9a" }}>
                  {t.service} · {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
