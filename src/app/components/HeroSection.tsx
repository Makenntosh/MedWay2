import { Phone, ArrowDown, ShieldCheck, Clock, Award } from "lucide-react";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f2137 0%, #1a4d7c 50%, #1e6091 100%)",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 5v50M5 30h50' stroke='%23ffffff' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-5" style={{ background: "radial-gradient(circle, #2a9d8f, transparent)", transform: "translate(30%, -20%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5" style={{ background: "radial-gradient(circle, #2a9d8f, transparent)", transform: "translate(-30%, 30%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
              style={{ background: "rgba(42,157,143,0.2)", color: "#7dd4cc", border: "1px solid rgba(42,157,143,0.3)" }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2a9d8f" }} />
              Принимаем пациентов 24/7
            </div>

            <h1
              className="mb-6 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.15,
              }}
            >
              Профессиональное лечение зависимостей
            </h1>

            <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "520px" }}>
              Современный наркологический центр с комплексным подходом к лечению. Анонимно, безопасно, эффективно. Более 2 000 пациентов успешно прошли лечение.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="tel:+74951613392"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                style={{ background: "#2a9d8f", color: "#ffffff", boxShadow: "0 4px 20px rgba(42,157,143,0.4)" }}
              >
                <Phone size={18} />
                +7 (495) 161-33-92
              </a>
              <button
                onClick={() => scrollTo("#services")}
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.1)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                Наши услуги
              </button>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: ShieldCheck, text: "Полная анонимность" },
                { icon: Clock, text: "Экстренная помощь 24/7" },
                { icon: Award, text: "Лицензия МЗ РФ" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={16} style={{ color: "#2a9d8f" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { number: "20+", label: "лет опыта", sub: "на рынке медицинских услуг" },
              { number: "2 400+", label: "пациентов", sub: "успешно прошли лечение" },
              { number: "15", label: "специалистов", sub: "врачей высшей категории" },
              { number: "93%", label: "ремиссия", sub: "долгосрочная устойчивость" },
            ].map((stat) => (
              <div
                key={stat.number}
                className="p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
              >
                <div
                  className="mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#ffffff", lineHeight: 1 }}
                >
                  {stat.number}
                </div>
                <div className="text-sm font-semibold mb-1" style={{ color: "#2a9d8f" }}>{stat.label}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        <span className="text-xs tracking-widest">ЛИСТАТЬ</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
