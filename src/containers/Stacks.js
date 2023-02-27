import styles from "@/styles/stacks.module.scss";
function Stacks() {
  return (
    <div className={styles["stacks-container"]}>
      <h2>Stacks</h2>
      <div className={styles.stacks}>
        <div>Stack1</div>
        <div>Stack2</div>
        <div>Stack3</div>
        <div>Stack4</div>
        <div>Stack5</div>
        <div>Stack6</div>
      </div>
    </div>
  );
}

export default Stacks;
