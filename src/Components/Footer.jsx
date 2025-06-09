import './Footer.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    {/* Contact Info */}
                    <div className="footer-contact">
                        <div>
                            <a href="tel:+91 7806861799" className="footer-link">
                                <FaPhone /> <span>+91 7806861799</span>
                            </a>
                        </div>
                        <div>
                            <a href="mailto:aashvinianbalagan@gmail.com" className="footer-link">
                                <FaEnvelope /> <span>aashvinianbalagan@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}

                    <div className="footer-social">
                        <a
                            href="https://www.linkedin.com/in/ashvini-a-b1a7bb29a/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://www.instagram.com/ashvini2315/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </a>


                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    © {new Date().getFullYear()} All rights reserved @ Ashvini A
                </div>
            </div>
        </footer>
    );
}
