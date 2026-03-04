import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiEslint,
  SiPrettier,
  SiVsco,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DBFB" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Flexbox & Grid" },
      { name: "Responsive Design" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "APIs RESTful" },
      { name: "JWT Auth" },
    ],
  },
  {
    title: "Base de Datos",
    skills: [{ name: "MongoDB", icon: SiMongodb, color: "#4DB33D" }],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F1502F" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
      { name: "VS Code", icon: SiVsco, color: "#007ACC" },
      { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
      { name: "Prettier", icon: SiPrettier, color: "#F7B93E" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="skills">
      <div className="skills__container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="skills__header"
        >
          <span className="skills__subtitle">02 — Habilidades</span>
          <h2 className="skills__title">
            Mi <span className="skills__highlight">stack</span> técnico
          </h2>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * catIdx }}
              className="skills__card"
            >
              <h3 className="skills__card-title">{cat.title}</h3>

              <div className="skills__tags">
                {cat.skills.map(({ name, icon: Icon, color }) => (
                  <span key={name} className="skills__tag">
                    {Icon && (
                      <Icon className="skills__icon" style={{ color: color }} />
                    )}
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
