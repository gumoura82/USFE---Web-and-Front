import { Link } from "react-router-dom";
import ProximasCorridas from "../components/Proximas Corridas";
import NewsCard from "../components/News Card";
import Slider from "../components/Slider";

export default function Home(){
    return(
        <section className="home">
            <section className="header-tittle"> 
                <div className="text-header">
                    <h1>Bem-vindo à Fórmula E</h1>
                    <p>Experimente a emoção da inovação e da sustentabilidade nas corridas</p>
                    <Link to='/corridas'>Explore Agora</Link>
                </div>
                <img src="/imgs/Header carro img.png" alt="carro formula e" />
            </section>
            <section className="carrosel-car">
                <Slider/>
            </section>
            <section className="news-home">
                <h1>Ultimas Noticias</h1>
                <div className="div-card-news">
                    <NewsCard/>
                </div>
            </section>
            <section className="games-section">
                <div>
                    <div className="text-game">
                        <h1>Teste seu conhecimento!</h1>
                        <p>Divirta-se com nossos questionários e jogos interativos.</p>
                    </div>
                    <div className="buttons-game">
                        <Link className="button-1" to='/games'>Explore Agora</Link>
                        <Link className="button-2" to="/questionario">Iniciar questionário</Link>
                    </div>
                </div>
                <img src="/imgs/games image.png" alt="" />
            </section>
            <section className="google-maps-corridas">
                <img src="/imgs/map container.png" alt=""/>
            </section>
            <section className="corridas-proximas">
                <h1>Próximas corridas</h1>
                <div className="corridas-data">
                    <ProximasCorridas/>
                </div>
            </section>
        </section>

    )
}