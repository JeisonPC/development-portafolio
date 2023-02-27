import { useState } from "react";

import HamburguerMenu from "@/components/HamburguerMenu";
import Hamburguer from "@/components/HamburguerIcon";
import Header from "@/components/Header";

import styles from "@/styles/portfolio.module.scss";

function Portfolio() {

  return (
    <div className={styles['total-container']}>
      <Header/>
    </div>
  );
}

export default Portfolio;
