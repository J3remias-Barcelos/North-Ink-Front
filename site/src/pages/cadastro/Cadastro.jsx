import React, { useState } from 'react';
import './Cadastro.modules.css';
import { Link } from 'react-router-dom';
import { LuEye, LuEyeOff } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputMask from 'react-input-mask';
import api from '../../api';
import logoFooter from '../../utils/assets/logo-footer.png'
// import { Navigate } from 'node_modules/react-router-dom/dist/index';
import { Navigate } from 'react-router-dom';

function Cadastro() {
  const [mostrarPrimeiraTela, setMostrarPrimeiraTela] = useState(true);
  // const [mostrarSegundaTela, setMostrarSegundaTela] = useState(false);
  const [mostrarTerceiraTela, setMostrarTerceiraTela] = useState(false);

  const avancarPrimeiraParaTerceira = () => {
    setMostrarPrimeiraTela(false);
    setMostrarTerceiraTela(true);
  };

  // const avancarSegundaParaTerceira = () => {
  //   setMostrarSegundaTela(false);
  //   setMostrarTerceiraTela(true);
  // };

  // const voltarSegundaParaPrimeira = () => {
  //   setMostrarSegundaTela(false);
  //   setMostrarPrimeiraTela(true);
  // };

  const voltarTerceiraParaPrimeira = () => {
    setMostrarTerceiraTela(false);
    setMostrarPrimeiraTela(true);
  };

  const { register, handleSubmit, setValue, watch } = useForm();

  // const checkCEP = (data) => {
  //   const cep = data.cep.replace(/\D/g, '');
  //   console.log(cep);
  //   fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
  //     console.log(data);
  //     setValue('uf', data.uf);
  //     setValue('city', data.localidade);
  //     setValue('neighborhood', data.bairro);
  //     setValue('address', data.logradouro);
  //     setValue('addressNumber', ''); // Clear address number field
  //   });
  // }

  function notify(campo, mensagem) {
    if (campo === "nome") {
      toast.error(mensagem);
    } else if (campo === "sobrenome") {
      toast.error(mensagem);
    } else if (campo === "email") {
      toast.error(mensagem);
    } else if (campo === "cpf") {
      toast.error(mensagem);
    } else if (campo === "celular") {
      toast.error(mensagem);
    } else if (campo === "senha") {
      toast.error(mensagem);
    } else if (campo === "repita") {
      toast.error(mensagem);
    } else if (campo === "resumo") {
      toast.error(mensagem);
    } else if (campo === "estilos") {
      toast.error(mensagem);
    }
  }

  function validaCampos() {
    const valorNome = watch("nome");
    const valorSobrenome = watch("sobrenome");
    const valorEmail = watch("email");
    const valorCpf = watch("cpf");
    const valorCelular = watch("celular");
    const valorSenha = watch("senha");
    const valorRepita = watch("repita");

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

    // Validação do CPF
    const cpfValido = /^(\d{3}\.){2}\d{3}-\d{2}$|^\d{11}$/.test(valorCpf);
    if (!cpfValido) {
      // console.log(document.getElementById("cpf"));
      document.getElementById("cpf").classList.add("campo-invalido");
      notify("cpf", "CPF inválido");
      return;
    } else {
      document.getElementById("cpf").classList.remove("campo-invalido");
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

    // Validação da repetição de senha
    if (valorSenha !== valorRepita) {
      document.getElementById("repita").classList.add("campo-invalido");
      notify("repita", "As senhas não coincidem");
      return;
    } else {
      document.getElementById("repita").classList.remove("campo-invalido");
    }

    // Se passou por todas as validações, avança para a próxima etapa
    avancarPrimeiraParaTerceira();
  }

  const [estilosSelecionados, setEstilosSelecionados] = useState([]);

  const handleEstiloChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setEstilosSelecionados([...estilosSelecionados, value]);
    } else {
      setEstilosSelecionados(estilosSelecionados.filter(item => item !== value));
    }
  };

  function handleConcluir() {
    const valorResumo = watch("resumo");

    const resumoValido = valorResumo.length <= 500 && valorResumo.length >= 50;
    if (!resumoValido) {
      document.getElementById("resumo").classList.add("campo-invalido");
      notify("resumo", "O resumo deve ter entre 50 e 500 caracteres");
      return;
    } else {
      document.getElementById("resumo").classList.remove("campo-invalido");
    }

    if (estilosSelecionados.length === 0) {
      notify("estilos", "Escolha pelo menos um estilo");
      return;
    }

    console.log("Estilos selecionados:", estilosSelecionados);

    handleSubmit(onSubmit)();
  }

  const onSubmit = (data) => {

    // Remover caracteres não numéricos do CPF e do celular
    const cpfLimpo = data.cpf.replace(/\D/g, '');
    const celularLimpo = data.celular.replace(/\D/g, '');

    const jsonData = {
      nome: data.nome,
      sobrenome: data.sobrenome,
      email: data.email,
      cpf: cpfLimpo,
      celular: celularLimpo,
      senha: data.senha,
      resumo: data.resumo,
      estilos: estilosSelecionados
    };

    console.log(jsonData);
    toast.success("Cadastro realizado com sucesso!");

    setTimeout(() => {
     <Navigate to="/login" />;
    }, 1500);


    // api.post("/usuarios", jsonData).then((response) => {
    //   console.log(response)
    //   if (response.status === 201) {
    //     toast.success("Cadastro realizado com sucesso!");
    //   }
    // }).catch(() => {
    //   toast.error("Erro ao realizar cadastro, tente novamente!");
    //   console.error(response);
    // })
  }

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const [mostrarRepitaSenha, setMostrarRepitaSenha] = useState(false);

  const toggleMostrarRepitaSenha = () => {
    setMostrarRepitaSenha(!mostrarRepitaSenha);
  };

  return (
    <div className="inicio">
      <Link to='/'>
        <span className="voltar-texto"><IoIosArrowBack size={30} />Voltar</span>
      </Link>
      <ToastContainer className="toastContainer" />
      <div>
        <div className={`modal ${mostrarPrimeiraTela ? '' : 'oculto'}`}>
          {/* Conteúdo da primeira tela */}
          <div className="conteudo-modal">
            <div className="barra-progresso">
              <div className="progresso"></div>
            </div>
            <span className="frase-inicial">Se torne um tatuador parceiro.</span>
            <div className="linha"></div>
            <div className="nome-sobrenome">
              <div className="campo">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" {...register("nome")} />
              </div>
              <div className="campo">
                <label htmlFor="sobrenome">Sobrenome</label>
                <input type="text" id="sobrenome" name="sobrenome" {...register("sobrenome")} />
              </div>
            </div>
            <div className="email">
              <div className="campo">
                <label htmlFor="email">E-mail</label>
                <input placeholder="exemplo@email.com" type="text" id="email" name="email" {...register("email")} />
              </div>
            </div>
            <div className="nome-sobrenome">
              <div className="campo">
                <label htmlFor="CPF">CPF</label>
                <InputMask mask="999.999.999-99" maskChar="_" placeholder="123.456.789-09" type="text" id="cpf" name="CPF" {...register("cpf")} />
              </div>
              <div className="campo">
                <label htmlFor="celular">Celular</label>
                <InputMask mask="(99) 99999-9999" maskChar="_" placeholder="(DDD) Celular" type="text" id="celular" name="celular" {...register("celular")} />
              </div>
            </div>
            <div className="nome-sobrenome">
              <div className="campo">
                <label className='label-senha' htmlFor="senha">Senha
                  {mostrarSenha ?
                    <LuEyeOff onClick={toggleMostrarSenha} id="LuEye" /> :
                    <LuEye onClick={toggleMostrarSenha} id="LuEye" />
                  }
                </label>
                <input
                  placeholder="Mínimo 6 caracteres"
                  type={mostrarSenha ? 'text' : 'password'}
                  id="senha"
                  name="senha"
                  {...register("senha")}
                />
              </div>

              <div className="campo">
                <label className='label-senha' htmlFor="repita">Repita a senha
                  {mostrarRepitaSenha ?
                    <LuEyeOff onClick={toggleMostrarRepitaSenha} id="LuEye" /> :
                    <LuEye onClick={toggleMostrarRepitaSenha} id="LuEye" />
                  }
                </label>
                <input
                  placeholder="Mínimo 6 caracteres"
                  type={mostrarRepitaSenha ? 'text' : 'password'}
                  id="repita"
                  name="repita"
                  {...register("repita")}
                />
              </div>
            </div>
            <button className="avancarCadastro" onClick={validaCampos}>Próximo</button>

          </div>
        </div>

        {/* <div className={`modal-2 ${mostrarSegundaTela ? '' : 'oculto'}`}>
          {/* Conteúdo da segunda tela }
          <div className="conteudo-modal">
            <div className="barra-progresso-2">
              <div className="progresso-2"></div>
            </div>
            <span className="frase-inicial">Conte um pouco da sua história</span>
            <div className="linha-2"></div>

            <div className="input-100">
              <label htmlFor="nome-estudio">Onde você trabalha?</label>
              <input placeholder="Nome do estúdio" type="text" {...register("nomeEstudio")} />
            </div>

            <span className="endereco">Endereço do estúdio</span>

            <span className="span-cep">CEP</span>
            <div className="ipt-cep">
              <input id="cep" type="text" onBlur={handleSubmit(checkCEP)} {...register("cep")} />
              <FaSearch onClick={handleSubmit(checkCEP)} />
            </div>

            <div className="estado-cidade">
              <div className="estado">
                <label htmlFor="estado">Estado</label>
                <input id="estado" type="text" {...register("uf")} />
              </div>
              <div className="cidade">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" type="text" {...register("city")} />
              </div>
            </div>

            <div className="bairro-rua">
              <div className="bairro">
                <label htmlFor="bairro">Bairro</label>
                <input id="bairro" type="text" {...register("neighborhood")} />
              </div>
              <div className="rua">
                <label htmlFor="rua">Rua</label>
                <input id="rua" type="text" {...register("address")} />
              </div>
            </div>

            <div className="numero-complemento">
              <div className="numero">
                <label htmlFor="numero">Número</label>
                <input id="numero" type="text" {...register("addressNumber")} />
              </div>
              <div className="complemento">
                <label htmlFor="complemento">Complemento</label>
                <input id="complemento" type="text" />
              </div>
            </div>

            <button className="avancar-2" onClick={avancarSegundaParaTerceira}>Avançar</button>
            <span id='voltar' onClick={voltarSegundaParaPrimeira}>Voltar</span>
          </div>
        </div> */}

        <div className={`modal ${mostrarTerceiraTela ? '' : 'oculto'}`}>
          {/* Conteúdo da terceira tela */}
          <div className="conteudo-modal">
            <div className="barra-progresso">
              <div className="progresso-3"></div>
            </div>
            <span className="frase-inicial">Para as pessoas te conhecerem.</span>
            <div className="linha"></div>
            <span className="msg-3-tela">Quais seus estilos preferidos para trabalhar?</span>
            <div className="opcoesCadastro">
              <div className="colunaCadastro">

                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="oldSchool" name="oldSchool" value="Old School" onChange={handleEstiloChange} />
                  <label htmlFor="oldSchool">Old School</label><br />
                </div>

                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="newSchool" name="newSchool" value="New School" onChange={handleEstiloChange} />
                  <label htmlFor="newSchool">New School</label><br />
                </div>

                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="realismo" name="realismo" value="Realismo" onChange={handleEstiloChange} />
                  <label htmlFor="realismo">Realismo</label><br />
                </div>

                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="aquarela" name="aquarela" value="Aquarela" onChange={handleEstiloChange} />
                  <label htmlFor="aquarela">Aquarela</label><br />
                </div>
              </div>
              <div className="colunaCadastro">

                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="blackwork" name="blackwork" value="Blackwork" onChange={handleEstiloChange} />
                  <label htmlFor="blackwork">Blackwork</label><br />
                </div>

                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="minimalismo" name="minimalismo" value="Minimalismo" onChange={handleEstiloChange} />
                  <label htmlFor="minimalismo">Minimalismo</label><br />
                </div>

                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="lettering" name="lettering" value="Lettering" onChange={handleEstiloChange} />
                  <label htmlFor="lettering">Lettering</label><br />
                </div>

                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="geometrico" name="geometrico" value="Geométrico" onChange={handleEstiloChange} />
                  <label htmlFor="geometrico">Geométrico</label><br />
                </div>
              </div>
              <div className="colunaCadastro">

                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="pontilhismo" name="pontilhismo" value="Pontilhismo" onChange={handleEstiloChange} />
                  <label htmlFor="pontilhismo">Pontilhismo</label><br />
                </div>


                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="neoTraditional" name="neoTraditional" value="Neo Traditional" onChange={handleEstiloChange} />
                  <label htmlFor="neoTraditional">Neo Traditional</label><br />
                </div>


                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="oriental" name="oriental" value="Oriental" onChange={handleEstiloChange} />
                  <label htmlFor="oriental">Oriental</label><br />
                </div>

                <div className="checkOpcaoCadastro">
                  <input type="checkbox" id="trashPolka" name="trashPolka" value="Trash Polka" onChange={handleEstiloChange} />
                  <label htmlFor="trashPolka">Trash Polka</label><br />
                </div>
              </div>
            </div>
            <span className="msg-3-tela">Nos conte um pouco sobre você.</span>
            <span className="label-textarea">Fale aqui sobre seu resumo profissional, tempo de atuação, história de vida...</span>
            <textarea className="bioCadastro" id="resumo" name="resumo" rows="6" cols="65" {...register("resumo")}></textarea>
            <div className="botoesVoltarAvancarCadastro">
            <button className="voltarCadastro" onClick={voltarTerceiraParaPrimeira}>Voltar</button>
              <button className="concluirCadastro" onClick={handleConcluir}>Concluir</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
