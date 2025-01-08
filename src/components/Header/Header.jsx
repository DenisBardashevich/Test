import "./Header.css";
import { ReactSVG } from 'react-svg';
import union from "./../../../public/icons/Union.svg"

const Header = () => {
    return (
        <>
            <header>
                <div className="header-content">
                    <nav className="header-content__nav">
                        <ul>
                            <li>About us</li>
                            <li>Grand</li>
                            <li>Commissions</li>
                            <li>Blub</li>
                            <li>Contact us</li>
                            <li>Careers</li>
                        </ul>
                    </nav>
                    <div className="header-content__right">
                        <div className="header-content-rigth__lang"><ReactSVG src={union} /> RU</div>
                        <div className="header-content-rigth__longIn">LOG IN</div>
                        <div className="header-content-rigth__singUp">SING UP</div>


                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
