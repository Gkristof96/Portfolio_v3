import style from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import { projectData } from "../../../data/projects";
import GradientLine from "../../UI/GradientLine";
import LinkButton from "../../UI/Buttons/LinkButton";
import Card from "../../UI/Card";

const Projects = () => {
  return (
    <Card>
      <h1 className={style.title}>Projektek</h1>
      <h2 className={style.subtitle}>Korábbi munkáim</h2>
      <ProjectCard projectData={projectData[0]} type="left" />
      <ProjectCard projectData={projectData[1]} type="right" />
      <ProjectCard projectData={projectData[2]} type="left" />
      <div className={style["link-wrapper"]}>
        <GradientLine />
        <LinkButton path="/projects">Még több projekt</LinkButton>
        <GradientLine side="right" />
      </div>
    </Card>
  );
};

export default Projects;
