import { motion } from "motion/react";

export default function Realisations() {
  const projects = [
    {
      id: 1,
      title: "Table en Noyer",
      category: "Mobilier",
      image: "https://picsum.photos/seed/wood1/800/800",
    },
    {
      id: 2,
      title: "Bibliothèque sur mesure",
      category: "Agencement",
      image: "https://picsum.photos/seed/wood2/800/800",
    },
    {
      id: 3,
      title: "Cuisine Artisanale",
      category: "Agencement",
      image: "https://picsum.photos/seed/wood3/800/800",
    },
    {
      id: 4,
      title: "Escalier Chêne",
      category: "Structure",
      image: "https://picsum.photos/seed/wood4/800/800",
    },
    {
      id: 5,
      title: "Buffet Restauration",
      category: "Restauration",
      image: "https://picsum.photos/seed/wood5/800/800",
    },
    {
      id: 6,
      title: "Bureau Minimaliste",
      category: "Mobilier",
      image: "https://picsum.photos/seed/wood6/800/800",
    },
    {
      id: 7,
      title: "Porte d'Entrée",
      category: "Menuiserie",
      image: "https://picsum.photos/seed/wood7/800/800",
    },
    {
      id: 8,
      title: "Détail Assemblage",
      category: "Artisanat",
      image: "https://picsum.photos/seed/wood8/800/800",
    },
    {
      id: 9,
      title: "Meuble TV",
      category: "Mobilier",
      image: "https://picsum.photos/seed/wood9/800/800",
    },
  ];

  return (
    <section id="realisations" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-ink mb-4">Réalisations</h2>
          <p className="text-wood-light font-medium uppercase tracking-widest text-xs">
            Un aperçu de notre savoir-faire
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-artisan aspect-square cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-wood-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-ivory p-6">
                <span className="text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.category}
                </span>
                <h4 className="text-xl font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
