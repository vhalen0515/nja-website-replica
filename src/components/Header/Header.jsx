import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import headerLogo from "../../assets/images/logo.svg";

import "./Header.css";

export default function Header({ menuOpen, setMenuOpen }) {
    const location = useLocation();

    // Closes menu after navigating to new link
    useEffect(() => {
        setMenuOpen(false)
    }, [location, setMenuOpen])

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    // Closes menu on window resize above 767px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [menuOpen, setMenuOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <section className="header">
            <nav className="header__nav">
                <Link to="/" className="header__logo">
                    <img src={headerLogo} alt="NJA logo." />
                </Link>

                {/* Mobile nav */}
                <button
                    className={`header__menu-toggle ${
                        menuOpen ? "active" : ""
                    }`}
                    onClick={toggleMenu}
                    aria-expanded={menuOpen}
                    aria-label="Toggle menu"
                >
                    <span className="header__menu-toggle-bar"></span>
                    <span className="header__menu-toggle-bar"></span>
                    <span className="header__menu-toggle-bar"></span>
                </button>

                {/* Desktop nav */}
                <ul className="header__links">
                    <li className="header__link-item">
                        <Link to="/work" className="header__link">
                            Work
                        </Link>
                    </li>
                    <li className="header__link-item">
                        <Link to="/about" className="header__link">
                            About
                        </Link>
                    </li>
                    <li className="header__link-item">
                        <Link to="/contact" className="header__link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile menu modal */}
            <div className={`header__modal ${menuOpen ? "active" : ""}`}>
                <nav className="header__modal-nav">
                    <ul className="header__modal-links">
                        <li className="header__modal-link-item">
                            <Link to="/work" className="header__modal-link">
                                Work
                            </Link>
                        </li>
                        <li className="header__modal-link-item">
                            <Link to="/about" className="header__modal-link">
                                About
                            </Link>
                        </li>
                        <li className="header__modal-link-item">
                            <Link to="/contact" className="header__modal-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
