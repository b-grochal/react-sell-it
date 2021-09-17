import { SignalCellularNullRounded } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userToken } = userSignIn;
  return (
    <Route
      {...rest}
      render={(props) =>
        userToken ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    ></Route>
  );
};

export default AuthRoute;
