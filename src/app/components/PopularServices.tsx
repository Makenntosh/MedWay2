import { useState } from "react";
import { X, Phone } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Выезд врача",
    price: "3 500 ₽",
    tag: "Выезд",
    shortDesc: "Врач приедет в любое удобное место в Москве и области.",
    fullDesc: "Бригада скорой наркологической помощи выезжает в течение 30–60 минут в любое место Москвы и Московской области. На месте врач проводит осмотр, принимает решение о тактике лечения: процедура на дому или госпитализация. Все манипуляции выполняются в санитарных условиях, строго анонимно.",
    color: "#1a4d7c",
  },
  {
    id: 2,
    name: "Выведение из запоя",
    price: "1 050 ₽",
    tag: "От запоя",
    shortDesc: "Быстрая детоксикация при алкогольном запое на дому или в стационаре.",
    fullDesc: "Детоксикационная капельница для выведения из алкогольного запоя. Включает введение дезинтоксикационных растворов, витаминов группы B, магния. Нормализует давление, снимает тремор и тошноту. Продолжительность процедуры — 2–3 часа. Врач находится рядом на протяжении всей процедуры.",
    color: "#2a9d8f",
  },
  {
    id: 3,
    name: "Снятие похмельного синдрома",
    price: "1 050 ₽",
    tag: "От похмелья",
    shortDesc: "Быстрое облегчение состояния после алкогольного опьянения.",
    fullDesc: "Капельная терапия для снятия симптомов похмелья: головная боль, слабость, тошнота, учащённое сердцебиение. Вводятся сорбенты, электролиты, витаминный комплекс. Состояние улучшается уже в процессе процедуры. Подходит при разовом употреблении и не является заменой лечения от алкоголизма.",
    color: "#2a9d8f",
  },
  {
    id: 4,
    name: "Госпитализация в стационар",
    price: "от 5 300 ₽",
    tag: "При ломке",
    shortDesc: "Медицинское наблюдение 24 часа + программа детоксикации.",
    fullDesc: "Стационарное лечение с круглосуточным наблюдением медицинского персонала. Показано при тяжёлом абстинентном синдроме, «ломке», выраженной интоксикации. Программа включает детоксикацию, медикаментозную поддержку, купирование судорог и психотических состояний. Палаты оснащены мониторингом жизненных показателей.",
    color: "#e76f51",
  },
  {
    id: 5,
    name: "Стандартная терапия",
    price: "3 800 ₽",
    tag: "От алкоголя",
    shortDesc: "Выводит алкоголь и снимает интоксикацию.",
    fullDesc: "Комплексная капельная терапия для очищения организма от продуктов распада этанола. Применяется при умеренном употреблении и начальной стадии запоя. Состав включает гепатопротекторы, витамины, мочегонные препараты и раствор Рингера. Продолжительность — 3–4 часа. Показана к применению раз в 3–6 месяцев при хроническом употреблении.",
    color: "#1a4d7c",
  },
  {
    id: 6,
    name: "Расширенная терапия",
    price: "6 300 ₽",
    tag: "От наркотиков",
    shortDesc: "Отлично подходит при длительном употреблении ПАВ.",
    fullDesc: "Усиленная программа детоксикации для пациентов с длительным анамнезом употребления психоактивных веществ. Включает инфузионную терапию повышенного объёма, гепатопротекторы, ноотропы, антиоксиданты и симптоматические препараты. Подходит при опиоидной, стимуляторной и смешанной зависимости. Длительность — 5–7 часов.",
    color: "#e76f51",
  },
  {
    id: 7,
    name: "Вывод из запоя + кодирование",
    price: "7 900 ₽",
    tag: "Детокс",
    shortDesc: "Детоксикационная терапия и процедура кодирования за одно посещение.",
    fullDesc: "Комплексная процедура: сначала проводится полноценная детоксикация (капельница 3–4 часа), затем — кодирование. Такой подход позволяет снизить стресс для организма и сэкономить время. Кодирование выполняется только после полного вытрезвления пациента и стабилизации его состояния. Метод кодирования выбирается по согласованию с врачом.",
    color: "#2a9d8f",
  },
  {
    id: 8,
    name: "Кодирование",
    price: "4 500 ₽",
    tag: "Седативная",
    shortDesc: "Процедура запретительной терапии от алкоголя.",
    fullDesc: "Медикаментозная запретительная терапия, формирующая у пациента стойкое отвращение к алкоголю. Проводится после обязательного вытрезвления (не менее 5–7 суток трезвости). Перед процедурой — осмотр нарколога и ЭКГ. Срок действия — от 1 до 3 лет по выбору. Строго анонимно, без постановки на учёт.",
    color: "#1a4d7c",
  },
];

export function PopularServices() {
  const [modalService, setModalService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "#2a9d8f" }} />
          <span className="text-xs tracking-widest font-semibold uppercase" style={{ color: "#2a9d8f" }}>Услуги</span>
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
            Популярные услуги
          </h2>
          <p className="text-sm max-w-xs" style={{ color: "#5a7a9a" }}>
            Нажмите на карточку, чтобы узнать подробнее
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(26,77,124,0.08)",
                boxShadow: "0 2px 12px rgba(26,77,124,0.07)",
              }}
              onClick={() => setModalService(svc)}
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ background: `${svc.color}15`, color: svc.color, fontWeight: 600 }}
                  >
                    {svc.tag}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: svc.color }} />
                </div>
                <h3 className="text-sm font-semibold mb-1" style={{ color: "#0f2137" }}>{svc.name}</h3>
                <div className="text-base font-bold mb-2" style={{ color: svc.color }}>{svc.price}</div>
                <p className="text-xs leading-relaxed" style={{ color: "#5a7a9a" }}>{svc.shortDesc}</p>
                <div className="mt-4 text-xs font-semibold" style={{ color: svc.color }}>
                  Подробнее →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(15,33,55,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setModalService(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl p-8"
            style={{ background: "#ffffff", boxShadow: "0 24px 80px rgba(15,33,55,0.25)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-gray-100"
              onClick={() => setModalService(null)}
            >
              <X size={18} style={{ color: "#5a7a9a" }} />
            </button>

            <span
              className="inline-block text-xs px-3 py-1 rounded-full mb-4"
              style={{ background: `${modalService.color}15`, color: modalService.color, fontWeight: 600 }}
            >
              {modalService.tag}
            </span>

            <h3
              className="mb-1"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#0f2137" }}
            >
              {modalService.name}
            </h3>
            <div className="text-2xl font-bold mb-5" style={{ color: modalService.color }}>
              {modalService.price}
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3a5a7a" }}>
              {modalService.fullDesc}
            </p>

            <a
              href="tel:+74951613392"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: modalService.color, color: "#ffffff" }}
            >
              <Phone size={16} />
              Позвонить: +7 (495) 161-33-92
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
