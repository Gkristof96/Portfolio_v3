import style from "./ProjectCard.module.css";
import { FaGlobeEurope, FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className={style["project-card"]}>
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
        <img
          className={style["project-image"]}
          src="images/projects/project_1.webp"
          alt="project 1"
        />
      </div>

      <div className={style["text-wrapper"]}>
        <h3 className={style["project-title"]}>Gym website</h3>
        <p className={style["project-description"]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>
        <div className={style["button-wrapper"]}>
          <button className={style["project-buttons"]}>
            See live <FaGlobeEurope className={style["button-icon"]} />
          </button>
          <button className={style["project-buttons"]}>
            See Github <FaGithub className={style["button-icon"]} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
