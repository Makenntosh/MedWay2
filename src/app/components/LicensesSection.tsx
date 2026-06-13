import cert1 from '../../../licence1.jpg'
import cert2 from '../../../licence2.jpg'

export function LicensesSection() {
  return (
    <section id="licenses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "#2a9d8f" }} />
          <span className="text-xs tracking-widest font-semibold uppercase" style={{ color: "#2a9d8f" }}>Документы</span>
        </div>
        <h2
          className="mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700,
            color: "#0f2137",
            lineHeight: 1.2,
          }}
        >
          Лицензии
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl">
          <div
            className="rounded-2xl overflow-hidden aspect-[3/4.5]"
            style={{ boxShadow: "0 4px 24px rgba(26,77,124,0.12)", border: "1px solid rgba(26,77,124,0.08)" }}
          >
            <img
              src={cert1}
              alt="Лицензия на медицинскую деятельность"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="rounded-2xl overflow-hidden aspect-[3/4.5]"
            style={{ boxShadow: "0 4px 24px rgba(26,77,124,0.12)", border: "1px solid rgba(26,77,124,0.08)" }}
          >
            <img
              src={cert2}
              alt="Лицензия на оборот наркотических средств"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
