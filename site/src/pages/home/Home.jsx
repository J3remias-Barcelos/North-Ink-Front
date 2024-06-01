import Carrossel from '@/components/carrossel/carousel';
import styles from '../home/Home.module.css';
import { PiUserCircleLight } from "react-icons/pi";
import Footer from '@/components/footer/footer';
import { Link } from 'react-router-dom';
import perfilTatuador from '../../utils/assets/perfil.png'



function Home() {
    return (
        <>
            <div className={styles["inicio"]}>
                <div className={styles["logo"]}>
                    <LogoImagem />
                </div>
                <div className={styles["botao-entrar"]}>
                    <PiUserCircleLight />
                    <Link to='/login'>Sou um Tatuador</Link>
                </div>
                <header className={styles["frase-titulo"]}>
                    ENCONTRE O SEU <span style={{ color: '#9333EA' }}>TATUADOR</span> IDEAL.
                </header>
                <article className={styles["subtitulo"]}>
                    Na nossa plataforma, <span style={{ color: '#9333EA' }}>TATUADOR</span> conectamos você aos melhores tatuadores em
                    minutos, prontos para transformar suas
                    ideias em tinta. Explore estilos únicos e faça da sua próxima tatuagem uma <span style={{ color: '#9333EA' }}>TATUADOR</span> inesquecível.
                </article>
                <div className={styles["botoes-inicio"]}>
                    <Link to='/cadastro'>
                        <button style={{ backgroundColor: '#9333EA' }}>CADASTRE-SE</button>
                    </Link>
                    <Link to='/listagem-tatuadores'>
                        <button style={{ backgroundColor: '#5B5B5B' }}>BUSCAR PROFISSIONAIS</button>
                    </Link>
                </div>
            </div>

            <div className={styles["gradiente-site"]}>
                <section className={styles["fotos-tatuagens"]}>
                    <div className={styles["frase-tatuagens"]}>
                        Nós celebramos a <span style={{ color: '#1E1E1E' }}>arte</span> que <br /> você veste. <br />
                        <span style={{ color: '#1E1E1E' }}>Descubra</span> a tatuagem que eleva sua essência.
                    </div>
                    <div className={styles["row"]}>
                        <div className={styles["column"]}>
                            <img src='\src\utils\assets\um-homem-com-uma-tatuagem-no-braco-comprimido.jpg' alt="Tatuador com tatuagem no braço" />
                            <img src='https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Antebraço colorida" />
                            <img src='\src\utils\assets\tatuagem-mulher-costas-comprimida.jpg' alt="Tatuagem mulher costas" />
                        </div>
                        <div className={styles["column"]}>
                            <img src='https://images.pexels.com/photos/3214690/pexels-photo-3214690.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Tattoo oriental" />
                            <img src='https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Tattoo horizontal" />
                        </div>
                        <div className={styles["column"]}>
                            <img src='https://images.pexels.com/photos/1433273/pexels-photo-1433273.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Tattoo antebraço" />
                            <img src='https://images.pexels.com/photos/1414401/pexels-photo-1414401.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Pescoço" />
                            <img src='https://images.pexels.com/photos/4123910/pexels-photo-4123910.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Ombro" />
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles["fundo"]}>
            <div className={styles["fundo-ondas"]}>
                <article className={styles["frase-carrossel"]}>Descubra os <span style={{ color: '#1E1E1E' }}>artistas</span> que não apenas ouvem,
                    <br/>
                    mas entendem sua <span style={{ color: '#1E1E1E' }}>história</span>.
                </article>
                <Carrossel />
            </div>
            <section className={styles["secao-depoimentos"]}>
                <header>Na <span style={{ color: '#9333EA' }}>North Ink.</span>, sua melhor escolha! <br />
                    Profissionais, preço e proximidade em um só lugar.
                </header>
                <article>Depoimento de um dos nossos <span style={{ color: '#9333EA' }}>parceiros.</span></article>
                <div className={styles["depoimento-tatuador"]}>
                    <img style={{ width: '784px', height: '608px' }} src='https://img.freepik.com/fotos-gratis/tatuador-experiente-em-frente-ao-seu-estudio_23-2149479274.jpg?t=st=1716320166~exp=1716323766~hmac=f1d337769877c39951f537534132142886a406f411b5801efe00f9021a682ea7&w=996' alt="Depoimento do tatuador" />
                    <div className={styles["texto-depoimento"]}>
                        <header>Roberto Otávio de Paula, 45 anos</header>
                        <article>Proprietário do <span style={{ color: '#9333EA' }}>Tattoo House</span> - Santa Cecilia</article>
                        <span>
                            "Desde que me juntei à North Ink, minha carreira decolou! Esta plataforma revolucionária não
                            apenas
                            me conectou a uma ampla base de clientes ávidos por minha arte, mas também simplificou todo o
                            processo. Com a North Ink, tenho a liberdade de me concentrar no que faço de melhor - criar
                            tatuagens memoráveis - enquanto a plataforma me me aproxima de maneira eficaz do público. É como
                            ter
                            um assistente pessoal 24 horas por dia, 7 dias por semana, direcionando clientes de qualidade
                            até
                            minha porta. Estou verdadeiramente grato por fazer parte desta comunidade vibrante e por todo o
                            apoio que recebi da equipe da North Ink. Juntos, estamos transformando sonhos em tinta!"
                        </span>
                    </div>
                </div>
            </section>

            {/* <div className={styles["logo-final-do-site"]}>
                <img src='\src\utils\assets\logo-sem-nome.png' alt="Logo final do site" />
            </div> */}
            </div>


            <Footer />
        </>
    );
}

// Nossa logo componentizada:

function LogoImagem() {
    return (
        <img src="\src\utils\assets\logo-branca.png" alt="" />
    )
}

export default Home;