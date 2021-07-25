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
    </section>
  );
};

export default About;
