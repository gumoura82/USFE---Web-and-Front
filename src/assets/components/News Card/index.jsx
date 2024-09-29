import Card from "../Card"

export default function NewsCard() {
    const dadosnoticias = [
        {
            img:'/imgs/image container.png',
            titulo:'Temporada emocionante pela frente',
            subtitulo:'Prepare-se para uma temporada de Fórmula E c...',
            topico:'Equipe de corrida Mahindra'
        },
        {
            img:'/imgs/image container(1).png',
            titulo:'Inovações tecnológicas em corridas',
            subtitulo:'Explore as tecnologias de ponta usadas nas...',
            topico:'Especialista em tecnologia'
        },
        {
            img:'/imgs/image container(2).png',
            titulo:'Sustentabilidade no automobilismo',
            subtitulo:'Saiba como a Fórmula E promove práticas su..',
            topico:'Ecológico'
        }
    ]
    return(
        <Card props={dadosnoticias}/>
    )
}