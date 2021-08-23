import React, { useState, useEffect } from "react";
import {
  Grid,
  LinearProgress,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Input from "../controls/Input";
import SubmitButton from "../controls/SubmitButton";
import useForm from "../../hooks/useForm";
import Form from "../utils/Form";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../actions/userActions";
import { CompareArrowsOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    padding: "15px",
  },
  heading: {
    paddingBottom: "10px",
  },
});

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const classes = useStyles();

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userToken, loading, error } = userSignIn;
  const history = useHistory();

  const dispatch = useDispatch();

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

    return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialValues, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(values)) {
      dispatch(signIn(values.email, values.password));
    }
  };

  useEffect(() => {
    if (userToken) {
      history.push("/account");
    }
  }, [userToken]);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <Paper className={classes.root}>
          <Typography variant="h6" align="center" className={classes.heading}>
            Sign in
          </Typography>
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
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <SubmitButton type="submit" text="Sign in" fullWidth />
              </Grid>
            </Grid>
          </Form>
        </Paper>
      )}
    </>
  );
};

export default SignInForm;
