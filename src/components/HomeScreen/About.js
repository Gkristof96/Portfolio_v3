import style from "./About.module.css";

const About = () => {
  return (
    <section className={style.about}>
      <h1 className={style.title}>Rólam</h1>
      <h2 className={style.subtitle}>Ki is vagyok én</h2>
      <div className={style["text-wrapper"]}>
        <div className={style["left-text"]}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
        </div>
        <div className={style["right-text"]}>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
          <div className={style["btn-wrapper"]}>
            <button className={style.btn}>Tudj meg többet rólam</button>
            <div className={style["inverseline"]} />
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
        <div className={style.line} />
        <button className={style["link-btn"]}>Get my cv</button>
        <div className={style.inverseline} />
      </div>
    </section>
  );
};

export default About;
