import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="header__logo">
                Nutri<span>Life</span>
            </div>
            <nav className="header__menu">
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="diet">Dieta</Link></li>
                    <li><Link to="imc">IMC</Link></li>
                    <li><Link to="contact">Contato</Link></li>
                </ul>  
            </nav>
        </header>
    );
}

export default Header;