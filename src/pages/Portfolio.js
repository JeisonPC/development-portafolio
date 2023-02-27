import { useState } from "react";

import HamburguerMenu from "@/components/HamburguerMenu";
import Hamburguer from "@/components/HamburguerIcon";
import Header from "@/components/Header";

import styles from "@/styles/portfolio.module.scss";
import About from "@/containers/About";
import Stacks from "@/containers/Stacks";
import Proyects from "@/containers/Proyects";

function Portfolio() {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <div className={styles["total-container"]}>
          <About />
          <Stacks/>
          <Proyects/>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
