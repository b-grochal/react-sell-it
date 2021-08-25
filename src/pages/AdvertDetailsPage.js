import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const AdvertDetailsPage = (props) => {
  const classes = useStyles();
  const advertId = props.match.params.id;

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <span>Adverts details {advertId}</span>;
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <span>Adverts details {advertId}</span>;
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdvertDetailsPage;
