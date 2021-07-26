import style from "./GradientLine.module.css";

const GradientLine = (props) => {
  return <div className={style[`${props.side}`]} />;
};

GradientLine.defaultProps = {
  side: "left",
};

export default GradientLine;
