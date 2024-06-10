import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Cadastro from "./cadastro/Cadastro";
import Detalhes from "./detalhes/Detalhes";
import ListagemTatuadores from "./listagemTatuadores/ListagemTatuadores";
import NotFound from "./notFound/NotFound"
import Login from "./login/Login";
import GerenciamentoConta from "./gerenciamento/GerenciamentoConta/GerenciamentoConta"
import { ProSidebarProvider } from "react-pro-sidebar";
import Perfil from "./gerenciamento/GerenciamentoPerfil/GerenciamentoPerfil";
import Portfolio from "./gerenciamento/GerenciamentoPortfolio/GerenciamentoPortfolio";
import Estudio from "./gerenciamento/GerenciamentoEstudio/GerenciamentoEstudio";
import Destaques from "./gerenciamento/GerenciamentoDestaques/GerenciamentoDestaques";

function App(){
  return (
    <ProSidebarProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/detalhes/:idTatuador" element={<Detalhes />}/>
              <Route path="/*" element={<NotFound />} />
              <Route path="/listagem-tatuadores" element={<ListagemTatuadores/>}/>
              <Route path="/gerenciamento-conta" element={<GerenciamentoConta/>}/>
              <Route path="/gerenciamento-conta/perfil" element={<Perfil />}/>
              <Route path="/gerenciamento-conta/portfolio" element={<Portfolio />}/>
              <Route path="/gerenciamento-conta/estudio" element={<Estudio />}/>
              <Route path="/gerenciamento-conta/destaques" element={<Destaques />}/>
          </Routes>
      </BrowserRouter>
    </ProSidebarProvider>
  )
}

export default App;