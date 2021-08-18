import React from "react";
import { Button } from "@material-ui/core";

const SubmitButton = (props) => {
  const { text, size, color, variant, onClick, ...other } = props;

  return (
    <Button
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
