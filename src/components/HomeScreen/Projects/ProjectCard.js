import style from "./ProjectCard.module.css";
import { FaGlobeEurope, FaGithub } from "react-icons/fa";

const ProjectCard = (props) => {
  const { name, description, image, deploy_link, github_link } =
    props.projectData;
  return (
    <div className={`${style["project-card"]} ${style[`${props.type}`]}`}>
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
          <a
            href={deploy_link}
            target="_blank"
            rel="noreferrer"
            className={style["project-button"]}
          >
            See live <FaGlobeEurope className={style["button-icon"]} />
          </a>
          <a
            href={github_link}
            target="_blank"
            rel="noreferrer"
            className={style["project-button"]}
          >
            See Github <FaGithub className={style["button-icon"]} />
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  type: "left",
};

export default ProjectCard;
