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
import TextArea from "../controls/TextArea";
import useForm from "../../hooks/useForm";
import Form from "../utils/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateAdvert } from "../../actions/advertActions";

const useStyles = makeStyles({
  root: {
    padding: "15px",
  },
  heading: {
    paddingBottom: "10px",
    textTransform: "uppercase",
  },
});

const UpdateAdvertForm = ({ advert }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const advertUpdate = useSelector((state) => state.advertUpdate);
  const { loading, error, success } = advertUpdate;

  const validate = (values) => {
    let temp = { ...errors };
    if ("name" in values)
      temp.name = values.name ? "" : "This field is required.";
    if ("description" in values)
      temp.description = values.description ? "" : "This field is required.";
    if ("price" in values)
      temp.price = values.price > 0 ? "" : "Price must be a positive number .";

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(
      {
        name: advert.name,
        description: advert.description,
        price: advert.price,
      },
      validate
    );

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    values.price = parseFloat(values.price);
    if (validate(values)) {
      dispatch(updateAdvert(advert.advertId, values));
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
            Update advert
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
                <TextArea
                  name="description"
                  label="Description"
                  value={values.description}
                  onChange={handleInputChange}
                  error={errors.description}
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
                  InputProps={{ inputProps: { min: 0, step: 0.01 } }}
                />
              </Grid>
              <Grid item>
                <SubmitButton type="submit" text="Update" fullWidth />
              </Grid>
            </Grid>
          </Form>
        </Paper>
      )}
    </>
  );
};

export default UpdateAdvertForm;
