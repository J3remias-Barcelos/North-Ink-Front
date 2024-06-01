    import React, { useState } from 'react';
    import styles from "../../pages/gerenciamento/GerenciamentoPortfolio/GerenciamentoPortfolio.module.css";
    import { IoPersonAddSharp } from "react-icons/io5";

    const ProfileImageUploader = () => {
    const [imagemPerfil, setImagemPerfil] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagemPerfil(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };

    return (
        <div>
        <div className={styles.fotoPerfilPortifolio} onClick={() => document.getElementById('profile-image').click()}>
            {imagemPerfil ? (
            <img src={imagemPerfil} alt="Imagem de Perfil" />
            ) : (
            <IoPersonAddSharp style={{ color: '#9333EA'}} size={50} />
            )}
        </div>
        <input
            id="profile-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.hiddenInput}
        />
        </div>
    );
    };

    export default ProfileImageUploader;
