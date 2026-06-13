import { Clock, Lock, Star, Users, Stethoscope, Home } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Круглосуточная помощь",
    desc: "Наша бригада выезжает в любое время суток. Звонок — и через 30–60 минут врач уже рядом.",
  },
  {
    icon: Lock,
    title: "Полная анонимность",
    desc: "Мы не передаём данные пациентов третьим лицам и не ставим на учёт без вашего согласия.",
  },
  {
    icon: Star,
    title: "Доказательная медицина",
    desc: "Все методы лечения основаны на международных протоколах и одобрены Минздравом РФ.",
  },
  {
    icon: Users,
    title: "Мультидисциплинарная команда",
    desc: "Наркологи, психиатры, психологи и социальные работники работают вместе над вашим выздоровлением.",
  },
  {
    icon: Stethoscope,
    title: "Современное оборудование",
    desc: "Клиника оснащена диагностическим оборудованием последнего поколения для точного контроля состояния.",
  },
  {
    icon: Home,
    title: "Комфортное размещение",
    desc: "Одно- и двухместные палаты с удобствами, питанием и зоной отдыха. Чистота и уют гарантированы.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "#2a9d8f" }} />
          <span className="text-xs tracking-widest font-semibold uppercase" style={{ color: "#2a9d8f" }}>Почему мы</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              color: "#0f2137",
              lineHeight: 1.2,
              maxWidth: "500px",
            }}
          >
            Почему выбирают именно нас
          </h2>
          <p className="text-sm max-w-xs" style={{ color: "#5a7a9a" }}>
            Ежегодно более 400 семей доверяют нам лечение своих близких
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#ffffff",
                boxShadow: "0 2px 12px rgba(26,77,124,0.07)",
                border: "1px solid rgba(26,77,124,0.06)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{ background: "#e8f4f8" }}
              >
                <Icon size={22} style={{ color: "#1a4d7c" }} />
              </div>
              <div className="text-xs font-mono mb-2" style={{ color: "#a8c4d8" }}>
                0{i + 1}
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: "#0f2137" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5a7a9a" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
