import { ShieldAlert, HeartPulse, Microscope, BadgeCheck } from "lucide-react";

const reasons = [
  {
    icon: ShieldAlert,
    title: "Риск передозировки",
    desc: "Использование препаратов пациента без проверки дозировки и совместимости несёт смертельную опасность. Мы применяем только сертифицированные медикаменты.",
  },
  {
    icon: HeartPulse,
    title: "Неконтролируемое взаимодействие",
    desc: "Препараты, которые принимал пациент, могут вступать в опасные реакции с лечебными медикаментами. Это приводит к непредсказуемым последствиям для организма.",
  },
  {
    icon: Microscope,
    title: "Неизвестный состав",
    desc: "Нелегальные вещества часто содержат примеси и синтетические аналоги. Применение подобных веществ в медицинских процедурах категорически запрещено.",
  },
  {
    icon: BadgeCheck,
    title: "Медицинские стандарты",
    desc: "Наша клиника работает строго по протоколам Минздрава РФ. Все препараты сертифицированы, дозировки рассчитываются индивидуально врачом-наркологом.",
  },
];

export function NoDrugsBlock() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2137 0%, #1a4d7c 100%)" }}>
          <div className="p-8 md:p-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "#2a9d8f" }} />
              <span className="text-xs tracking-widest font-semibold uppercase" style={{ color: "#7dd4cc" }}>Важно знать</span>
            </div>
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
                maxWidth: "620px",
              }}
            >
              Почему мы не используем препараты пациента
            </h2>
            <p className="text-base mb-12" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "580px", lineHeight: 1.7 }}>
              Этот вопрос задают почти все. Ответ прост: ваша безопасность важнее удобства. Вот четыре ключевые причины, по которым мы используем исключительно наши сертифицированные медикаменты.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(42,157,143,0.2)" }}
                  >
                    <Icon size={22} style={{ color: "#2a9d8f" }} />
                  </div>
                  <h4 className="mb-2 text-base font-semibold" style={{ color: "#ffffff" }}>{title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
