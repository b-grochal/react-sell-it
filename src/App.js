import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { createTheme, ThemeProvider } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: blue,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
