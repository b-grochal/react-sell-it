import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const SellerDetails = ({ seller }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">{seller.firstName}</Typography>
      <Typography>{seller.email}</Typography>
      <Typography>{seller.phoneNumber}</Typography>
    </Paper>
  );
};

export default SellerDetails;
