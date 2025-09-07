import footerLogo from "../../assets/images/logo.svg";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top-container">
                <div className="footer__logo-container">
                    <a href="#">
                        <img
                            className="footer__logo"
                            src={footerLogo}
                            alt="NJA logo"
                        />
                    </a>
                </div>
                <div className="footer__contact-container">
                    <h4 className="footer__header">contact</h4>
                    <p className="footer__contact-text">
                        212 w pine street suite 01 <br /> lodi california 95240
                    </p>
                    <p className="footer__contact-text footer__contact-email">
                        contact@njaarchitecture.com
                    </p>
                    <p className="footer__contact-text">209.400.6080</p>
                </div>
                <div className="footer__social-container">
                    <h4 className="footer__header">social</h4>
                    <div className="footer__social-icons">
                        <a className="footer__social-icon-link" href="#">
                            <svg
                                className="footer__social-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                                />
                            </svg>
                        </a>
                        <a className="footer__social-icon-link" href="#">
                            <svg
                                className="footer__social-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom-container">
                <p className="footer__copyright">
                    Copyright &copy; {new Date().getFullYear()}{" "}
                    njaarchitecture.com&nbsp; | &nbsp;All rights reserved
                </p>
            </div>
        </footer>
    );
}
