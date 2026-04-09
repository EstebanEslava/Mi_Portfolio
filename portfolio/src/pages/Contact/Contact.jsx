import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "m.esteban.eslava@gmail.com",
    href: "mailto:m.esteban.eslava@gmail.com",
  },
  {
    icon: Phone,
    label: "+57 315 283 9087",
    href: "tel:+573152839087",
  },
  {
    icon: MapPin,
    label: "Cali, Colombia",
    href: "https://www.google.com/maps/place/Cali,+Valle+del+Cauca/@3.3952901,-76.6080659,12z/data=!3m1!4b1!4m6!3m5!1s0x8e30a6f0cc4bb3f1:0x1f0fb5e952ae6168!8m2!3d3.4516467!4d-76.5319854!16zL20vMDFwc3Nm?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/EstebanEslava" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/esteban-eslava",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="contact">
      <div className="contact__container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="contact__header"
        >
          <span className="contact__subtitle">05 — Contacto</span>
          <h2 className="contact__title">
            ¿Trabajamos <span className="contact__highlight">juntos</span>?
          </h2>
          <p className="contact__description">
            Estoy abierto a oportunidades de desarrollo web. No dudes en
            contactarme.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="contact__card"
        >
          <div className="contact__links">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="contact__item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact__icon">
                  <Icon size={18} />
                </div>
                <span>{label}</span>
                <ArrowUpRight size={16} className="contact__arrow" />
              </a>
            ))}
          </div>

          <div className="contact__social">
            <p>Redes sociales</p>
            <div className="contact__social-icons">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`contact__social-icon ${
                    label === "LinkedIn"
                      ? "linkedin"
                      : label === "GitHub"
                        ? "github"
                        : ""
                  }`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
