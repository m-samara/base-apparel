import React from "react";
import classes from "../Home.module.css";

const Description = (props) => {
  return <div className={classes.description + " " + classes.m_50_10}>{props.description}</div>;
};

export default Description;