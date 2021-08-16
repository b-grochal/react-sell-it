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

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawer: {
    width: 250,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

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

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

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
        >
          <div>{getDrawerLinks()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getMenuButtons = () => {
    return (
      <>
        <Button>Home</Button>
        <Button>Adverts</Button>
        <Button>My Account</Button>
        <Button>Log Out</Button>
        <Button>Sign in</Button>
        <Button>Sign up</Button>
      </>
    );
  };

  const getDrawerLinks = () => {
    return (
      <List>
        <ListItemLink
          primary="Hello"
          to=""
          icon={<HelpOutline />}
        ></ListItemLink>
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
