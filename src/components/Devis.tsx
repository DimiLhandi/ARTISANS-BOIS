import { motion } from "motion/react";
import React, { useState } from "react";

export default function Devis() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    type: "sur-mesure",
    budget: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demande de devis envoyée avec succès !");
  };

  return (
    <section id="devis" className="py-24 bg-ivory">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-artisan shadow-xl border border-ink/5"
        >
          <div className="text-center mb-12">
            <h2 className="text-ink mb-4 !text-[40px]">Votre Projet</h2>
            <p className="text-ink/60">
              Décrivez-nous vos envies, nous leur donnerons vie.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-ink/70">
                  Nom & Prénom
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-ivory border-none rounded-artisan focus:ring-2 focus:ring-wood-light outline-none transition-all"
                  placeholder="Jean Dupont"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-ink/70">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-ivory border-none rounded-artisan focus:ring-2 focus:ring-wood-light outline-none transition-all"
                  placeholder="jean@exemple.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-ink/70">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-ivory border-none rounded-artisan focus:ring-2 focus:ring-wood-light outline-none transition-all"
                  placeholder="06 00 00 00 00"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-ink/70">
                  Type de prestation
                </label>
                <select
                  className="w-full px-4 py-3 bg-ivory border-none rounded-artisan focus:ring-2 focus:ring-wood-light outline-none transition-all appearance-none"
                  value={formState.type}
                  onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                >
                  <option value="sur-mesure">Fabrication sur mesure</option>
                  <option value="restauration">Restauration</option>
                  <option value="agencement">Agencement</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-semibold text-ink/70">
                Description du projet
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-3 bg-ivory border-none rounded-artisan focus:ring-2 focus:ring-wood-light outline-none transition-all resize-none"
                placeholder="Détaillez votre projet (dimensions, essence de bois souhaitée...)"
                value={formState.description}
                onChange={(e) => setFormState({ ...formState, description: e.target.value })}
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
              <div className="flex flex-col gap-2 text-xs text-ink/50 italic">
                <span>✓ Devis gratuit</span>
                <span>✓ Sans engagement</span>
                <span>✓ Réponse sous 48h</span>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-wood-dark text-ivory rounded-artisan font-medium tracking-widest hover:bg-opacity-90 transition-all shadow-lg"
              >
                ENVOYER LA DEMANDE
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
