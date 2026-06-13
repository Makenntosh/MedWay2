import { Phone, MapPin, Mail, Clock } from "lucide-react";

export function ContactsSection() {
  return (
    <section id="contacts" className="py-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "#2a9d8f" }} />
          <span className="text-xs tracking-widest font-semibold uppercase" style={{ color: "#2a9d8f" }}>Контакты</span>
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
          Как нас найти
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-5">
            {[
              {
                icon: Phone,
                label: "Телефон (круглосуточно)",
                value: "+7 (495) 161-33-92",
                href: "tel:+74951613392",
              },
              {
                icon: MapPin,
                label: "Адрес",
                value: "г. Москва, 1-я Мытищинская ул., 19а",
                href: undefined,
              },
              {
                icon: Clock,
                label: "Режим работы",
                value: "Круглосуточно, без выходных",
                href: undefined,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#e8f4f8" }}
                >
                  <Icon size={20} style={{ color: "#1a4d7c" }} />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: "#5a7a9a" }}>{label}</div>
                  {href ? (
                    <a
                      href={href}
                      className="text-base font-semibold hover:text-[#2a9d8f] transition-colors"
                      style={{ color: "#0f2137" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="text-base font-semibold" style={{ color: "#0f2137" }}>{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{ height: "360px", background: "#e8f4f8", border: "1px solid rgba(26,77,124,0.1)" }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.658700%2C55.823800&z=16&pt=37.658700%2C55.823800,pm2rdl"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              title="Карта клиники"
              allowFullScreen
            />
            {/* Fallback shown only if iframe is blocked */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center -z-10"
              style={{ background: "linear-gradient(135deg, #e8f4f8, #d4eaf5)" }}
            >
              <MapPin size={36} style={{ color: "#1a4d7c", opacity: 0.4 }} />
              <div className="text-sm mt-3 text-center px-6" style={{ color: "#5a7a9a" }}>
                г. Москва, 1-я Мытищинская ул., 19а
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
