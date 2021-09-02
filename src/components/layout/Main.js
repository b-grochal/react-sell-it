import { makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AccountPage from "../../pages/AccountPage";
import AdvertDetailsPage from "../../pages/AdvertDetailsPage";
import AdvertsPage from "../../pages/AdvertsPage";
import CreateAdvertPage from "../../pages/CreateAdvertPage";
import HomePage from "../../pages/HomePage";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
import UpdateAdvertPage from "../../pages/UpdateAdvertPage";
import UserAdvertsPage from "../../pages/UserAdvertsPage";
import AuthRoute from "../../utils/AuthRoute";

const useStyles = makeStyles((theme) => ({
  main: {
    flex: "1 0 auto",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <AuthRoute path="/adverts/my-adverts" component={UserAdvertsPage} />
        <AuthRoute path="/adverts/create" component={CreateAdvertPage} />
        <AuthRoute path="/adverts/:id/update" component={UpdateAdvertPage} />
        <Route path="/adverts" exact component={AdvertsPage} />
        <Route path="/adverts/:id" component={AdvertDetailsPage} />
      </Switch>
    </main>
  );
};

export default Main;
