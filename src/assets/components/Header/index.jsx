import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false); // Agora o useState estará definido corretamente

    const isActive = (pathname) => location.pathname === pathname;

    const toggleMenu = () => {
        console.log(setMenuOpen(!menuOpen));
    };

    return (
        <header>
            <img src="./imgs/Formula E logo.png" alt="Fórmula E logo" />

            <div className="mobile-menu" onClick={toggleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <ul className={`link-input ${menuOpen ? "activate-mobile" : "disable"}`}>
                <li>
                    <Link to="/" className={isActive("/") ? "active" : ""}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/produtos" className={isActive("/produtos") ? "active" : ""}>
                        Produtos
                    </Link>
                </li>
                <li>
                    <Link to="/games" className={isActive("/games") ? "active" : ""}>
                        Games
                    </Link>
                </li>
                <li>
                    <Link to="/sobre" className={isActive("/sobre") ? "active" : ""}>
                        Sobre Nós
                    </Link>
                </li>
                <li>
                    <Link to="/corridas" className={isActive("/corridas") ? "active" : ""}>
                        Corridas
                    </Link>
                </li>
                <li>
                    <Link to="/noticias" className={isActive("/noticias") ? "active" : ""}>
                        Notícias
                    </Link>
                </li>
                <li>
                    <Link to="/comunidade" className={isActive("/comunidade") ? "active" : ""}>
                        Comunidade
                    </Link>
                </li>
            </ul>

            <div className="group-in">
                <div>
                    <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.635 14.9987C13.3145 16.1229 11.6028 16.8013 9.73268 16.8013C5.55373 16.8013 2.16602 13.4136 2.16602 9.23464C2.16602 5.05568 5.55373 1.66797 9.73268 1.66797C13.9116 1.66797 17.2993 5.05568 17.2993 9.23464C17.2993 11.0935 16.6291 12.7957 15.5171 14.113L19.1491 17.745L18.2652 18.6288L14.635 14.9987ZM16.0493 9.23464C16.0493 12.7232 13.2213 15.5513 9.73268 15.5513C6.24408 15.5513 3.41602 12.7232 3.41602 9.23464C3.41602 5.74604 6.24408 2.91797 9.73268 2.91797C13.2213 2.91797 16.0493 5.74604 16.0493 9.23464Z"
                            fill="black"
                            fillOpacity="0.7"
                        />
                    </svg>
                    <input type="text" placeholder="Pesquise Aqui" id="nav-input" />
                </div>
            </div>
        </header>
    );
}