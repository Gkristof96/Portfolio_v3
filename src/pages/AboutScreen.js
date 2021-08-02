import style from "./Screen.module.css";
import Card from "../components/UI/Card";

const AboutScreen = () => {
  return (
    <Card>
      <img
        src="images/about.jpg"
        className={style.cover}
        alt="borítókép rólam"
      />
      <h1>Rólam</h1>
      <h2>Ki is vagyok én</h2>
    </Card>
  );
};

export default AboutScreen;
