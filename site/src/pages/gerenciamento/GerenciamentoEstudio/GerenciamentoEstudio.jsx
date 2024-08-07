import React, { useState, useEffect } from "react";
import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
import styles from "./GerenciamentoEstudio.module.css";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import api from '../../../api';

function Estudio() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [userId, setUserId] = useState(null);
  const [estudioId, setEstudioId] = useState(null); // Estado para guardar o ID do estúdio criado

  const checkCEP = () => {
    const cep = watch('cep').replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        setValue('estado', data.uf);
        setValue('cidade', data.localidade);
        setValue('bairro', data.bairro);
        setValue('rua', data.logradouro);
        setValue('numero', '');
        setValue('complemento', '');
      });
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(checkCEP)();
    }
  };

  function notify(campo, mensagem) {
    toast.error(mensagem);
    document.getElementById(campo).classList.add("campo-invalido");
  }

  function handleSalvar(data) {
    const nomeEstudio = data.nomeEstudio;
    const descricao = data.descricao;
    const cep = data.cep;
    const complemento = data.complemento;
    const numero = data.numero;

    // Validação dos campos
    if (nomeEstudio.length < 3 || nomeEstudio.length > 50) {
      return notify("nomeEstudio", "Nome deve ter entre 3 e 50 caracteres");
    }
    if (descricao.length < 3 || descricao.length > 500) {
      return notify("descricao", "Descrição deve ter entre 3 e 500 caracteres");
    }
    if (cep.length !== 8 && cep.length !== 9) {
      return notify("cep", "CEP inválido");
    }
    if (complemento.length > 50) {
      return notify("complemento", "Complemento deve ter até 50 caracteres");
    }
    if (numero.length === 0) {
      return notify("numero", "Número deve estar preenchido");
    }

    api.post(`/estudios`, { nome: nomeEstudio, descricao, fkUsuario: userId })
      .then((response) => {
        if (response.status === 201) {
          const estudioData = response.data;
          setEstudioId(estudioData.id); // Guarda o ID do estúdio no estado
          sessionStorage.setItem('estudioId', estudioData.id); // Guarda o ID do estúdio no sessionStorage
          toast.success("Estúdio criado com sucesso!");

          // Aguarda meio segundo antes de salvar o endereço
          setTimeout(() => {
            console.log("Salvando endereço...");
            salvarEndereco(data);
          }, 500);
        }
      })
      .catch((error) => {
        toast.error("Erro ao criar estúdio, tente novamente!");
        console.error(error);
      });
  }

  const salvarEndereco = (data) => {
    const { rua, numero, complemento, cep, bairro, cidade, estado } = data;

    const enderecoData = {
      rua,
      numero: parseInt(numero), // Converte para número inteiro
      complemento,
      cep,
      bairro,
      cidade,
      estado,
      fkEstudio: estudioId || sessionStorage.getItem('estudioId') // Utiliza o ID do estúdio guardado
    };

    api.post(`/enderecos`, enderecoData)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Endereço salvo com sucesso!");
        }
      })
      .catch((error) => {
        toast.error("Erro ao salvar endereço, tente novamente!");
        console.error(error);
      });
  }

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    setUserId(storedUserId);
  }, []);

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
        <button className={styles["botaoPortifolioSalvarEstudio"]} onClick={handleSubmit(handleSalvar)}>Salvar</button>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Estudio;
