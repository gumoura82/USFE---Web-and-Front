import { Link } from "react-router-dom";

export default function MiniCard({ props }) {
    return (
        <>
            {
                props.map((dados, index) => (
                    <div className="pop-up-corrida" key={index}>
                        <Link to='/corridas'>
                            <img src="/imgs/icon.png" alt="bandeira" />
                        </Link>
                        <div className="text-racing">
                            <h5>{dados.titulo}</h5>
                            <p>{dados.descricao}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

