import React from "react";
import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
import styles from "./GerenciamentoEstudio.module.css";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import api from '../../../api';

function Estudio() {
  const { register, handleSubmit, setValue, watch } = useForm();

  const checkCEP = () => {
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

  function notify(campo, mensagem) {
    if (campo === "nomeEstudio") {
      toast.error(mensagem);
    } else if (campo === "descricao") {
      toast.error(mensagem);
    } else if (campo === "cep") {
      toast.error(mensagem);
    } else if (campo === "complemento") {
      toast.error(mensagem);
    } else if (campo === "numero") {
      toast.error(mensagem);
    }
  }

  function handleSalvar() {
    const valorNomeEstudio = watch("nomeEstudio");
    const valorDescricao = watch("descricao");
    const valorCep = watch("cep");
    const valorComplemento = watch("complemento");
    const valorNumero = watch("numero");

    // Validação do nome
    const nomeValido = valorNomeEstudio.length >= 3 && valorNomeEstudio.length <= 50;
    if (!nomeValido) {
      document.getElementById("nomeEstudio").classList.add("campo-invalido");
      notify("nomeEstudio", "Nome deve ter entre 3 e 50 caracteres");
      return;
    } else {
      document.getElementById("nomeEstudio").classList.remove("campo-invalido");
    }

    // Validação da descrição
    const descricaoValida = valorDescricao.length >= 3 && valorDescricao.length <= 500;
    if (!descricaoValida) {
      document.getElementById("descricao").classList.add("campo-invalido");
      notify("descricao", "Descrição deve ter entre 3 e 500 caracteres");
      return;
    } else {
      document.getElementById("descricao").classList.remove("campo-invalido");
    }

    // Validação do CEP
    const cepValido = valorCep.length === 8 || valorCep.length === 9;
    if (!cepValido) {
      document.getElementById("cep").classList.add("campo-invalido");
      notify("cep", "CEP inválido");
      return;
    } else {
      document.getElementById("cep").classList.remove("campo-invalido");
    }

    // Validação do complemento (opcional)
    const complementoValido = valorComplemento.length <= 50;
    if (!complementoValido) {
      document.getElementById("complemento").classList.add("campo-invalido");
      notify("complemento", "Complemento deve ter até 50 caracteres");
      return;
    } else {
      document.getElementById("complemento").classList.remove("campo-invalido");
    }

    // Validação do número
    const numeroValido = valorNumero.length > 0;
    if (!numeroValido) {
      document.getElementById("numero").classList.add("campo-invalido");
      notify("numero", "Número deve estar preenchido");
      return;
    } else {
      document.getElementById("numero").classList.remove("campo-invalido");
    }

    handleSubmit(onSubmit)();
  }

  const onSubmit = (data) => {

    const jsonData = {
      nome: data.nomeEstudio,
      descricao: data.descricao,
      // cep: data.cep,
      // rua: data.rua,
      // bairro: data.bairro,
      // complemento: data.complemento,
      // numero: data.numero,
      // estado: data.estado,
      // cidade: data.cidade
    };

    console.log(jsonData);

    //mockando o id para teste
    const estudioId = 1;

    api.put(`/estudios/${estudioId}`, jsonData)
      .then((response) => {
        if (response.status === 200) {
          toast.sucess("Estúdio atualizado com sucesso!");
        }
      })
      .catch((error) => {
        toast.error("Erro ao atualizar estúdio, tente novamente!");
        console.error(error);
      });
  }

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
            <input disabled id="rua" type="text" {...register("rua")} />
          </div>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="bairro">Bairro</label>
            </div>
            <input
              disabled
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
            <input disabled id="estado" type="text" {...register("estado")} />
          </div>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="cidade">Cidade</label>
            </div>
            <input
              disabled
              style={{ width: "200px" }}
              id="cidade"
              type="text"
              {...register("cidade")}
            />
          </div>
        </div>
        <button className={styles["botaoPortifolioSalvarEstudio"]} onClick={handleSalvar}>Salvar</button>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Estudio;
