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
import ListItemLink from "../controls/ListItemLink";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import HomeIcon from "@material-ui/icons/Home";
import ListItemButton from "../controls/ListItemButton";
import ListIcon from "@material-ui/icons/List";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  logo: {
    textTransform: "uppercase !important",
  },
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
  const handleLogout = () => {
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
        <Typography variant="h6" className={classes.logo}>
          Sell It
        </Typography>
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
        <Typography className={classes.logo} variant="h6">
          Sell It
        </Typography>
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
              My Adverts
            </Button>
            <Button onClick={handleLogout} className={classes.navButton}>
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
        <ListItemLink primary="Home" to="/" icon={<HomeIcon />} />
        <ListItemLink primary="Adverts" to="/adverts" icon={<ListIcon />} />
        {userToken ? (
          <>
            <ListItemLink
              primary="My Adverts"
              to="/adverts/my-adverts"
              icon={<AccountBoxIcon />}
            />
            <ListItemButton
              primary="Log out"
              onClickHandle={handleLogout}
              icon={<ExitToAppIcon />}
            />
          </>
        ) : (
          <>
            <ListItemLink
              primary="Sign In"
              to="/sign-in"
              icon={<PersonIcon />}
            />
            <ListItemLink
              primary="Sign Up"
              to="/sign-up"
              icon={<PersonAddIcon />}
            />
          </>
        )}
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
