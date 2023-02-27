import { useState } from "react";
import HamburguerMenu from "./HamburguerMenu";
import Logo from "@/components/Logo";
import styles from "@/styles/Header.module.scss";
import HamburguerIcon from "./HamburguerIcon";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <HamburguerIcon onClick={toggleMenu} />
      </header>
      <HamburguerMenu isOpen={isOpen} onClick={toggleMenu} />
    </>
  );
}

export default Header;
