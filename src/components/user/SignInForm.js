import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Input from "../controls/Input";
import SubmitButton from "../controls/SubmitButton";
import useForm from "../../hooks/useForm";
import Form from "../utils/Form";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
  },
});

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Form>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Input name="email" label="Email" />
          </Grid>
          <Grid item>
            <Input name="password" label="Password" />
          </Grid>
          <Grid item>
            <SubmitButton type="submit" text="Sign in" />
          </Grid>
        </Grid>
      </Form>
    </Paper>
  );
};

export default SignInForm;
