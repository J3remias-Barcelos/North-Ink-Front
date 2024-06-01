import React, { useState } from "react";
import styles from "./GerenciamentoPerfil.module.css";
import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useForm } from 'react-hook-form';

function Perfil() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const toggleMostrarNovaSenha = () => {
    setMostrarNovaSenha(!mostrarNovaSenha);
  };

  const { register, handleSubmit, setValue, watch } = useForm();

  function notify(campo, mensagem) {
    toast.error(mensagem);
  }

  function validaCampos() {
    const valorNome = watch("nome");
    const valorSobrenome = watch("sobrenome");
    const valorEmail = watch("email");
    const valorCelular = watch("celular");
    const valorSenha = watch("senha");
    const valorNovaSenha = watch("novaSenha");

    // Validação do nome
    const nomeValido = valorNome.length >= 3 && valorNome.length <= 20;
    if (!nomeValido) {
      document.getElementById("nome").classList.add("campo-invalido");
      notify("nome", "Nome deve ter entre 3 e 20 caracteres");
      return;
    } else {
      document.getElementById("nome").classList.remove("campo-invalido");
    }

    // Validação do sobrenome
    const sobrenomeValido = valorSobrenome.length >= 3 && valorSobrenome.length <= 30;
    if (!sobrenomeValido) {
      document.getElementById("sobrenome").classList.add("campo-invalido");
      notify("sobrenome", "Sobrenome deve ter entre 3 e 30 caracteres");
      return;
    } else {
      document.getElementById("sobrenome").classList.remove("campo-invalido");
    }

    // Validação do email
    const emailValido = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(valorEmail);
    if (!emailValido) {
      document.getElementById("email").classList.add("campo-invalido");
      notify("email", "Email inválido");
      return;
    } else {
      document.getElementById("email").classList.remove("campo-invalido");
    }

    // Validação do celular
    const celularRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    const celularValido = celularRegex.test(valorCelular);
    if (!celularValido) {
      document.getElementById("celular").classList.add("campo-invalido");
      notify("celular", "Celular inválido");
      return;
    } else {
      document.getElementById("celular").classList.remove("campo-invalido");
    }

    // Validação da senha
    const senhaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(valorSenha);
    if (!senhaValida) {
      document.getElementById("senha").classList.add("campo-invalido");
      notify("senha", "Senha deve conter no mínimo 6 caracteres, incluindo maiúsculas, minúsculas e caracteres especiais");
      return;
    } else {
      document.getElementById("senha").classList.remove("campo-invalido");
    }

    // Validação da senha
    const senhaNovaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(valorNovaSenha  );
    if (!senhaNovaValida) {
      document.getElementById("novaSenha").classList.add("campo-invalido");
      notify("novaSenha", "Senha deve conter no mínimo 6 caracteres, incluindo maiúsculas, minúsculas e caracteres especiais");
      return;
    } else {
      document.getElementById("novaSenha").classList.remove("campo-invalido");
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <SidebarGerenciamentoConta />
      <section className={styles["fora-da-sidebar"]}>
        <h1 className={styles["titulo"]}>Meu Perfil.</h1>
        <h3>Edite seu perfil.</h3>

        <div className={styles["input-grupo"]}>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="nome">Nome</label>
            </div>
            <input id="nome" type="text" {...register("nome")} />
          </div>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="sobrenome">Sobrenome</label>
            </div>
            <input id="sobrenome" type="text" {...register("sobrenome")} />
          </div>
        </div>

        <div className={styles["input-grupo"]}>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="email">Email</label>
            </div>
            <input id="email" type="text" {...register("email")} />
          </div>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="telefone">Telefone</label>
            </div>
            <InputMask mask="(99) 99999-9999" maskChar="_" type="text" id="celular" name="celular" {...register("celular")} />
          </div>
        </div>

        <div className={styles["input-grupo"]}>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="senha">
                Senha Atual
              </label>
              {mostrarSenha ? (
                <LuEyeOff onClick={toggleMostrarSenha} id="LuEye" />
              ) : (
                <LuEye onClick={toggleMostrarSenha} id="LuEye" />
              )}
            </div>
            <input type={mostrarSenha ? 'text' : 'password'} id="senha" {...register("senha")} />
          </div>
          <div className={styles["campo"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="novaSenha">
                Nova Senha
              </label>
              {mostrarNovaSenha ? (
                <LuEyeOff onClick={toggleMostrarNovaSenha} id="LuEye" />
              ) : (
                <LuEye onClick={toggleMostrarNovaSenha} id="LuEye" />
              )}
            </div>
            <input id="novaSenha" type={mostrarNovaSenha ? 'text' : 'password'} {...register("novaSenha")} />
          </div>
        </div>

        <div className={styles["botao-grupo"]}>
          <button onClick={validaCampos}>Salvar</button>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
}

export default Perfil;
