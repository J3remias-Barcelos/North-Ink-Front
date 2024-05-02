import React from "react";
import styles from './Detalhes.module.css';
import logoBranca from '../../utils/assets/logo-branca.png';
import imagemPerfil from '../../utils/assets/tatuador-grid.png';
import { PiUserCircleLight, PiInstagramLogoThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge"
import { AiOutlineLeft, AiOutlineShareAlt } from "react-icons/ai";

function Detalhes() {
    return (
        <section className={styles["section-detalhes"]}>
            <header className={styles["header-detalhes"]}>
                <img src={logoBranca} alt="Logo" />
                <span className={styles.titulo}>Conheça o <span className="text-white">artista</span>.</span>
                <div>
                    <Link className={styles["botao-login"]} to='/login'>
                        <PiUserCircleLight size={40}/> Sou um Tatuador
                    </Link>
                </div>
            </header>

            <article className={styles["informacoes"]}>
                <div className={styles["botoes-informacoes"]}>
                    <Button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full mt-5">
                        <AiOutlineLeft className="text-xl" />
                    </Button>

                    <Button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full mt-5">
                        <AiOutlineShareAlt className="text-xl" />
                    </Button>
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex">
                        <img src={imagemPerfil} alt="Logo Branca" className="w-16 mb-4 rounded-full m-2 mt-9 ml-5" />
                        <div className="ml-3 mt-10">
                            <h2 className="text-lg font-bold">Jeremy Barcelos</h2>
                            <div className="flex items-center">
                                <span className="bg-green-500 rounded-full block w-2 h-2 mr-1"></span>
                                <p className="text-sm">Disponível</p>
                            </div>
                        </div>
                    </div>
                    <Button className="bg-purple-600 text-white mt-4 ml-5 mb-8 h-11 hover:bg-purple-700">
                        Entrar em Contato
                    </Button>
                    <div className="mt-12 ml-5">
                        <h3 className="text-xl font-semibold mb-6">Bio</h3>
                        <p className="text-sm text-justify w-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className={styles["instagram"]}>
                        <div className="flex space-x-44">
                            <h2 className="text-ml">Instagram</h2>
                            <PiInstagramLogoThin />
                        </div>
                        <div className={styles["linha-detalhes"]}></div>
                    </div>
                </div>
                <div className="mt-2">
                    <h2 className="text-xl ml-5 mt-10 font-semibold">Estilos</h2>
                    <div className="grid grid-cols-3 gap-7 p-1 ml-4 mt-4 mr-5">
                        <Badge variant="default" className="bg-zinc-300 border-gray-600 hover:bg-zinc-300 text-black flex items-center justify-center">Black Work</Badge>
                        <Badge variant="default" className="bg-zinc-300 border-gray-600 hover:bg-zinc-300 text-black flex items-center justify-center">Black Work</Badge>
                        <Badge variant="default" className="bg-zinc-300 border-gray-600 hover:bg-zinc-300 text-black flex items-center justify-center">Black Work</Badge>
                        <Badge variant="default" className="bg-zinc-300 border-gray-600 hover:bg-zinc-300 text-black flex items-center justify-center">Black Work</Badge>
                    </div>
                </div>

                <div className="mt-2">
                    <h2 className="text-xl ml-5 mt-12 font-semibold">Preços</h2>
                    <div className={styles["valores"]}>
                        <div className={styles["box-valores"]}>
                            <span>Valor da Hora</span>
                            <h2>R$ 100</h2>
                        </div>
                        <div className={styles["box-valores"]}>
                            <span>Preço Mínimo</span>
                            <h2>R$ 900</h2>
                        </div>
                    </div>
                    <div className={styles["linha-detalhes-dois"]}></div>
                </div>
                <h2 className="text-xl font-semibold mt-8 ml-5">Ambiente de Trabalho</h2>
                <div className={styles["estudio-detalhes"]}>
                    <img src={imagemPerfil} alt="Logo Branca" className="w-16 mb-4 rounded-full m-2 mt-8 ml-5 mr-4" />
                    <div className={styles["endereco-estudio-detalhes"]}>
                        <h3 className="mt-7 text-xl font-semibold">King Tatto</h3>
                        <p className="text-sm font-medium">Endereço da rua, 123 - Consolação, São Paulo - SP</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Detalhes;
