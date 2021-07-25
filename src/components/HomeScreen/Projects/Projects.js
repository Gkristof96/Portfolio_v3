import style from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className={style.projects}>
      <h1 className={style.title}>Projektek</h1>
      <h2 className={style.subtitle}>Korábbi munkáim</h2>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <div className={style["link-wrapper"]}>
        <div className={style.line} />
        <button className={style["link-btn"]}>More projects</button>
        <div className={style.inverseline} />
      </div>
    </section>
  );
};

export default Projects;
