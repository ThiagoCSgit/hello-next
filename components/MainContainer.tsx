import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from '../styles/maincontainer.module.css'

type Props = {
    children: ReactNode
}

export default function MainContainer({children}: Props){
    return (
        <>
            <Navbar href={["/about", "/products"]} title={["Sobre", "Produtos"]} />
            <div className={styles.container}>
                {children}
            </div>
            <Footer/>
        </>
    )
}