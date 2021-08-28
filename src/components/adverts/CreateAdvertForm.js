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
import { createAdvert } from "../../actions/advertActions";
import { useHistory } from "react-router";

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
  name: "",
  description: "",
  price: 0,
};

const CreateAdvertForm = () => {
  const classes = useStyles();

  const advertCreate = useSelector((state) => state.advertCreate);
  const { success, loading, error } = advertCreate;
  const history = useHistory();
  const dispatch = useDispatch();

  const validate = (values) => {
    let temp = { ...errors };
    if ("name" in values)
      temp.name = values.name ? "" : "This field is required.";
    if ("description" in values)
      temp.description = values.description ? "" : "This field is required.";
    if ("price" in values)
      temp.price = values.price < 0 ? "" : "Price must be a positive number .";

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
      dispatch(createAdvert(values));
    }
  };

  useEffect(() => {
    if (success) {
      resetForm();
    }
  }, [success]);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <Paper className={classes.root}>
          <Typography variant="h6" align="center" className={classes.heading}>
            Create advert
          </Typography>
          <Form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Input
                  name="name"
                  label="Name"
                  value={values.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Input
                  name="price"
                  label="Price"
                  value={values.price}
                  onChange={handleInputChange}
                  error={errors.price}
                  fullWidth
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </Grid>
              <Grid item>
                <SubmitButton type="submit" text="Create" fullWidth />
              </Grid>
            </Grid>
          </Form>
        </Paper>
      )}
    </>
  );
};

export default CreateAdvertForm;
