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
        <h2>Én mint fejlesztő</h2>
        <p>
          Ahogy korábban már írtam már egészen kiskoromtól bennem volt az
          alkotási vágy, akkor érzem jól magam, ha létrehozhatok valamit. Ez
          gyermek koromban még a rajzolást, homokvár építést, legozást, majd
          nagyobb koromban már különböző építést tervezést szimuláló játékokkal
          való foglalkozást jelentett. Felnőtként pedig egyértelműen a
          programozásban, a felhasználói felületek tervezésében találtam meg
          erre a lehetőséget.
        </p>
        <p>
          Mint frontend fejlesztő, az alapokon kívül elsősorban a React-al
          dolgoztam, a projektjeim nagyrésze is ezzel készült, így ebben a
          legmagabiztosabb a tudásom. De ezen kívül minimálisan foglalkoztam már
          Nodejs-el backend oldalon, valamint a Figma alkalmazással a tervezés
          területére is betekintettem.
        </p>
        <p>
          Frontend fejlesztőként jelenlegi legfontosabb célom, hogy olyan cégnél
          tudjak elhelyezkedni, ahol jó lehetőségeim vannak a szakmai tudásom
          fejlesztésére. Valamint, hogy olyan projekteben tudjak részt vállalni,
          amelyek valamely módon könnyebé tehetik az emberek életét, és vagy
          munkáját.
        </p>
        <h2>Mikor éppen nem programozok</h2>
        <p>
          A szabadidőmet szeretem a barátaimmal, sportolással és új dolgok
          felfedezésével tölteni. Szerencsére ezeket együtt is tudom végezni,
          gyakran járunk kerékpártúrákra, korábban pedig fallabdázni. Ezen kívül
          szeretek olvasni, megismerni új dolgokat a világról, vagy egy jó
          történetet, valamint a gasztronómiával is elkezdtem foglalkozni
          mostanában.
        </p>
      </div>
    </Card>
  );
};

export default AboutScreen;
