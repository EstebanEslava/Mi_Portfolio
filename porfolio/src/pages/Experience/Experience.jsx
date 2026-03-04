import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "education",
    title: "Web Developer Certificate",
    place: "TripleTen Bootcamp",
    period: "May 2024 – Dic 2025",
    description:
      "Formación intensiva en desarrollo web full stack con proyectos reales.",
  },
  {
    type: "work",
    title: "Operaciones y Atención al Cliente",
    place: "Restaurante Weeks – Cali, Colombia",
    period: "Ene 2022 – Nov 2024",
    description:
      "Gestión y priorización de tareas en entornos de alta presión. Desarrollo de atención al detalle, comunicación efectiva y trabajo colaborativo.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="experience">
      <div className="experience__container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="experience__header"
        >
          <span className="experience__subtitle">04 — Trayectoria</span>
          <h2 className="experience__title">
            Experiencia y{" "}
            <span className="experience__highlight">educación</span>
          </h2>
        </motion.div>

        <div className="experience__timeline">
          <div className="experience__line" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="experience__item"
            >
              <div className="experience__icon">
                {item.type === "education" ? (
                  <GraduationCap size={20} />
                ) : (
                  <Briefcase size={20} />
                )}
              </div>

              <div className="experience__card">
                <span className="experience__period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="experience__place">{item.place}</p>
                <p className="experience__desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
