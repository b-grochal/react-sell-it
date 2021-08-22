import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ children, ...rest }) => {
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userToken } = userSignIn;
  return (
    <Route
      {...rest}
      render={() => (userToken ? children : <Redirect to="/sign-in" />)}
    ></Route>
  );
};

export default AuthRoute;
