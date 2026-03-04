import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpio",
    desc: "ESLint, Prettier y buenas prácticas para reducir bugs en un 20%.",
  },
  {
    icon: Rocket,
    title: "Full Stack",
    desc: "Desde el frontend hasta el backend y deploy en la nube.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    desc: "Comunicación efectiva y resolución ágil de problemas.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about">
      <div className="about__container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="about__header"
        >
          <span className="about__subtitle">01 — Sobre mí</span>
          <h2 className="about__title">
            Construyendo el <span className="about__highlight">futuro</span>{" "}
            digital
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="about__text"
          >
            <p>
              Soy un desarrollador Web Full Stack Junior de
              <strong> Cali, Colombia</strong>, con experiencia construyendo
              aplicaciones completas usando el stack MERN.
            </p>

            <p>
              Me apasiona crear interfaces intuitivas respaldadas por
              arquitecturas sólidas. Mi formación en TripleTen Bootcamp y mi
              experiencia en entornos de alta presión me han dado la disciplina,
              atención al detalle y orientación a resultados necesarias para
              entregar productos de calidad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="about__cards"
          >
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="about__card">
                <div className="about__icon">
                  <Icon size={20} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
