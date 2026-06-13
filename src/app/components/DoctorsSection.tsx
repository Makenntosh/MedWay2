const doctors = [
  {
    name: "Андрей Борисович Карпов",
    role: "Главный нарколог",
    experience: "25 лет опыта",
    degree: "Д.м.н., профессор",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Елена Сергеевна Михайлова",
    role: "Психиатр-нарколог",
    experience: "17 лет опыта",
    degree: "К.м.н.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Дмитрий Александрович Нечаев",
    role: "Клинический психолог",
    experience: "12 лет опыта",
    degree: "Магистр психологии",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Ольга Викторовна Зайцева",
    role: "Реабилитолог",
    experience: "14 лет опыта",
    degree: "К.м.н.",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop&auto=format",
  },
];

export function DoctorsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "#2a9d8f" }} />
          <span className="text-xs tracking-widest font-semibold uppercase" style={{ color: "#2a9d8f" }}>Команда</span>
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
            Наши специалисты
          </h2>
          <p className="text-sm max-w-xs" style={{ color: "#5a7a9a" }}>
            Врачи высшей квалификационной категории с международным опытом
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div key={doc.name} className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-4" style={{ boxShadow: "0 4px 20px rgba(26,77,124,0.1)" }}>
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(15,33,55,0.7) 0%, transparent 50%)" }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="inline-block text-xs px-3 py-1 rounded-full font-semibold"
                    style={{ background: "rgba(42,157,143,0.85)", color: "#ffffff" }}
                  >
                    {doc.experience}
                  </div>
                </div>
              </div>
              <h4 className="text-sm font-semibold mb-1" style={{ color: "#0f2137" }}>{doc.name}</h4>
              <div className="text-sm" style={{ color: "#2a9d8f" }}>{doc.role}</div>
              <div className="text-xs mt-1" style={{ color: "#5a7a9a" }}>{doc.degree}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
