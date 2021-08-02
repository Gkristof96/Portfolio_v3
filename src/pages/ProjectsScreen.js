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
        Itt megtalálod a korábbi projekteimet amiken dolgoztam, ezek között van
        mindenféle, egyszerű weboldal, weboldal design, vagy teljes értékű
        webalkalmazás is.
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
