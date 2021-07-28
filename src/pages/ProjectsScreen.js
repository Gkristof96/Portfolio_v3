import ProjectCard from "../components/HomeScreen/Projects/ProjectCard";
import Card from "../components/UI/Card";
import style from "./Screen.module.css";
import { projectData } from "../data/projects";
import GradientLine from "../components/UI/GradientLine";
import LinkButton from "../components/UI/Buttons/LinkButton";

const ProjectsScreen = () => {
  return (
    <Card>
      <h1>Projektek</h1>
      <h2>Korábbi munkáim amiken dolgoztam</h2>
      <p>
        Itt néhány korábbi projektemet szedtem össze, megtalálható benne minden
        fajta projekt sima weboldal, weboldal design, fullstack megoldás, és
        sima React projektek is.
      </p>
      <div className={style["card-container"]}>
        {projectData.map((data) => (
          <ProjectCard projectData={data} key={data.id} />
        ))}
      </div>
      <div className={style["link-wrapper"]}>
        <GradientLine />
        <LinkButton path="/">Vissza a Kezdőlapra</LinkButton>
        <GradientLine side="right" />
      </div>
    </Card>
  );
};

export default ProjectsScreen;
