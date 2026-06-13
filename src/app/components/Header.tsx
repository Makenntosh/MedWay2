import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "О клинике", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#why-us" },
  { label: "Лицензии", href: "#licenses" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 24px rgba(26,77,124,0.1)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,77,124,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1a4d7c 0%, #2a9d8f 100%)" }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2v18M2 11h18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div
                className="text-lg leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#0f2137" }}
              >
                MedWay
              </div>
              <div className="text-xs tracking-widest" style={{ color: "#5a7a9a", fontWeight: 500 }}>
                НАРКОЛОГИЧЕСКИЙ ЦЕНТР
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-sm transition-colors duration-200 hover:text-[#2a9d8f]"
                style={{ color: "#3a5a7a", fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "#e8f4f8" }}
            >
              <Phone size={16} color="#1a4d7c" />
            </div>
            <div>
              <div className="text-xs" style={{ color: "#5a7a9a" }}>Круглосуточно</div>
              <a
                href="tel:+74951613392"
                className="text-sm font-semibold hover:text-[#2a9d8f] transition-colors"
                style={{ color: "#0f2137" }}
              >
                +7 (495) 161-33-92
              </a>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#1a4d7c" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t" style={{ borderColor: "rgba(26,77,124,0.1)", background: "white" }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-sm py-2"
                style={{ color: "#0f2137", fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+74951613392"
              className="flex items-center gap-2 text-sm font-semibold pt-2 border-t"
              style={{ color: "#1a4d7c", borderColor: "rgba(26,77,124,0.1)" }}
            >
              <Phone size={16} /> +7 (495) 161-33-92
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
