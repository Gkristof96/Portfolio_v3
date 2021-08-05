import style from "./ProjectCard.module.css";
import { FaGlobeEurope, FaGithub } from "react-icons/fa";

const ProjectCard = (props) => {
  const { name, description, image, deploy_link, github_link, id } =
    props.projectData;

  let type = id % 2 === 0 ? "left" : "right";
  return (
    <div className={`${style["project-card"]} ${style[`${type}`]}`}>
      <div className={style["image-wrapper"]}>
        <img
          className={style["front-dots"]}
          src="images/small_dots.png"
          alt="small dots"
        />
        <img
          className={style["back-dots"]}
          src="images/small_dots.png"
          alt="small dots"
        />
        <img className={style["project-image"]} src={image} alt="project 1" />
      </div>

      <div className={style["text-wrapper"]}>
        <h3 className={style["project-title"]}>{name}</h3>
        <p className={style["project-description"]}>{description}</p>
        <div className={style["button-wrapper"]}>
          {deploy_link && (
            <a
              href={deploy_link}
              target="_blank"
              rel="noreferrer"
              className={style["project-button"]}
            >
              Nézd meg élőben <FaGlobeEurope className={style["button-icon"]} />
            </a>
          )}
          {github_link && (
            <a
              href={github_link}
              target="_blank"
              rel="noreferrer"
              className={style["project-button"]}
            >
              Nézd meg Github-on <FaGithub className={style["button-icon"]} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  type: "left",
};

export default ProjectCard;
