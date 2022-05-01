import React from "react";
import classes from "../Home.module.css";

const Announcement = (props) => {
  return <div className={classes.focused + " " + classes.m_50_10}>{props.announcement}</div>;
};

export default Announcement;