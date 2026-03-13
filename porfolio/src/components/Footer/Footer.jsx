import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h3>
            Esteban <span>Eslava</span>
          </h3>
          <p>
            Full <span>Stack</span> Developer
          </p>
        </div>

        <div className="footer__socials">
          <a
            className="footer__social-icon github"
            href="https://github.com/EstebanEslava"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
          </a>
          <a
            className="footer__social-icon linkedin"
            href="https://linkedin.com/in/esteban-eslava"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} />
          </a>
          <a
            className="footer__social-icon gmail"
            href="mailto:m.esteban.eslava@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Esteban Eslava.</p>
      </div>
    </footer>
  );
}

export default Footer;
