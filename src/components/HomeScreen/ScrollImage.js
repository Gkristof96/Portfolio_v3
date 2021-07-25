import style from "./ScrollImage.module.css";

const ScrollImage = () => {
  return (
    <div className={style.bar}>
      <div className={style.line} />
      <div className={style.icon}>
        <img className={style.capsule} src="images/capsule.png" />
        <img className={style.dot} src="images/dot.png" />
      </div>
      <div className={style.inverseline} />
    </div>
  );
};

export default ScrollImage;
