import React from "react";
import Home from "./pages/home";
import Error from "./pages/error";
import Compare from "./pages/compare";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <div className={classes.root}>
          <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route exact path={"/compare"}>
              <Compare />
            </Route>
            <Route exact path={"/error"}>
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
