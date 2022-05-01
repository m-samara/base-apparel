import React from "react";
import classes from "../Home.module.css";

const PinkInput = (props) => {
  return (
    <div className={classes.search_container}>
      <input value={props.value} name={props.name} onChange={props.handleChange} placeholder="Email Address" />
      <button onClick={props.handleSubmit}>&gt;</button>
    </div>
  );
};

export default PinkInput;
