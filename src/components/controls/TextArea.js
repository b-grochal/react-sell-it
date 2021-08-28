import React from "react";
import { TextField } from "@material-ui/core";
import { Input } from "@material-ui/icons";

const TextArea = (props) => {
  const { name, label, value, error = null, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      multiline
      rows={5}
      rowsMax={10}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default TextArea;
