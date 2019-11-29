import React from "react";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

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
          <Home />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
