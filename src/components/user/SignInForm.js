import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Input from "../controls/Input";
import SubmitButton from "../controls/SubmitButton";
import useForm from "../../hooks/useForm";
import Form from "../utils/Form";

const useStyles = makeStyles({
  root: {
    padding: "15px",
  },
});

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const classes = useStyles();

  const validate = (values) => {
    let temp = { ...errors };
    if ("email" in values)
      temp.email = /$^|.+@.+..+/.test(values.email)
        ? ""
        : "Email is not valid.";
    if ("password" in values)
      temp.password =
        values.password.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialValues, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(values)) {
      resetForm();
    }
  };

  return (
    <Paper className={classes.root}>
      <Form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Input
              name="email"
              label="Email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Input
              name="password"
              label="Password"
              value={values.password}
              onChange={handleInputChange}
              error={errors.password}
              fullWidth
            />
          </Grid>
          <Grid item>
            <SubmitButton type="submit" text="Sign in" fullWidth />
          </Grid>
        </Grid>
      </Form>
    </Paper>
  );
};

export default SignInForm;
