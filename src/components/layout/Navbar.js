import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Drawer,
  Button,
  List,
} from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import ListItemLink from "../utils/ListItemLink";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawer: {
    width: 250,
  },
  drawerPaper: {
    width: 250,
  },
  navButton: {
    color: "#ffffff",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userToken } = userSignIn;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    history.push("/");
    dispatch(logout());
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Sell It</Typography>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const displayMobile = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Sell It</Typography>
        <IconButton edge="start" color="inherit" onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>

        <Drawer
          className={classes.drawer}
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          classes={{ paper: classes.drawerPaper }}
        >
          <div>{getDrawerLinks()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getMenuButtons = () => {
    return (
      <>
        <Button component={Link} to="/" className={classes.navButton}>
          Home
        </Button>
        <Button component={Link} to="/adverts" className={classes.navButton}>
          Adverts
        </Button>
        {userToken ? (
          <>
            <Button
              component={Link}
              to="/adverts/my-adverts"
              className={classes.navButton}
            >
              My Account
            </Button>
            <Button
              component={Link}
              onClick={logoutHandler}
              className={classes.navButton}
            >
              Log Out
            </Button>
          </>
        ) : (
          <>
            <Button
              component={Link}
              to="/sign-in"
              className={classes.navButton}
            >
              Sign in
            </Button>
            <Button
              component={Link}
              to="/sign-up"
              className={classes.navButton}
            >
              Sign up
            </Button>
          </>
        )}
      </>
    );
  };

  const getDrawerLinks = () => {
    return (
      <List onClick={handleDrawerClose}>
        <ListItemLink primary="Home" to="/" icon={<HelpOutline />} />
        <ListItemLink primary="Adverts" to="/adverts" icon={<HelpOutline />} />
        <ListItemLink primary="Account" to="/account" icon={<HelpOutline />} />
        <ListItemLink primary="Log Out" to="/" icon={<HelpOutline />} />
        <ListItemLink primary="Sign In" to="/sign-in" icon={<HelpOutline />} />
        <ListItemLink primary="Sign Up" to="/sign-up" icon={<HelpOutline />} />
      </List>
    );
  };

  return (
    <AppBar position="sticky">
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

export default Navbar;
