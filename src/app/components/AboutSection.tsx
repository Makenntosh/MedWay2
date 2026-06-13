import { CheckCircle2 } from "lucide-react";
import xxxl from '../../../XXXL.webp'

const advantages = [
  "Индивидуальный план лечения для каждого пациента",
  "Команда из наркологов, психиатров и психологов",
  "Комфортные палаты с полным оснащением",
  "Программы реабилитации от 7 до 180 дней",
  "Поддержка родственников и семейная терапия",
  "Анонимность и строгая конфиденциальность",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "#2a9d8f" }} />
          <span className="text-xs tracking-widest font-semibold uppercase" style={{ color: "#2a9d8f" }}>О клинике</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#0f2137",
                lineHeight: 1.2,
              }}
            >
              Место, где начинается новая жизнь
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#5a7a9a" }}>
              MedWay — специализированный наркологический центр, основанный в 2004 году. Мы предлагаем полный спектр услуг по лечению алкогольной и наркотической зависимости на основе доказательной медицины.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#5a7a9a" }}>
              Наш подход основан на уважении к пациенту, индивидуальности лечения и долгосрочных результатах. Мы не просто снимаем симптомы — мы помогаем вернуть жизнь под контроль.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {advantages.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: "#2a9d8f" }} />
                  <span className="text-sm leading-snug" style={{ color: "#3a5a7a" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image + floating badge */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]" style={{ boxShadow: "0 20px 60px rgba(26,77,124,0.15)" }}>
              <img
                src={xxxl}
                alt="Интерьер клиники МедиКлиника — уютные и современные залы ожидания"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,33,55,0.3) 0%, transparent 60%)" }} />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -left-6 p-5 rounded-2xl"
              style={{ background: "#ffffff", boxShadow: "0 8px 32px rgba(26,77,124,0.15)" }}
            >
              <div
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#1a4d7c", lineHeight: 1 }}
              >
                20+
              </div>
              <div className="text-sm mt-1" style={{ color: "#5a7a9a" }}>лет успешной<br />практики</div>
            </div>

            {/* Accent dot */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
              style={{ background: "#2a9d8f" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
