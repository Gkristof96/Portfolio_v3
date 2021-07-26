import LinkButton from "../UI/Buttons/LinkButton";
import GradientLine from "../UI/GradientLine";
import Card from "../UI/Card";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <Card>
      <h1 className={style.title}>Kapcsolat</h1>
      <h2 className={style.subtitle}>Ha tetszet amit láttál írj egy levelet</h2>
      <p className={style.description}>
        Ehhez nincs más dolgod mint az itt található gombra kattintani, és máris
        megtalálod az elérhetőségeimet, vagy lehetőséged van közvezlenül innen
        írni nekem egy emailt az erre a célra kialakitott űrlap segítségével
      </p>
      <div className={style["link-wrapper"]}>
        <GradientLine />
        <LinkButton path="/contact">Írj nekem</LinkButton>
        <GradientLine side="right" />
      </div>
    </Card>
  );
};

export default Contact;
