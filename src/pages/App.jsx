import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Cadastro from "./cadastro/Cadastro";
import Detalhes from "./detalhes/Detalhes";
import ListagemTatuadores from "./listagemTatuadores/ListagemTatuadores";
import NotFound from "./notFound/NotFound"
import Login from "./login/Login";
import GerenciamentoConta from "./gerenciamentoConta/GerenciamentoConta"
import { ProSidebarProvider } from "react-pro-sidebar";
import Perfil from "./GerenciamentoPerfil/GerenciamentoPerfil";
import Portfolio from "./GerenciamentoPortfolio/GerenciamentoPortfolio";
import Estudio from "./GerenciamentoEstudio/GerenciamentoEstudio";

function App(){
  return (
    <ProSidebarProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/detalhes" element={<Detalhes />}/>
              <Route path="/*" element={<NotFound />} />
              <Route path="/listagem-tatuadores" element={<ListagemTatuadores/>}/>
              <Route path="/gerenciamento-conta" element={<GerenciamentoConta/>}/>
              <Route path="/gerenciamento-conta/perfil" element={<Perfil />}/>
              <Route path="/gerenciamento-conta/portfolio" element={<Portfolio />}/>
              <Route path="/gerenciamento-conta/estudio" element={<Estudio />}/>
          </Routes>
      </BrowserRouter>
    </ProSidebarProvider>
  )
}

export default App;