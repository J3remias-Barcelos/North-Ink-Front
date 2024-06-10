import React, { useEffect, useState } from 'react';
import styles from './GridListagem.module.css';
import { Link } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import apiMock from '../../apiMock';
import { ToastContainer, toast } from 'react-toastify';
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


function GridListagem(  ) {

  const [tatuadores, setTatuadores] = useState([]);

  useEffect(() => {
    apiMock.get()
      .then(response => {
        if (Array.isArray(response.data)) {
          setTatuadores(response.data);
        } else {
          setTatuadores([
            {
              id: 1,
              nome: "Marcela",
              rua: "Rua Ficticia",
              numero: "123",
              bairro: "Ficção",
              precoMin: "100,00",
              estilos: ["Blackwork"]
            },
            {
              id: 2,
              nome: "João",
              rua: "Rua Real",
              numero: "456",
              bairro: "Realidade",
              precoMin: "150,00",
              estilos: ["Realismo", "Aquarela", "Geométrico"]
            },
            {
              id: 3,
              nome: "João",
              rua: "Rua Real",
              numero: "456",
              bairro: "Realidade",
              precoMin: "150,00",
              estilos: ["Realismo", "Aquarela", "Geométrico"]
            },
            {
              id: 4,
              nome: "João",
              rua: "Rua Real",
              numero: "456",
              bairro: "Realidade",
              precoMin: "150,00",
              estilos: ["Realismo", "Aquarela", "Geométrico"]
            },

          ]);

        }

      })
      .catch(error => {
        toast.error("Erro ao buscar os dados dos tatuadores");
        console.error(error);
      });
  }, []);

  const imagens = [
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

  const sortearImagens = () => {
    let numerosSorteados = [];
    while (numerosSorteados.length < 3) {
      let numero = Math.floor(Math.random() * imagens.length);
      if (!numerosSorteados.includes(numero)) {
        numerosSorteados.push(numero);
      }
    }
    return numerosSorteados.map(i => imagens[i]);
  };

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
    <div className={styles.gridListagem}>
      {tatuadores.map(tatuador => {
        const imagensSorteadas = sortearImagens();
        return (
          <div key={tatuador.id} className={styles.cardStudio}>
            <div className={styles.fotosServicos}>
              {imagensSorteadas.map((imagem, index) => (
                <div key={index} className={styles.imagemWrapper}>
                  <img className={`${styles.imagem} imagem${index + 1}`} src={imagem} alt="" />
                </div>
              ))}
            </div>
            <Link to='/detalhes'>
              <div className={styles.pointerSombra}>
                <div className={styles.informacoesStudio}>
                  <img className={styles.fotoPerfil} src={sortearFotoPerfil()} alt="" />
                  <div className={styles.informacoes}>
                    <h5 className="font-bold">{tatuador.nome}</h5>
                    <div className={styles.line}>
                      <MdLocationPin style={{ color: '#A855F7' }} size={20} />
                      <p className="ml-4">{`${tatuador.estudio.rua}, ${tatuador.estudio.numero} - ${tatuador.estudio.bairro}`}</p>
                    </div>
                    <div className={styles.line}>
                      <RiMoneyDollarCircleFill className="mr-4" style={{ color: '#A855F7' }} size={20} />
                      <p className="font-bold" >Taxa Minima: R$ {tatuador.precoMin}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className={styles.iconeContainer}>
              {tatuador.estilos.map(estilo => (
                <div key={estilo} className={styles.icone}>{estilo}</div>
              ))}
            </div>
            <Link to={`/detalhes/${tatuador.idTatuador}`}>
              <div className={styles.botaoTenhoInteresse}>
                <button className={styles.tenhoInteresse}>Ver Portifólio</button>
              </div>
            </Link>
           <ToastContainer />
          </div>
        );
      })}
    </div>
  );
};

  export default GridListagem;
