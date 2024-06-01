import React from "react";
import styles from "./Detalhes.module.css";
import logoPreta from "../../utils/assets/logo-preta.png";
import imagemPerfil from "../../utils/assets/tatuador-grid.png";
import { PiUserCircleLight, PiInstagramLogoThin } from "react-icons/pi";
import { Link } from "react-router-dom";
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

function Detalhes() {
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
                src={imagemPerfil}
                alt="Logo Branca"
                className="w-16 mb-4 rounded-full m-2 mt-9 ml-5"
              />
              <div className="ml-3 mt-16">
                <h2 className="text-lg font-bold">Marcela Marini</h2>
              </div>
            </div>
            <div className={styles.valorTempoDetalhes}>
              <div className={styles.valorMinimo}>
                <RiMoneyDollarCircleFill class="mr-4" style={{ color: '#3C3C3C' }} size={20} />
                <span >VALOR MÍNIMO: R$ 400,00</span><br />
              </div>
              <div className={styles.valorMinimo}>
                <RiTimerLine class="mr-4" style={{ color: '#3C3C3C' }} size={20} />
                <span>TEMPO DE EXPERIÊNCIA: 2 anos</span>
              </div>
            </div>

            <div className="mt-12 ml-5">
              <h3 className="text-xl font-semibold mb-6">Bio</h3>
              <p className="text-sm text-justify w-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
           <WhatsAppButton/>


            <div className={styles["linha-detalhes"]}></div>

          </div>
          <div className="mt-2">
            <h2 className="text-xl ml-5 mt-10 font-semibold">Estilos</h2>
            <div className="grid grid-cols-3 gap-7 p-1 ml-4 mt-4 mr-5">
              <Badge className={styles.estilosDetalhes}>
                Black Work
              </Badge>
              <Badge
                className={styles.estilosDetalhes}
              >
                Black Work
              </Badge>
              <Badge
                className={styles.estilosDetalhes}
              >
                Black Work
              </Badge>
              <Badge
                className={styles.estilosDetalhes}
              >
                Black Work
              </Badge>
            </div>
          </div>

          <div className="mt-2">
            <div className={styles["linha-detalhes-dois"]}></div>
          </div>
          <h2 className="text-xl font-semibold mt-8 ml-5">
            Ambiente de Trabalho
          </h2>
          <div className={styles["estudio-detalhes"]}>
            <img
              src={imagemPerfil}
              alt="Logo Branca"
              className="w-16 mb-4 rounded-full m-2 mt-8 ml-5 mr-4"
            />
            <div className={styles["nome-estudio-detalhes"]}>
              <h3 className="mt-7 text-xl font-semibold">ROUTE TATTO  </h3>
            </div>
          </div>
          <div className={styles.enderecoIcone}>
            <MdLocationPin style={{ color: '#3C3C3C' }} size={20} />
            <p className={styles.enderecoDetalhes}>
              Endereço da rua, 123 - Consolação
            </p>
          </div>
          <div className="mt-12 ml-5">
            <h3 className="text-xl font-semibold mb-6">Descrição</h3>
            <p className="text-sm text-justify w-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="mt-2">
            <div className={styles["linha-detalhes-dois"]}></div>
          </div>
          <div className={styles["instagram"]}>
            <h3 className="text-xl font-semibold mb-6">Redes Sociais</h3>
            <div className="flex space-x-16">
            <InstagramButton/>
            </div>
          </div>
        </article>
        <div className={styles["row-detalhes"]}>
          <div className={styles["column-detalhes"]}>
            <div className={styles["container-imagem"]}>
              <img id="image"
                src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_ecLI8yrmRdacKRR.jpg?w=600"
                alt="Tatuador com tatuagem no braço"
              />
              {/* <label id="texto-imagem">Entre em contato</label> */}
            </div>
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_6LHcPR645dA4CNU.jpg?w=600"
              alt="Antebraço colorida"
            />
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_qhTio2MUU0eTTV9.jpg?w=600"
              alt="Tatuagem mulher costas"
            />
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_k3oYdgFf1N71Yia.jpg?w=600"
              alt="Tatuagem mulher costas"
            />
          </div>
          <div className={styles["column-detalhes"]}>
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_yLGlzfPplQBEqDm.jpg?w=600"
              alt="Tattoo oriental"
            />
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_HHhP0VXRwxR85Ev.jpg?w=600"
              alt="Tattoo horizontal"
            />
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_e71Vg93IfIltEJi.jpg?w=600"
              alt="Tattoo horizontal"
            />
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_tCG2YTM6gYA037v.jpg?w=600"
              alt="Tattoo horizontal"
            />
          </div>
          <div className={styles["column-detalhes"]}>
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_P8XUSlHM70No3aa.jpg?w=600"
              alt="Tattoo antebraço"
            />
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_SSK9SLM7qHUtrA9.jpg?w=600"
              alt="Pescoço"
            />
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_mrPtqP38rlSm8Bk.jpg?w=600"
              alt="Ombro"
            />
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/posts/20230812_NDIqZ1zbGtj7Q0J.jpg?w=600"
              alt="Tattoo antebraço"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Detalhes;
