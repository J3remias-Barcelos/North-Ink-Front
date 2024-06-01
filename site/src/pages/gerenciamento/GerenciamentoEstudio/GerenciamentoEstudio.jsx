import React from "react";
import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
import styles from "./GerenciamentoEstudio.module.css";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

function Estudio() {
  const { register, handleSubmit, setValue, watch } = useForm();

  const checkCEP = (data) => {
    const cep = watch('cep').replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      setValue('estado', data.uf);
      setValue('cidade', data.localidade);
      setValue('bairro', data.bairro);
      setValue('rua', data.logradouro);
      setValue('numero', ''); // Clear address number field
      setValue('complemento', ''); // Clear address complement field
    });
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(checkCEP)();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SidebarGerenciamentoConta />
      <section className={styles["fora-da-sidebar"]}>
        <h1 className={styles["titulo"]}>Estúdio.</h1>
        <h3>Edite seu estúdio.</h3>

        <div>
          <label htmlFor="nomeEstudio">Nome do estúdio</label>
          <input id="nomeEstudio" type="text" {...register("nomeEstudio")} />

          <label style={{ marginTop: "10px" }} htmlFor="descricao">
            Descrição
          </label>
          <textarea
            id="descricao"
            type="text"
            placeholder="Conte-nos sobre o seu estúdio"
            {...register("descricao")}
          />
        </div>
        <h3>Edite seu endereço.</h3>

        <label htmlFor="cep">CEP</label>
        <div className={styles["ipt-cep"]}>
          <input
            style={{ width: "200px" }}
            id="cep"
            type="text"
            {...register("cep")}
            onKeyPress={handleKeyPress}
            onBlur={handleSubmit(checkCEP)}
          />
          <FaSearch onClick={handleSubmit(checkCEP)} />
        </div>

        <div className={styles["input-grupo"]}>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="rua">Rua</label>
            </div>
            <input id="rua" type="text" {...register("rua")} />
          </div>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="bairro">Bairro</label>
            </div>
            <input
              style={{ width: "200px" }}
              id="bairro"
              type="text"
              {...register("bairro")}
            />
          </div>
        </div>

        <div className={styles["input-grupo"]}>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="complemento">Complemento</label>
            </div>
            <input id="complemento" type="text" {...register("complemento")} />
          </div>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="numero">Número</label>
            </div>
            <input
              style={{ width: "200px" }}
              id="numero"
              type="text"
              {...register("numero")}
            />
          </div>
        </div>

        <div className={styles["input-grupo"]}>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="estado">Estado</label>
            </div>
            <input id="estado" type="text" {...register("estado")} />
          </div>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="cidade">Cidade</label>
            </div>
            <input
              style={{ width: "200px" }}
              id="cidade"
              type="text"
              {...register("cidade")}
            />
          </div>
        </div>
        <button className={styles["botaoPortifolioSalvarEstudio"]}>Salvar</button>
      </section>
    </div>
  );
}

export default Estudio;
