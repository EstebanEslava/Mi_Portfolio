import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Restaurante Boloy",
    subtitle: "Tienda Virtual",
    description:
      "Sitio web completo con menú, secciones informativas y diseño responsive optimizado para móviles. Componentes reutilizables y modularizados, reduciendo duplicación en un 30%.",
    tech: ["React", "JavaScript", "CSS", "Responsive Design", "Git"],
    impact:
      "Tiempos de carga más rápidos y experiencia profesional gracias a la modularización y optimización de imágenes.",
    period: "Dic 2025 – Actualidad",
  },
  {
    title: "Plataforma de Tarjetas",
    subtitle: "TripleTen Bootcamp",
    description:
      "Aplicación full stack con registro, login y gestión de tarjetas personalizadas. CRUD completo con API REST escalable y autenticación JWT.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    impact:
      "Estructura y estabilidad optimizadas, reduciendo errores en producción.",
    period: "2024",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="projects">
      <div className="projects__container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="projects__header"
        >
          <span className="projects__subtitle">03 — Proyectos</span>
          <h2 className="projects__title">
            Trabajo <span className="projects__highlight">destacado</span>
          </h2>
        </motion.div>

        <div className="projects__list">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 * i }}
              className="projects__card"
            >
              <div className="projects__card-content">
                <div className="projects__meta">
                  <span className="projects__period">{project.period}</span>
                  <span className="projects__dot" />
                  <span className="projects__subtitle-card">
                    {project.subtitle}
                  </span>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>

                <p className="projects__description">{project.description}</p>

                <p className="projects__impact">💡 {project.impact}</p>

                <div className="projects__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="projects__tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="projects__gold-line" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
