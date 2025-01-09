import "./Footer.css"
import { ReactSVG } from 'react-svg';
import twitter from "/socials/twitter.svg"
import linkedin from "/socials/linkedin.svg"
import youtube from "/socials/youtube.svg"
import ticktock from "/socials/ticktock.svg"
import telegram from "/socials/telegram.svg"
import vk from "/socials/vk.svg"

export default function Footer() {
    return ( 
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-content-pages-items">
                    <li className="footer-content-pages-item">Terms & Conditions</li>
                    <li className="footer-content-pages-item">Cookies</li>
                    <li className="footer-content-pages-item">Contacts</li>
                </ul>
                <div className="footer-content-social">
                    <p className="footer-content-social-text"> Our social media:</p>
                    <ul className="footer-content-social-items">
                        <li className="footer-content-social-item"><ReactSVG src={twitter}/></li>
                        <li className="footer-content-social-item"><ReactSVG src={linkedin}/></li>
                        <li className="footer-content-social-item"><ReactSVG src={youtube}/></li>
                        <li className="footer-content-social-item"><ReactSVG src={ticktock}/></li>
                        <li className="footer-content-social-item"><ReactSVG src={telegram}/></li>
                        <li className="footer-content-social-item"><ReactSVG src={vk}/></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}