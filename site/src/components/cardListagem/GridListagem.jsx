import React from 'react';
import styles from './GridListagem.module.css';
import studioTatuagens from '../../utils/assets/tatuagem-grid-card.jpg'
import fotoPerfilGrid from '../../utils/assets/tatuador-grid.png'
import { Link } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";



function GridListagem() {
  return (
    <div className={styles.gridListagem}>
      <div className={styles.cardStudio}>
        <div className={styles.fotosServicos}>
          <div className={styles.imagemWrapper}>
            <img className={`${styles.imagem} imagem1`} src={studioTatuagens} alt="" />
          </div>
          <div className={styles.imagemWrapper}>
            <img className={`${styles.imagem} imagem2`} src="https://img.freepik.com/fotos-gratis/jovem-tatuada-nas-costas-esbanja-sensualidade-e-elegancia-gerada-por-ia_188544-45479.jpg?t=st=1712934895~exp=1712938495~hmac=b03642e8852d26e7de06a8bb3e355dca2bd7a402afa6ac63aa782fefad03fa8d&w=1060" alt="" />
          </div>
          <div className={styles.imagemWrapper}>
            <img className={`${styles.imagem} imagem3`} src="https://img.freepik.com/fotos-gratis/uma-mao-tatuada-de-mulher-segura-decoracao-de-flores-gerada-por-ia_188544-45554.jpg?t=st=1712936410~exp=1712940010~hmac=b6440133274260c03f7a2d3932e833553879dfe8c22c52e9b3f7262d1600e867&w=1060" alt="" />
          </div>
        </div>
        <Link to='/detalhes'>
          <div className={styles.pointerSombra}>
            <div className={styles.informacoesStudio}>
              <img className={styles.fotoPerfil} src={fotoPerfilGrid} alt="" />
              <div className={styles.informacoes}>
                <h5 class="font-bold">Marcela Aoki</h5>
                <div className={styles.line}>
                  <MdLocationPin style={{ color: '#A855F7' }} size={20}/>
                  <p class="ml-4">Rua das Flores, 1234 - Vila Carrão</p>
                </div>
                <div className={styles.line}>
                  <RiMoneyDollarCircleFill class="mr-4" style={{ color: '#A855F7' }} size={20}/>
                  <p class="font-bold" >Taxa Minima: R$ 100,00</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className={styles.iconeContainer}>
          <div className={styles.icone}>Old School</div>
          <div className={styles.icone}>Realismo</div>
          <div className={styles.icone}>Aquarela</div>
          <div className={styles.icone}>Pontilhismo</div>
        </div>
        <Link to='/detalhes'>
          <div className={styles.botaoTenhoInteresse}>
            <button className={styles.tenhoInteresse}>Ver Portifólio</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GridListagem;
