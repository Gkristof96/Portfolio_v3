import style from "./ScrollImage.module.css";

const ScrollImage = () => {
  return (
    <div className={style.bar}>
      <div className={style.line} />
      <div className={style.icon}>
        <img
          className={style.capsule}
          src="images/capsule.png"
          alt="scroll icon frame"
        />
        <img className={style.dot} src="images/dot.png" alt="scroll icon dot" />
      </div>
      <div className={style.inverseline} />
    </div>
  );
};

export default ScrollImage;
