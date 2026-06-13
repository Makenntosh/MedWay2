import { Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "О клинике", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Почему мы", href: "#why-us" },
  { label: "Лицензии", href: "#licenses" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  "Выведение из запоя",
  "Кодирование",
  "Лечение наркозависимости",
  "Реабилитация",
  "Амбулаторное лечение",
  "Выезд врача на дом",
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0f2137" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="pt-16 pb-10 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1a4d7c, #2a9d8f)" }}
              >
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2v18M2 11h18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div
                  className="text-base leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#ffffff" }}
                >
                  MedWay
                </div>
                <div className="text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                  НАРКОЛОГИЧЕСКИЙ ЦЕНТР
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Профессиональная помощь в лечении алкогольной и наркотической зависимости с 2004 года.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "#2a9d8f" }} />
                г. Москва, 1-я Мытищинская ул., 19а
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <Phone size={14} style={{ color: "#2a9d8f" }} />
                <a href="tel:+74951613392" className="hover:text-white transition-colors">
                  +7 (495) 161-33-92
                </a>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Навигация
            </h5>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Услуги
            </h5>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Work hours */}
          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Режим работы
            </h5>
            <div
              className="p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="text-sm font-semibold mb-2" style={{ color: "#2a9d8f" }}>24 / 7 / 365</div>
              <div className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                Стационар и экстренная помощь — без перерывов и выходных
              </div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                Консультации: ежедневно с 08:00 до 22:00
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)" }}
        >
          <div>© 2004–2026 MedWay. Все права защищены.</div>
        </div>
      </div>
    </footer>
  );
}
