import { Link } from "react-router-dom";

export default function Footer(){
    return(
       <footer>
            <h1>Formula E</h1>
            <div className="footer-opcoes">
                <Link to='/'>Home</Link>
                <Link to='/agencia'>Agência</Link>
                <Link to='/sobre'>Sobre Nós</Link>
                <Link to='/catalogo'>Catálogo</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contato</Link>
            </div>
            <div className="redes-sociais-footer">
                <a href="">
                    <img src="/imgs/instagram.png" alt="Insta" />
                </a>
                <a href="">
                    <img src="/imgs/facebook.png" alt="Facebook" />
                </a>
                <a href="">
                    <img src="/imgs/twitter.png" alt="Twitter" />
                </a>
            </div>
       </footer> 
    )
}