import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUp, Trees } from "lucide-react";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import Services from "./components/Services";
import Realisations from "./components/Realisations";
import Devis from "./components/Devis";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen selection:bg-wood-light selection:text-ivory">
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header />
          
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-wood-light z-50 origin-left"
            style={{ scaleX }}
          />

          <main>
            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center bg-ivory relative overflow-hidden px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="mb-12 relative"
              >
                <Trees size={80} className="text-wood-dark animate-pulse" />
                <div className="absolute inset-0 bg-wood-dark/5 blur-3xl rounded-full -z-10" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-center max-w-4xl mb-8"
              >
                L'art du bois, façonné avec précision.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-wood-light font-medium uppercase tracking-[0.3em] text-sm"
              >
                Votre artisan du bois
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
              >
                <span className="text-[10px] uppercase tracking-widest text-ink/40">Découvrir</span>
                <div className="w-px h-12 bg-ink/20 relative overflow-hidden">
                  <motion.div
                    animate={{ y: [0, 48] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-1/2 bg-wood-light"
                  />
                </div>
              </motion.div>
            </section>

            {/* About Section */}
            <section id="artisan" className="py-24 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <img
                    src="https://picsum.photos/seed/workshop/800/1000"
                    alt="Atelier bois"
                    className="rounded-artisan shadow-2xl w-full aspect-[4/5] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-wood-dark text-ivory p-8 rounded-artisan hidden md:block">
                    <p className="text-3xl font-akkurat mb-1">10</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-80">Ans d'expérience</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-ink mb-8">Votre Artisan du Bois</h2>
                  <div className="space-y-6 text-ink/80 leading-relaxed text-lg">
                    <p>
                      Passionné par la matière noble qu'est le bois, je mets mon savoir-faire au service de vos projets les plus ambitieux. Chaque pièce qui sort de mon atelier est le fruit d'une réflexion approfondie et d'un travail manuel rigoureux.
                    </p>
                    <p>
                      De la sélection des essences locales au polissage final, je m'engage à respecter les traditions de l'ébénisterie tout en y apportant une touche de modernité et d'élégance.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mt-12">
                    {[
                      "Travail sur mesure",
                      "Sens du détail",
                      "Respect des matériaux",
                      "Rigueur d'exécution"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-wood-light" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            <Services />
            <Realisations />
            <Devis />

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-ink mb-8">Contactez-nous</h2>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-ivory rounded-artisan flex items-center justify-center text-wood-dark shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Adresse</h4>
                        <p className="text-ink/60">12 Rue de l'Artisanat, 75011 Paris</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-ivory rounded-artisan flex items-center justify-center text-wood-dark shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Téléphone</h4>
                        <p className="text-ink/60">01 23 45 67 89</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-ivory rounded-artisan flex items-center justify-center text-wood-dark shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <p className="text-ink/60">contact@juliendubois.fr</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 h-64 bg-ivory rounded-artisan overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                    <img
                      src="https://picsum.photos/seed/map/800/400"
                      alt="Carte"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-wood-dark rounded-full animate-ping" />
                      <div className="w-3 h-3 bg-wood-dark rounded-full absolute" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-ivory p-8 rounded-artisan"
                >
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-ink/70">Nom</label>
                      <input type="text" className="w-full px-4 py-3 bg-white border-none rounded-artisan focus:ring-2 focus:ring-wood-light outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-ink/70">Email</label>
                      <input type="email" className="w-full px-4 py-3 bg-white border-none rounded-artisan focus:ring-2 focus:ring-wood-light outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-ink/70">Message</label>
                      <textarea rows={6} className="w-full px-4 py-3 bg-white border-none rounded-artisan focus:ring-2 focus:ring-wood-light outline-none resize-none" />
                    </div>
                    <button className="w-full py-4 bg-wood-dark text-ivory rounded-artisan font-medium tracking-widest hover:bg-opacity-90 transition-all">
                      ENVOYER
                    </button>
                  </form>
                </motion.div>
              </div>
            </section>
          </main>

          <footer className="bg-ivory py-16 border-t border-ink/5">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                <div className="text-ink font-akkurat text-2xl tracking-tighter">
                  JULIEN DUBOIS
                </div>
                <div className="flex gap-6">
                  <a href="#" className="text-ink/60 hover:text-wood-dark transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="text-ink/60 hover:text-wood-dark transition-colors"><Facebook size={20} /></a>
                  <a href="#" className="text-ink/60 hover:text-wood-dark transition-colors"><Mail size={20} /></a>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-ink/40">
                <div className="flex gap-8">
                  <a href="#" className="hover:text-ink transition-colors">Mentions Légales</a>
                  <a href="#" className="hover:text-ink transition-colors">Confidentialité</a>
                </div>
                <p>© 2026 Julien Dubois. Tous droits réservés.</p>
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-2 hover:text-ink transition-colors group"
                >
                  Retour en haut <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
