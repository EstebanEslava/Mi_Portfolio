import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg"></div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="hero-badge" variants={itemVariants}>
          Full Stack Developer
        </motion.span>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Esteban <span>Eslava</span>
        </motion.h1>

        <motion.p className="hero-text" variants={itemVariants}>
          Construyo experiencias web completas con pasión por el código limpio,
          el diseño cuidado y soluciones funcionales.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#contact" className="btn-primary">
            Hablemos
          </a>
          <a href="#projects" className="btn-primary">
            Ver proyectos
          </a>
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          <a
            className="hero__social-icon github"
            href="https://github.com/EstebanEslava"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            className="hero__social-icon linkedin"
            href="https://linkedin.com/in/esteban-eslava"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a
            className="hero__social-icon gmail"
            href="mailto:m.esteban.eslava@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
};

export default Hero;
