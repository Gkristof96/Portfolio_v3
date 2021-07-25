import style, { hero, name } from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={hero}>
      <div className={style["text-wrapper"]}>
        <h1 className={style["title"]}>Üdv az oldalamon</h1>
        <h2 className={style["subtitle"]}>
          én <span className={name}>Kristóf</span> vagyok
        </h2>
        <p className={style["description"]}>
          És ez az én portfolió oldalam, ide gyűjtöttem össze korábbi
          projekjeim, hogy másokhoz is eljussanak, ha azok érdeklődnek iránta.
        </p>
        <button className={style["button"]}>Scrool to my Projects</button>
      </div>
      <div className={style["image-wrapper"]}>
        <img
          className={style["small-dots"]}
          src="images/small_dots.png"
          alt="small dots"
        />
        <img
          className={style["profile-img"]}
          src="images/hero_image.png"
          alt="Me"
        />
        <img
          className={style["large-dots"]}
          src="images/large_dots.png"
          alt="large dots"
        />
      </div>
    </section>
  );
};

export default Hero;
