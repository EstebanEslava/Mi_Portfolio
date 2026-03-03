import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Sobre mí", path: "/about" },
    { label: "Habilidades", path: "/skills" },
    { label: "Proyectos", path: "/projects" },
    { label: "Experiencia", path: "/experience" },
    { label: "Contacto", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__logo">EE.</div>

        {/* Toggle */}
        <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop */}
        <ul className="navbar__links">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  isActive ? "navbar__link active" : "navbar__link"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={handleClose}
                    className={({ isActive }) =>
                      isActive ? "navbar__link active" : "navbar__link"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
