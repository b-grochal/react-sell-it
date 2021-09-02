import React, { useState, useEffect } from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import Input from "../controls/Input";
import SubmitButton from "../controls/SubmitButton";
import useForm from "../../hooks/useForm";
import Form from "../utils/Form";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../actions/userActions";
import { CompareArrowsOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";
import { USER_SIGNUP_RESET } from "../../constants/userConstants";
import LoadingScreen from "../utils/LoadingScreen";

const useStyles = makeStyles({
  root: {
    padding: "15px",
  },
  heading: {
    paddingBottom: "10px",
    textTransform: "uppercase",
  },
});

const initialValues = {
  firstName: "",
  familyName: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const classes = useStyles();

  const userSignUp = useSelector((state) => state.userSignUp);
  const { registered, loading, error } = userSignUp;
  const history = useHistory();

  const dispatch = useDispatch();

  const validate = (values) => {
    let temp = { ...errors };
    if ("firstName" in values)
      temp.firstName = values.firstName ? "" : "This field is required.";
    if ("familyName" in values)
      temp.familyName = values.familyName ? "" : "This field is required.";
    if ("phoneNumber" in values)
      temp.phoneNumber = values.phoneNumber ? "" : "This field is required.";
    if ("email" in values)
      temp.email = /$^|.+@.+..+/.test(values.email)
        ? ""
        : "Email is not valid.";
    if ("password" in values)
      temp.password =
        values.password.length != 0 ? "" : "This field is required.";
    if ("confirmPassword" in values)
      temp.confirmPassword =
        values.confirmPassword === values.password
          ? ""
          : "Passwords must match.";
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
      dispatch(
        signUpAction(
          values.firstName,
          values.familyName,
          values.phoneNumber,
          values.email,
          values.password,
          values.confirmPassword
        )
      );
    }
  };

  useEffect(() => {
    if (registered) {
      dispatch({ type: USER_SIGNUP_RESET });
      resetForm();
    }
  }, [registered]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Paper className={classes.root}>
          <Typography variant="h6" align="center" className={classes.heading}>
            Sign up
          </Typography>
          <Form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Input
                  name="firstName"
                  label="First name"
                  value={values.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Input
                  name="familyName"
                  label="Family name"
                  value={values.familyName}
                  onChange={handleInputChange}
                  error={errors.familyName}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Input
                  name="phoneNumber"
                  label="Phone number"
                  value={values.phoneNumber}
                  onChange={handleInputChange}
                  error={errors.phoneNumber}
                  fullWidth
                />
              </Grid>
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
                <Input
                  name="confirmPassword"
                  label="Confirm password"
                  value={values.confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmPassword}
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <SubmitButton type="submit" text="Sign up" fullWidth />
              </Grid>
            </Grid>
          </Form>
        </Paper>
      )}
    </>
  );
};

export default SignUpForm;
