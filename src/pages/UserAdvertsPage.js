import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import UserAdvertsTable from "../components/adverts/UserAdvertsTable";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
}));

const UserAdvertsPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <UserAdvertsTable />
    </Container>
  );
};

export default UserAdvertsPage;
