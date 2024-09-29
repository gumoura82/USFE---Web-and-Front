import { useEffect, useRef, useState } from 'react'
import './index.css'

const slides = [
    {
        title: 'Mahindra',
        subtitle: 'Um dos melhores carros da nova geração',
        imageUrl: "/imgs/MahindraRe.png",
        class: 'bg-mh'
        
    },
    {
        title: 'Mercedes',
        subtitle: 'Um dos melhores carros da nova geração',
        imageUrl: "/imgs/Mercedes.png",
        class: 'bg-me'
    },
    {
        title: 'Nissan',
        subtitle: 'Um dos melhores carros da nova geração',
        imageUrl: "/imgs/Nissan.png",
        class: 'bg-ni'
    }
]


export default function Slider() {
    const ref = useRef(null)
    const [sliders, setSliders] = useState(slides)
    const [slideActive, setSlideActive] = useState(0)


    const displaySlide = (index) => {
        setSlideActive(index)
    }


    // Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideActive(prev => {
                if (sliders.length - 1 === prev) return 0
                return prev + 1
            })
        }, 3000);

        return () => clearInterval(interval)
    }, [])


    return (
        <section className="slider">
            <div className="slides" ref={ref}>
                {/* Slide images */}
                {sliders.map((slide, index) => {
                    return (<div key={index} className={`slide ${slideActive === index ? 'active' : ''}`}>
                        <div className={`slider-container ${slide.class}`}>
                            <div className="text">
                                <h1>{slide.title}</h1>
                                <p>{slide.subtitle}</p>
                            </div>
                            <img src={slide.imageUrl} alt="Imagem do Carro Vrum Vrum" />
                        </div>
                    </div>)
                })}
                {/* Fim Slide images */}
            </div>

            {/* Manual navigation */}
            <div className="manual-navigation">
                {sliders.map((slide, index) => {
                    return <label onClick={() => displaySlide(index)} className={`manual-btn ${slideActive === index ? 'active' : ''}`}></label>
                })}
            </div>
        </section>
    );
};

