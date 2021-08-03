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
      <div className={style["text-wrapper"]}>
        <h1>Rólam</h1>
        <h2>Ki is vagyok én</h2>
        <p>Mindig is szerettem alkotni, ez már egészen kiskoromban</p>
        <p>
          Frontend fejlesztőként a legfontosabb feladatomnak azt tartom hogy
          olyan munkákat adjak ki a kezem közül, amelyek a lehető legteljesebb
          felhasználói élményt nyújtják.
        </p>
        <h2>Mikor éppen nem programozok</h2>
        <p>
          A szabadidőmet szeretem a barátaimmal, sportolással, és új dolgok
          felfedezésével töltenni. Szerencsére ezeket együtt is tudom végezni,
          gyakran járunk kerékpártúrákra, korábban pedig fallabdázni. Ezen kívül
          szeretek olvasni, megismerni új dolgokat a világról, vagy egy jó
          történetet, valamint a gasztrónomiával is szoktam ismerkedni
          mostanában.
        </p>
      </div>
    </Card>
  );
};

export default AboutScreen;
