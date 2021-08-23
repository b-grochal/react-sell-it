import { makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AccountPage from "../../pages/AccountPage";
import AdvertsPage from "../../pages/AdvertsPage";
import HomePage from "../../pages/HomePage";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
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
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <AuthRoute path="/account">
          <AccountPage />
        </AuthRoute>
        <Route path="/adverts">
          <AdvertsPage />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
