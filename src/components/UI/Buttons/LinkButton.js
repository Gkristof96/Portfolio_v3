import style from "./LinkButton.module.css";
import { Link } from "react-router-dom";

const LinkButton = (props) => {
  return (
    <Link to={props.path} className={style.btn}>
      {props.children}
    </Link>
  );
};

export default LinkButton;
