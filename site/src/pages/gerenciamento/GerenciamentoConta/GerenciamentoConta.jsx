  import React, { useState } from "react";
  import styles from "./GerenciamentoConta.module.css";
  import SidebarGerenciamentoConta from "@/components/sidebar/Sidebar";
  import { FaHome } from "react-icons/fa";
  import { useEffect } from "react";

  function GerenciamentoConta() {
    //   const [activeTab, setActiveTab] = useState(null); // Initial active tab

    //   const handleTabClick = (tabName) => {
    //     setActiveTab(tabName);
    //     const buttons = document.querySelectorAll(".button");
    //     buttons.forEach((button) => {
    //       if (button.classList.contains("hoverFixed")) {
    //         button.classList.remove("hoverFixed");
    //       }
    //     });
    //     const activeButton = document.querySelector(
    //       `.button[data-tab='${tabName}']`
    //     );
    //     activeButton.classList.add("hoverFixed");
    //   };

    //   const [loggedOut, setLoggedOut] = useState(false);

    //   const handleLogout = () => {
    //     api
    //       .post("/usuarios/logout")
    //       .then((response) => {
    //         if (response.status === 200) {
    //           setTimeout(() => {
    //             setLoggedOut(true);
    //           }, 1000);
    //         }
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //         // Aqui você pode lidar com erros de logout, se necessário
    //       });
    //   };
    //   if (loggedOut) {
    //     return <Navigate to="/login" />;
    //   }

    const [userName, setUserName] = useState('');

    useEffect(() => {
      const storedUserName = sessionStorage.getItem('userName');
      if (storedUserName) {
        setUserName(storedUserName);
      }
    }, []);

    return (
      <div style={{ display: "flex" }}>
        <SidebarGerenciamentoConta />

        <section className={styles["fora-da-sidebar"]}>
          <h1 className={styles["titulo"]}>Gerencie sua conta.</h1>
          <h3>Bem-vindo(a), {userName}</h3>
          <FaHome />
          <h3>Explore sua criatividade.</h3>
        </section>
      </div>
    );
  }
  export default GerenciamentoConta;
