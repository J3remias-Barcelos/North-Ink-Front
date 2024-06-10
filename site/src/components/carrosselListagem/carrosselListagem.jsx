import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carrosselListagem.css'; // Importe o arquivo de estilos CSS
import aquarela from '../../utils/assets/aquarela.jpeg'
import blackwork from '../../utils/assets/blackwork.jpeg'
import pontilhismo from '../../utils/assets/pontilhismo-2.jpg'
import realismo from '../../utils/assets/realismo.jpeg'
import minimalismo from '../../utils/assets/minimalista.jpeg'
import geometrico from '../../utils/assets/geometrico.jpg'
import Lettering from '../../utils/assets/Lettering.jpeg'
import NewSchool from '../../utils/assets/New School.jpg'
import OldSchool from '../../utils/assets/OldSchool.jpg'
import Oriental from '../../utils/assets/Oriental.jpg'
import TrashPolka from '../../utils/assets/TrashPolka.jpg'
import NeoTraditional from '../../utils/assets/NeoTraditional.jpeg'

const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '150px'
};

const Carousel = ({ buscarTatuadoresPorEstilo }) => {
    return (
        <div className="carouselContainer">
            <Slider {...settings}>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('Aquarela')}>
                    <img src={aquarela} alt="Image 5" className="carousel-image" />
                    <p className="carousel-text">Aquarela</p>
                </div>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('Blackwork')}>
                    <img src={blackwork} alt="Image 2" className="carousel-image" />
                    <p className="carousel-text">Blackwork</p>
                </div>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('Geométrico')}>
                    <img src={geometrico} alt="Image 5" className="carousel-image" />
                    <p className="carousel-text">Geométrico</p>
                </div>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('Lettering')}>
                    <img src={Lettering} alt="Image 5" className="carousel-image" />
                    <p className="carousel-text">Lettering</p>
                </div>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('Minimalismo')}>
                    <img src={minimalismo} alt="Image 1" className="carousel-image" />
                    <p className="carousel-text">Minimalismo</p>                
                </div>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('Neo Traditional')}>
                    <img src={NeoTraditional} alt="Image 5" className="carousel-image" />
                    <p className="carousel-text">Neo Traditional</p>
                </div>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('New School')}>
                    <img src={NewSchool} alt="Image 5" className="carousel-image" />
                    <p className="carousel-text">New School</p>
                </div>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('Old School')}>
                    <img src={OldSchool} alt="Image 5" className="carousel-image" />
                    <p className="carousel-text">Old School</p>
                </div>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('Oriental')}>
                    <img src={Oriental} alt="Image 5" className="carousel-image" />
                    <p className="carousel-text">Oriental</p>
                </div>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('Pontilhismo')}>
                    <img src={pontilhismo} alt="Image 3" className="carousel-image" />
                    <p className="carousel-text">Pontilhismo</p>
                </div>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('Realismo')}>
                    <img src={realismo} alt="Image 4" className="carousel-image" />
                    <p className="carousel-text">Realismo</p>
                </div>
                <div className="carousel-item" onClick={() => buscarTatuadoresPorEstilo('Trash Polka')}>
                    <img src={TrashPolka} alt="Image 5" className="carousel-image" />
                    <p className="carousel-text">Trash Polka</p>
                </div>
                {/* Add more images here */}
            </Slider>
        </div>
    );
};

export default Carousel;