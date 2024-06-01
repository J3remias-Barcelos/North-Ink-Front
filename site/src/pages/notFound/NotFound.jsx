import React from "react";
import styles from "./NotFound.module.css";
import logo from "../../utils/assets/logo-branca.png";
import imgNotFound from "../../utils/assets/notFound.png";
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className={styles.gradientFundo}>
            <div className={styles.navBar}>
                <Link to='/'>
                    <img className={styles.logo} src={logo} alt="logo" />
                </Link>
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1 className="text-7xl text-white">Ops!</h1>
                    <h4 className="text-4xl text-white">Desculpe não 
                    <h4>encontramos essa</h4> 
                    <span class="text-black">página</span>.</h4>
                    <Link to='/'>
                        <button className={styles.button}>Ir para o site</button>
                    </Link>
                </div>
                <img className={styles.image} src={imgNotFound} alt="404" />
            </div>
        </section>
    );
}

export default NotFound;
