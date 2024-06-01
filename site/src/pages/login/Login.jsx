import React, { useState } from "react";
import './Login.modules.css';
import { Link, Navigate } from 'react-router-dom';
import { LuEye, LuEyeOff } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import logoBranca from '../../utils/assets/logo-preta.png'
import 'react-toastify/dist/ReactToastify.css';
import api from "../../api";
import GerenciamentoConta from "../gerenciamento/GerenciamentoConta/GerenciamentoConta";
function Login() {

    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('')

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    function notify(passou, mensagem) {
        if (passou) {
            toast.success(mensagem, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            })
        } else {
            toast.error(mensagem)
        }
    }

    const handleLogin = () => {
        // if (email === "northink@email.com" && senha === "North$") {
        //     notify(true, "Login bem sucedido!");
        //     setTimeout(() => {
        //         setLoggedIn(true);
        //     }, 1000);
        // } else {
        //     notify(false, "Email ou senha incorretos. Por favor, tente novamente.");
        // }
        const usuario = {
            email,
            senha
        }
        api.post("/usuarios/login", usuario).then((response) => {
            if (response.status === 200) {
                notify(true, "Login bem sucedido!");
                setTimeout(() => {
                    setLoggedIn(true);
                    setUserName(response.data.nome);
                }, 1000);
                console.log(response.data.token);
            }
        }).catch((error) => {
            console.error(error);
            if (error.status === 400) {
                notify(false, "Email ou senha incorretos. Por favor, tente novamente.");
            } else {
                notify(false, "Erro ao fazer login. Por favor, tente novamente.");
            }
        });
    };

    if (loggedIn) {
        return (
            <>
                <Navigate to="/gerenciamento-conta" />
                <GerenciamentoConta userName={userName} />;
            </>
        );
    }


    return (
        <div className="inicio">
            <ToastContainer className="toastContainer"
                position="top-right"
                autoClose={5000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
            <Link to='/'><span className="voltar-texto"><IoIosArrowBack size={36} />Voltar</span></Link>
            <div className="login">
                <div className="conteudo-login">
                    <img src={logoBranca}></img>
                    <span className="frase-inicial-login">Seja bem vindo.</span>
                    <div className="campo-login">
                        <label htmlFor="email">E-mail</label>
                        <input
                            placeholder="exemplo@email.com"
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="campo-login">
                        <label className="label-senha-login" htmlFor="senha">Senha {mostrarSenha ?
                            <LuEyeOff onClick={toggleMostrarSenha} id="LuEye" /> :
                            <LuEye onClick={toggleMostrarSenha} id="LuEye" />
                        }</label>
                        <input
                            placeholder="*******"
                            type={mostrarSenha ? 'text' : 'password'}
                            id="senha"
                            name="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <button className="avancar-login" onClick={handleLogin}>Entrar</button>
                    <span className="nao-tem-conta-login">Não tem uma conta? <Link to='/cadastro' className="text-purple-600">Faça seu cadastro</Link>.</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
