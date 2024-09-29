export default function Card({props}){
    return(
        <>
        {
            props.map((dados, index) => (
                <div className="card-full" key={index}>
                    <img src={dados.img} alt="img noticia" />
                    <div className="card-text">
                        <h4>{dados.titulo}</h4>
                        <p>{dados.subtitulo}</p>
                        <div>
                            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="17" height="10" rx="5" fill="black"/>
                            </svg>
                            <p>{dados.topico}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        </>
    )
}