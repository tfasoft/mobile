import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  colors as Colors,
} from "@mui/material";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from "./components/footer";
import Navbar from "./components/navbar";

import HomePage from "./pages/home";
import ManualPage from "./pages/manual";
import PolicyPage from "./pages/policy";

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#f8fbff",
      },
      primary: {
        main: Colors.blueGrey[500],
      }
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/manual" exact><ManualPage /></Route>
          <Route path="/policy" exact><PolicyPage /></Route>
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
