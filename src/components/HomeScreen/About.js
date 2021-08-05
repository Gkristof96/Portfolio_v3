import GradientLine from "../UI/GradientLine";
import style from "./About.module.css";
import LinkButton from "../UI/Buttons/LinkButton";
import Card from "../UI/Card";

const About = () => {
  return (
    <Card>
      <h1 className={style.title}>Rólam</h1>
      <h2 className={style.subtitle}>Ki vagyok én</h2>
      <div className={style["text-wrapper"]}>
        <div className={style["left-text"]}>
          <p>
            Már egészen kiskoromtól jelen volt bennem az alkotási vágy, mindig
            azokkal a játékokkal tudtam a legjobban szórakozni, amikben valami
            újat tudtam létrehozni. Az informatikával is már viszonylag korán
            találkoztam, informatika szakos szakközépbe jártam és innen
            Mérnökinformatika szakra mentem a Győri Széchenyi István egyetemre.
            Ebből a két ágból összefonva kerültem a frontend fejlesztési
            területre. Az egyetem mellett igyekeztem magam tovább fejleszteni és
            kipróbálni magam minél több technológiában. Így ismerkedtem meg a
            Nodejs-el a React-al és még sok kisebb nagyobb technológiával.
          </p>
        </div>
        <div className={style["right-text"]}>
          <p>
            Mint frontend fejlesztő legfontosabb feladatomnak azt tartom hogy
            olyan munkákat adjak ki a kezeim közül, amely teljesen megfelel a
            felhasználók igényeinek, egyaránt kényelmes azok használata, de
            emellett nem nélkülözi az igényes megjelenést.
          </p>
          <div className={style["btn-wrapper"]}>
            <GradientLine />
            <LinkButton path="about">Tudj meg többet rólam</LinkButton>
            <GradientLine side="right" />
          </div>
        </div>
      </div>
      <h2 className={style["tech-title"]}>Tech Stack</h2>
      <div className={style["logo-bar"]}>
        <img
          className={style["tech-logo"]}
          src="images/tech_logos/html5.png"
          alt="html5_logo"
        />
        <img
          className={style["tech-logo"]}
          src="images/tech_logos/css3.png"
          alt="css3_logo"
        />
        <img
          className={style["tech-logo"]}
          src="images/tech_logos/javascript.png"
          alt="javascript_logo"
        />
        <img
          className={style["tech-logo"]}
          src="images/tech_logos/react.png"
          alt="react_logo"
        />
        <img
          className={style["tech-logo"]}
          src="images/tech_logos/sass.png"
          alt="sass_logo"
        />
        <img
          className={style["tech-logo"]}
          src="images/tech_logos/figma.png"
          alt="figma_logo"
        />
      </div>
      <div className={style["link-wrapper"]}>
        <GradientLine />
        <a
          className={style.btn}
          target="_blank"
          href="documents/gerencser_kristof_cv.pdf"
        >
          Önéletrajz
        </a>
        <GradientLine side="right" />
      </div>
    </Card>
  );
};

export default About;
