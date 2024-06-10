import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detalhes.module.css";
import logoPreta from "../../utils/assets/logo-preta.png";
import imagemPerfil from "../../utils/assets/tatuador-grid.png";
import { PiUserCircleLight, PiInstagramLogoThin } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AiOutlineLeft, AiOutlineShareAlt } from "react-icons/ai";
import Footer from "@/components/footer/footer";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiTimerLine } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import WhatsAppButton from '@/components/whastApp/WhatsAppButton'
import InstagramButton from "@/components/instagram/InstagramButton";
import { IoChevronBackCircle } from "react-icons/io5";
import apiMock from '../../apiMock';
import {toast } from 'react-toastify';
import perfilTatuador1 from '../../utils/assets/perfilTatuador1.png'
import perfilTatuador2 from '../../utils/assets/perfilTatuador2.png'
import perfilTatuador3 from '../../utils/assets/perfilTatuador3.png'
import perfilTatuador4 from '../../utils/assets/perfilTatuador4.png'
import perfilTatuador5 from '../../utils/assets/perfilTatuador5.png'
import perfilTatuador6 from '../../utils/assets/perfilTatuador6.png'

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

import aquarela2 from '../../utils/assets/aquarela2.jpeg'
import blackwork2 from '../../utils/assets/blackwork2.jpeg'
import pontilhismo2 from '../../utils/assets/pontilhismo3.jpg'
import realismo2 from '../../utils/assets/realismo2.jpeg'
import minimalismo2 from '../../utils/assets/minimalista2.jpeg'
import geometrico2 from '../../utils/assets/geometrico2.jpeg'
import Lettering2 from '../../utils/assets/Lettering2.jpeg'
import NewSchool2 from '../../utils/assets/NewSchool2.jpeg'
import OldSchool2 from '../../utils/assets/OldSchool2.jpeg'
import Oriental2 from '../../utils/assets/Oriental2.jpeg'
import TrashPolka2 from '../../utils/assets/TrashPolka2.jpeg'
import NeoTraditional2 from '../../utils/assets/NeoTraditional2.jpeg'

const images = [
  aquarela,
  blackwork,
  pontilhismo,
  realismo,
  minimalismo,
  geometrico,
  Lettering,
  NewSchool,
  OldSchool,
  Oriental,
  TrashPolka,
  NeoTraditional,
  aquarela2,
  blackwork2,
  pontilhismo2,
  realismo2,
  minimalismo2,
  geometrico2,
  Lettering2,
  NewSchool2,
  OldSchool2,
  Oriental2,
  TrashPolka2,
  NeoTraditional2,
];

function getRandomImage() {
  
  return images[Math.floor(Math.random() * images.length)];
}

