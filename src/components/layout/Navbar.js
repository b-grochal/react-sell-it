import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Drawer,
  Button,
} from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
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

        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
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
    return <span>hello</span>;
  };

  return (
    <header>
      <AppBar>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
    </header>
  );
};

export default Navbar;
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   makeStyles,
//   Button,
//   IconButton,
//   Drawer,
//   Link,
//   MenuItem,
// } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import React, { useState, useEffect } from "react";
// import { Link as RouterLink } from "react-router-dom";

// const headersData = [
//   {
//     label: "Listings",
//     href: "/listings",
//   },
//   {
//     label: "Mentors",
//     href: "/mentors",
//   },
//   {
//     label: "My Account",
//     href: "/account",
//   },
//   {
//     label: "Log Out",
//     href: "/logout",
//   },
// ];

// const useStyles = makeStyles(() => ({
//   header: {
//     backgroundColor: "#400CCC",
//     paddingRight: "79px",
//     paddingLeft: "118px",
//     "@media (max-width: 900px)": {
//       paddingLeft: 0,
//     },
//   },
//   logo: {
//     fontFamily: "Work Sans, sans-serif",
//     fontWeight: 600,
//     color: "#FFFEFE",
//     textAlign: "left",
//   },
//   menuButton: {
//     fontFamily: "Open Sans, sans-serif",
//     fontWeight: 700,
//     size: "18px",
//     marginLeft: "38px",
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   drawerContainer: {
//     padding: "20px 30px",
//   },
// }));

// const Navbar = () => {
//   const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

//   const [state, setState] = useState({
//     mobileView: false,
//     drawerOpen: false,
//   });

//   const { mobileView, drawerOpen } = state;

//   useEffect(() => {
//     const setResponsiveness = () => {
//       return window.innerWidth < 900
//         ? setState((prevState) => ({ ...prevState, mobileView: true }))
//         : setState((prevState) => ({ ...prevState, mobileView: false }));
//     };

//     setResponsiveness();

//     window.addEventListener("resize", () => setResponsiveness());

//     return () => {
//       window.removeEventListener("resize", () => setResponsiveness());
//     };
//   }, []);

//   const displayDesktop = () => {
//     return (
//       <Toolbar className={toolbar}>
//         {femmecubatorLogo}
//         <div>{getMenuButtons()}</div>
//       </Toolbar>
//     );
//   };

//   const displayMobile = () => {
//     const handleDrawerOpen = () =>
//       setState((prevState) => ({ ...prevState, drawerOpen: true }));
//     const handleDrawerClose = () =>
//       setState((prevState) => ({ ...prevState, drawerOpen: false }));

//     return (
//       <Toolbar>
//         <IconButton edge="start" color="inherit" onClick={handleDrawerOpen}>
//           <MenuIcon />
//         </IconButton>

//         <Drawer
//           {...{
//             anchor: "left",
//             open: drawerOpen,
//             onClose: handleDrawerClose,
//           }}
//         >
//           <div className={drawerContainer}>{getDrawerChoices()}</div>
//         </Drawer>

//         <div>{femmecubatorLogo}</div>
//       </Toolbar>
//     );
//   };

//   const getDrawerChoices = () => {
//     return headersData.map(({ label, href }) => {
//       return (
//         <Link
//           {...{
//             to: href,
//             color: "inherit",
//             style: { textDecoration: "none" },
//             key: label,
//           }}
//         >
//           <MenuItem>{label}</MenuItem>
//         </Link>
//       );
//     });
//   };

//   const femmecubatorLogo = (
//     <Typography variant="h6" component="h1" className={logo}>
//       Femmecubator
//     </Typography>
//   );

//   const getMenuButtons = () => {
//     return headersData.map(({ label, href }) => {
//       return (
//         <Button
//           {...{
//             key: label,
//             color: "inherit",
//             to: href,

//             className: menuButton,
//           }}
//         >
//           {label}
//         </Button>
//       );
//     });
//   };

//   return (
//     <header>
//       <AppBar className={header}>
//         {mobileView ? displayMobile() : displayDesktop()}
//       </AppBar>
//     </header>
//   );
// };

// export default Navbar;
