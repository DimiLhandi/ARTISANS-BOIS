import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ébéniste", href: "#artisan" },
    { name: "Services", href: "#services" },
    { name: "Réalisations", href: "#realisations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-ink font-akkurat text-xl tracking-tighter"
        >
          JULIEN DUBOIS
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-ink hover:text-wood-light transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-wood-light transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#devis"
            className="px-6 py-2 bg-wood-dark text-ivory rounded-artisan hover:bg-opacity-90 transition-all"
          >
            Devis
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-ivory border-t border-ink/5 p-6 flex flex-col space-y-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-ink text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#devis"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3 bg-wood-dark text-ivory text-center rounded-artisan"
          >
            Devis
          </a>
        </motion.div>
      )}
    </header>
  );
}