function Detalhes() {
  const [randomImages, setRandomImages] = useState(Array(12).fill(''));
  const { idTatuador } = useParams();
  const [tatuador, setTatuador] = useState({});

  useEffect(() => {
    setRandomImages(randomImages.map(() => getRandomImage()));
  }, []);

  useEffect(() => {
    apiMock.get(`/${idTatuador}`).then((response) => {
        if(response.data){
          setTatuador(response.data);
        }else{
          toast.error("Erro ao buscar os dados do tatuador");
        }
      })
      .catch(error => {
        toast.error("Erro ao buscar os dados do tatuador");
        console.error(error);
      });
  }, [idTatuador]);

  const perfilTatuador = [
    perfilTatuador1,
    perfilTatuador2,
    perfilTatuador3,
    perfilTatuador4,
    perfilTatuador5,
    perfilTatuador6
  ];
  
  const sortearFotoPerfil = () => {
    let numero = Math.floor(Math.random() * perfilTatuador.length);
    return perfilTatuador[numero];
  };


  return (
    <section className={styles["section-detalhes"]}>
      <header className={styles["header-detalhes"]}>
        <Link to='/'>
          <img src={logoPreta} alt="Logo" />
        </Link>
        <span className={styles.tituloPortifolio}>Conheça o artista, explore estilos.</span>
      </header>
      <div className={styles["container-detalhes"]}>
        <article className={styles["informacoes"]}>
          <div className={styles["botoes-informacoes"]}>
          <Link to='/listagem-tatuadores'>
          <IoChevronBackCircle style={{ color: '#121212' , marginLeft: '10px', marginTop: '10px' }} size={40} />
            </Link>
            
          </div>
          <div className="flex flex-col items-start">
            <div className="flex">
              <img
                src={sortearFotoPerfil()} 
                alt="Logo Branca"
                className="w-16 mb-4 rounded-full m-2 mt-9 ml-5"
              />
              <div className="ml-3 mt-16">
                <h2 className="text-lg font-bold">{tatuador && tatuador.nome}</h2>
              </div>
            </div>
            <div className={styles.valorTempoDetalhes}>
              <div className={styles.valorMinimo}>
                <RiMoneyDollarCircleFill class="mr-4" style={{ color: '#3C3C3C' }} size={20} />
                <span >VALOR MÍNIMO: R$ {tatuador.precoMin}</span><br />
              </div>
              <div className={styles.valorMinimo}>
                <RiTimerLine class="mr-4" style={{ color: '#3C3C3C' }} size={20} />
                <span>TEMPO DE EXPERIÊNCIA: {tatuador.experiencia} </span>
              </div>
            </div>

            <div className="mt-12 ml-5">
              <h3 className="text-xl font-semibold mb-6">Bio</h3>
              <p className="text-sm text-justify w-80">
               {tatuador.bio}
              </p>
            </div>
           <WhatsAppButton phoneNumber={tatuador.phoneNumber}/>


            <div className={styles["linha-detalhes"]}></div>

          </div>
          <div className="mt-2">
            <h2 className="text-xl ml-5 mt-10 font-semibold">Estilos</h2>
            <div className="grid grid-cols-3 gap-7 p-1 ml-4 mt-4 mr-5">
              {tatuador && tatuador.estilos && tatuador.estilos.map((estilo) => (
                <Badge key={estilo} className={styles.estilosDetalhes}>
                {estilo}
              </Badge>
              )
              
              )}
            </div>
          </div>

          <div className="mt-2">
            <div className={styles["linha-detalhes-dois"]}></div>
          </div>
          <h2 className="text-xl font-semibold mt-8 ml-5">
            Ambiente de Trabalho
          </h2>
          <div className={styles["estudio-detalhes"]}>
            
            <div className={styles["nome-estudio-detalhes"]}>
              <h3 className="ml-7 mt-7 text-xl font-semibold">{tatuador.estudio && tatuador.estudio.nome}  </h3>
            </div>
          </div>
          <div className={styles.enderecoIcone}>
            <MdLocationPin style={{ color: '#3C3C3C' }} size={20} />
            <p className={styles.enderecoDetalhes}>
            {tatuador.estudio ?  tatuador.estudio.rua : 'Carregando...'}, 
            {tatuador.estudio ?  tatuador.estudio.numero : 'Carregando...'}  -
            {tatuador.estudio ?  tatuador.estudio.bairro : 'Carregando...'}
            </p>
          </div>
          <div className="mt-12 ml-5">
            <h3 className="text-xl font-semibold mb-6">Descrição</h3>
            <p className="text-sm text-justify w-80">
            {tatuador.estudio ? tatuador.estudio.descricao : 'Carregando..'}
            </p>
          </div>
          <div className="mt-2">
            <div className={styles["linha-detalhes-dois"]}></div>
          </div>
          <div className={styles["instagram"]}>
            <h3 className="text-xl font-semibold mb-6">Redes Sociais</h3>
            <div className="flex space-x-16">
            <InstagramButton username={tatuador.username}/>
            </div>
          </div>
        </article>
        <div className={styles["row-detalhes"]}>
          <div className={styles["column-detalhes"]}>
            <div className={styles["container-imagem"]}>
              <img id="image" src={randomImages[0]} alt="image 0"/>
            </div>
            <img src={randomImages[1]} alt="image 1" />
            <img src={randomImages[2]} alt="image 2" />
            <img src={randomImages[3]} alt="image 3"
            />
          </div>
          <div className={styles["column-detalhes"]}>
            <img src={randomImages[4]} alt="Tattoo oriental" />
            <img src={randomImages[5]} alt="Tattoo horizontal" />
            <img src={randomImages[6]} alt="Tattoo horizontal" />
            <img src={randomImages[7]} alt="Tattoo horizontal" />
          </div>
          <div className={styles["column-detalhes"]}>
            <img src={randomImages[8]} alt="Tattoo antebraço" />
            <img src={randomImages[9]} alt="Pescoço" />
            <img src={randomImages[10]} alt="Ombro" />
            <img src={randomImages[11]} alt="Tattoo antebraço" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Detalhes;
