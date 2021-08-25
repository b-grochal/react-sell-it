import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const AdvertDetails = ({ advert }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">{advert.name}</Typography>
      <Typography variant="subtitle1">{`${advert.price} $`}</Typography>
      <Typography>{advert.description}</Typography>
    </Paper>
  );
};

export default AdvertDetails;
