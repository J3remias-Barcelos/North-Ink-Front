import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonIcon from "@mui/icons-material/Person";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import HomeIcon from "@mui/icons-material/Home";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { Navigate } from "react-router-dom";

function SidebarGerenciamentoConta() {
  const { collapseSidebar } = useProSidebar();
  const location = useLocation();
  const path = location.pathname;

  // Define a altura da sidebar com base no caminho atual
  let height;
  switch (path) {
    case "/gerenciamento-conta/perfil":
      height = "100vh"; // altura para o perfil
      break;
    case "/gerenciamento-conta/portfolio":
      height = "180vh"; // altura para o portfólio
      break;
    case "/gerenciamento-conta/estudio":
      height = "140vh"; // altura para o estúdio
      break;
    case "/gerenciamento-conta/destaques":
      height = "100vh"; // altura para o estúdio
      break;
    default:
      height = "100vh"; // Altura padrão
  }

  const handleLogout = () => {
    console.log('antes', sessionStorage.getItem('userId'));
    sessionStorage.removeItem('userId');
    console.log('depois', sessionStorage.getItem('userId'));
    console.log("Logout bem-sucedido");
  };

  // const handleLogout = () => {
  //   api.post("/usuarios/logout")
  //     .then((response) => {
  //       if (response.status === 200) {
  //         console.log("Logout bem-sucedido");
  //         // Remove o userId do sessionStorage
  //         sessionStorage.removeItem('userId');
  //         // Faz o redirecionamento para a tela de login após o logout bem-sucedido
  //         return <Navigate to="/login" />;
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao realizar logout:", error);
  //       // Aqui você pode lidar com erros de logout, se necessário
  //     });
  // };

  return (
    <div className={styles["container-sidebar"]} style={{ height }}>
      <Sidebar backgroundColor="#3C3C3C" className={styles["app"]}>
        <Menu
          menuItemStyles={{
            button: {
              backgroundColor: "#3C3C3C",
              color: "#fff",
              marginBottom: "30px",
              "&:hover": {
                backgroundColor: "#A855F7",
                color: "#fff",
              },
            },
          }}
        >
          <MenuItem
            onClick={() => {
              collapseSidebar();
            }}
            className={styles["menu1"]}
            icon={<MenuRoundedIcon />}
          >
            <img src="..\src\utils\assets\logo-branca.png" alt="" />
          </MenuItem>
          <MenuItem
            component={<Link to="/gerenciamento-conta/perfil" />}
            icon={<PersonIcon />}
          >
            Meu Perfil
          </MenuItem>
          <MenuItem
            component={<Link to="/gerenciamento-conta/portfolio" />}
            icon={<FeaturedPlayListIcon />}
          >
            Portfólio
          </MenuItem>
          <MenuItem
            component={<Link to="/gerenciamento-conta/estudio" />}
            icon={<HomeIcon />}
          >
            Estúdio
          </MenuItem>
          <MenuItem
            component={<Link to="/gerenciamento-conta/destaques" />}
            icon={<InsertChartIcon />}
          >
            Destaques
          </MenuItem>
          <MenuItem
            onClick={handleLogout}
            component={<Link to="/login" />}
            icon={<LogoutIcon />}
          >
            Sair
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SidebarGerenciamentoConta;