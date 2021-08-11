import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screen/Home";
import Custom from "./screen/Custom";
import "./components/styles.css";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";
import Genre from "./screen/Genre";
import Search from "./screen/Search";
import Profile from "./screen/Profile";

export const ThemeContext = React.createContext(null);

const light = createTheme({
  // palette: {
  //   primary: blue,
  //   secondary: green,
  // },
});
const dark = createTheme({
  overrides: {
    MuiAppBar: {
      ColorPrimary: { backgroundColor: "#FFC0CB" },
    },
  },
  palette: {
    type: "dark",
  },
});

function App() {
  const [themeMode, setThemeMode] = React.useState(false);

  return (
    <ThemeContext.Provider value={setThemeMode}>
      <ThemeProvider theme={themeMode === false ? light : dark}>
        <CssBaseline />
        <Router>
          <Layout children>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/custom" component={Custom} />
              <Route exact path="/genre" component={Genre} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
