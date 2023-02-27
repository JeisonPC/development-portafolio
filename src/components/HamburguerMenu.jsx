import styles from "@/styles/hamburguerMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function HamburguerMenu({ onClick, isOpen }) {
  return (
    <>
      <div className={`${styles.menuHamburger} ${isOpen ? styles.open : ""}`}>
        <div className={styles.buttonX}>
          <button onClick={onClick}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <div>Stacks</div>
        <div>Proyectos</div>
      </div>
    </>
  );
}

export default HamburguerMenu;
