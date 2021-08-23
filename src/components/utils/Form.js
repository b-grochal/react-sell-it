import React from "react";

const Form = (props) => {
  const { children, ...other } = props;
  return (
    <form autoComplete="off" {...other}>
      {props.children}
    </form>
  );
};

export default Form;
