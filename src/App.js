import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import CustomSnackbar from "./components/utils/CustomSnackbar";
import ConfirmationDialog from "./components/utils/ConfirmationDialog";

const theme = createTheme({
  palette: {
    primary: blue,
  },
});

// const useStyles = makeStyles((theme) => ({
//   main: {
//     flex: "1 0 auto",
//   },
//   footer: {
//     flexShrink: "0"
//   }
// }))

function App() {
  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CustomSnackbar />
        <ConfirmationDialog />
        <Navbar />
        <Main />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
