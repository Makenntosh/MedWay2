import { Phone } from "lucide-react";

const allServices = [
  { name: "Выведение из запоя", price: "от 3 500 ₽" },
  { name: "Лечение алкоголизма", price: "от 5 000 ₽" },
  { name: "Лечение наркозависимости", price: "от 5 000 ₽" },
  { name: "Консультация нарколога", price: "от 4 500 ₽" },
  { name: "Выезд врача на дом", price: "от 1 900 ₽" },
  { name: "Амбулаторное лечение", price: "от 3 000 ₽" },
  { name: "Стационар 24/7", price: "от 5 300 ₽" },
  { name: "Кодирование", price: "от 4 500 ₽" },
  { name: "Кодирование по методу Довженко", price: "10 000 ₽" },
];

export function AllServicesSection() {
  return (
    <section id="all-services" className="py-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "#2a9d8f" }} />
          <span className="text-xs tracking-widest font-semibold uppercase" style={{ color: "#2a9d8f" }}>Прайс-лист</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              color: "#0f2137",
              lineHeight: 1.2,
            }}
          >
            Все услуги клиники
          </h2>
          <a
            href="tel:+74951613392"
            className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#1a4d7c]"
            style={{ color: "#2a9d8f" }}
          >
            <Phone size={15} />
            Уточнить стоимость по телефону
          </a>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: "#ffffff", border: "1px solid rgba(26,77,124,0.08)", boxShadow: "0 2px 12px rgba(26,77,124,0.05)" }}
        >
          {allServices.map((svc, i) => (
            <div
              key={svc.name}
              className="flex items-center justify-between px-7 py-4 transition-colors hover:bg-[#f8fafc]"
              style={{
                borderBottom: i < allServices.length - 1 ? "1px solid rgba(26,77,124,0.07)" : "none",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#2a9d8f" }} />
                <span className="text-sm" style={{ color: "#0f2137", fontWeight: i === allServices.length - 1 ? 600 : 400 }}>
                  {svc.name}
                </span>
              </div>
              <span
                className="text-sm font-semibold whitespace-nowrap ml-6"
                style={{ color: i === allServices.length - 1 ? "#e76f51" : "#1a4d7c" }}
              >
                {svc.price}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs mt-4 text-center" style={{ color: "#5a7a9a" }}>
          * Стоимость услуг может варьироваться в зависимости от сложности случая. Точная цена уточняется на консультации.
        </p>
      </div>
    </section>
  );
}
