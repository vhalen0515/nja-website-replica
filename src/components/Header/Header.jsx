import { useEffect } from "react";
import headerLogo from "../../assets/images/logo.svg";

import "./Header.css";

export default function Header({ menuOpen, setMenuOpen }) {
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
                <a href="/" className="header__logo">
                    <img src={headerLogo} alt="NJA logo." />
                </a>

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
                        <a href="/work" className="header__link">
                            Work
                        </a>
                    </li>
                    <li className="header__link-item">
                        <a href="/about" className="header__link">
                            About
                        </a>
                    </li>
                    <li className="header__link-item">
                        <a href="/contact" className="header__link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Mobile menu modal */}
            <div className={`header__modal ${menuOpen ? "active" : ""}`}>
                <nav className="header__modal-nav">
                    <ul className="header__modal-links">
                        <li className="header__modal-link-item">
                            <a href="/work" className="header__modal-link">
                                Work
                            </a>
                        </li>
                        <li className="header__modal-link-item">
                            <a href="/about" className="header__modal-link">
                                About
                            </a>
                        </li>
                        <li className="header__modal-link-item">
                            <a href="/contact" className="header__modal-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
