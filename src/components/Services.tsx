import { motion } from "motion/react";
import { Hammer, Ruler, Pencil, Home, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Pencil className="text-wood-light" size={32} />,
      title: "Fabrication sur mesure",
      description: "Des pièces uniques conçues pour s'adapter parfaitement à votre espace et à votre style de vie.",
    },
    {
      icon: <Sparkles className="text-wood-light" size={32} />,
      title: "Restauration de mobilier",
      description: "Redonner vie à vos meubles anciens en respectant leur histoire et leur essence originelle.",
    },
    {
      icon: <Home className="text-wood-light" size={32} />,
      title: "Agencement intérieur",
      description: "Optimisation de vos espaces de vie avec des solutions de rangement bois intelligentes et esthétiques.",
    },
    {
      icon: <Hammer className="text-wood-light" size={32} />,
      title: "Pose et installation",
      description: "Une mise en œuvre soignée et précise de toutes nos créations directement chez vous.",
    },
    {
      icon: <Ruler className="text-wood-light" size={32} />,
      title: "Conseils personnalisés",
      description: "Accompagnement dans le choix des essences de bois et la conception technique de vos projets.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-ink mb-4">Nos Services</h2>
          <div className="w-12 h-1 bg-wood-light mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-ivory rounded-artisan border border-ink/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-ink mb-4">{service.title}</h3>
              <p className="text-ink/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
