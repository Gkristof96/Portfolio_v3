import style from "./ScrollImage.module.css";
import GradientLine from "../UI/GradientLine";
const ScrollImage = () => {
  return (
    <div className={style.bar}>
      <GradientLine />
      <div className={style.icon}>
        <img
          className={style.capsule}
          src="images/capsule.webp"
          alt="scroll icon frame"
        />
        <img
          className={style.dot}
          src="images/dot.webp"
          alt="scroll icon dot"
        />
      </div>
      <GradientLine side="right" />
    </div>
  );
};

export default ScrollImage;
