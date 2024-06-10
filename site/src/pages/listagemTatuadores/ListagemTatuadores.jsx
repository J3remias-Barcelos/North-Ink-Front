import React from 'react';
import logoBranca from '../../utils/assets/logo-branca.png';
import styles from './ListagemTatuadores.module.css'
import GridListagem from '@/components/cardListagem/GridListagem';
import Footer from '@/components/footer/footer';
import Carousel from '@/components/carrosselListagem/carrosselListagem';
import { PiUserCircleLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

function ListagemTatuadores() {
  return (
    <>
      <div className={styles.imagemFundo}>
        <div className={styles.navBar}>
          <Link to='/'>
            <div className={styles["logo"]}>
              <img src={logoBranca} alt="Logo Branca" />
            </div>
          </Link>
          <div className={styles["botao-entrar"]}>
            <PiUserCircleLight />
            <Link to='/login'>Sou um Tatuador</Link>
          </div>
        </div>
        <div className={styles.inicio}>
          <div className={styles.fraseInicio}>
            <h3 className="text-gray-100">Encontre o seu artista <span className="text-purple-600">ideal</span>.</h3>
          </div>
          <div className={styles["inputs"]}>
            <input type="text" id="campo_texto" placeholder="Pesquise por nome de tatuadores" className={styles.pesquisa} />
            <input type="text" id="campo_texto" placeholder="Onde?" className={styles.onde} />
          </div>
        </div>
      </div>
      <div className={styles.fundoFim}>
      <div className={styles.ondasListagem}>
        <span className={styles["categoria"]}>
          <h5 className="text-gray-100 mt-40">Navegue por estilos.</h5>
        </span>
        <Carousel />
      </div>
        <h5 className={styles["titulo-listagem"]}>Os melhores profissionais em um só lugar.</h5>
        <div className={styles.content}>
          <div className={styles.cardRow}>
            <GridListagem className={styles["cardListagem"]} />
          </div>
        </div>
        <Footer />
      </div>
    </>


  );
}

export default ListagemTatuadores;
