import React from "react";
import styles from "./GerenciamentoPortfolio.module.css";
import imagemPerfil from "../../../utils/assets/tatuador-grid.png";
import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
import ImageUpload from "@/components/imageUpload/ImageUpload";

function Portfolio() {
  return (
    <div style={{ display: "flex" }}>
      <SidebarGerenciamentoConta />
      <section className={styles["fora-da-sidebar"]}>
        <h1 className={`${styles["titulo"]} font-poppins`}>Crie seu Portfólio.</h1>
        <h3 className="font-poppins">Sua pré-visualização de portfólio, edite crie e se inspire.</h3>

        <h4 className="font-medium text-zinc-500 mt-12 font-poppins">Edite o seu portfólio.</h4>



        <div className="flex space-x-4">
          <div className="flex">
            <div className="flex flex-col items-start bg-zinc-200 w-80 h-auto p-4 rounded-lg shadow-lg overflow-hidden border border-zinc-600">
              <div className="flex items-center mb-4">
                <img
                  src={imagemPerfil}
                  alt="Logo Branca"
                  className="w-18 h-18 rounded-full m-2"
                />
                <div className="ml-3">
                  <h2 className="text-lg font-bold font-poppins text-zinc-800">Marcela Marini</h2>
                </div>
              </div>
              <div className="flex flex-col space-y-4 w-full">
                <div className="w-full">
                  <p className="font-medium font-poppins text-zinc-800">Valor mínimo</p>
                  <input placeholder="R$ 0,00" className=" p-1 rounded font-poppins" />
                </div>
                <div className="w-full">
                  <p className="font-medium font-poppins text-zinc-800">Tempo de experiência</p>
                  <input placeholder="Anos de experiência" className=" p-1 rounded font-poppins" />
                </div>
                <div className="w-full">
                  <p className="font-medium font-poppins text-zinc-800">Bio</p>
                  <textarea placeholder="Escreva sua bio" className="w-full p-1 rounded resize-none font-poppins" rows="3"></textarea>
                </div>
                <div className="w-full">
                  <p className="font-poppins font-semibold text-zinc-800">Estilos</p>
                  <button className="bg-blue-500 text-white p-1 rounded w-full font-poppins">+ Novo Estilo</button>
                </div>
                <div className="w-full">
                  <p className="font-medium font-poppins text-zinc-800">Rede Social</p>
                  <input placeholder="Link do Instagram" className="w-full p-1 rounded font-poppins" />
                </div>
              </div>
            </div>
          </div>


          <div className="">
            <h2 className="font-medium font-poppins text-zinc-600">Anexe fotos para completar seu portfólio.</h2>

            <ImageUpload />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;