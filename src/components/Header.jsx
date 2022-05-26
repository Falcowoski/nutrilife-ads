import './Header.css';

function Header() {
    return (
        <header>
            <div className="header__logo">
                Nutri<span>Life</span>
            </div>
            <nav className="header__menu">
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">IMC</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>  
            </nav>
        </header>
    );
}

export default Header;