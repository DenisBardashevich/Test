import React, { useEffect, useState } from 'react';
import "./Footer.css";
import { ReactSVG } from 'react-svg';
import twitter from "/socials/twitter.svg";
import linkedin from "/socials/linkedin.svg";
import youtube from "/socials/youtube.svg";
import ticktock from "/socials/ticktock.svg";
import telegram from "/socials/telegram.svg";
import vk from "/socials/vk.svg";
import facebook from "/socials/facebook.svg";
import instagram from "/socials/instagram.svg";

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Проверяем размер при первом рендере

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return ( 
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-content-pages-items">
                    <li className="footer-content-pages-item"><a className="pages-link" href="#">Terms & Conditions</a></li>
                    <li className="footer-content-pages-item"><a className="pages-link" href="#">Cookies</a></li>
                    <li className="footer-content-pages-item"><a className="pages-link" href="#">Contacts</a></li>
                    {isMobile && (
                        <>
                            <li className="footer-content-pages-item"><a className="pages-link" href="#">Careers</a></li>
                            <li className="footer-content-pages-item"><a className="pages-link" href="#">Brand Guide</a></li>
                        </>
                    )}
                </ul>
                <div className="footer-content-social">
                    <p className="footer-content-social-text">Our social media:</p>
                    <ul className="footer-content-social-items">
                        <li className="footer-content-social-item"><a href="#"><ReactSVG src={twitter}/></a></li>

                        {/* Условный рендеринг для Facebook и Instagram сразу после Twitter */}
                        {isMobile && ( 
                            <>
                                <li className="footer-content-social-item"><a href="#"><ReactSVG src={facebook}/></a></li>
                                <li className="footer-content-social-item"><a href="#"><ReactSVG src={instagram}/></a></li>
                            </>
                        )}
                        
                        <li className="footer-content-social-item"><a href="#"><ReactSVG src={linkedin}/></a></li>
                        <li className="footer-content-social-item"><a href="#"><ReactSVG src={youtube}/></a></li>
                        <li className="footer-content-social-item"><a href="#"><ReactSVG src={ticktock}/></a></li>
                        <li className="footer-content-social-item"><a href="#"><ReactSVG src={telegram}/></a></li>
                        <li className="footer-content-social-item"><a href="#"><ReactSVG src={vk}/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}