import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    height: "96vh",
    width: "100%"
  },
  helper: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)"
  },
  errorWrapper: {
    height: "200px",
    margin: "0 auto 20px",
    textAlign: "center",
    position: "relative"
  },
  title: {
    fontFamily: "montserrat,sans-serif",
    fontSize: "236px",
    fontWeight: "200",
    margin: "0",
    color: "#211b19",
    textTransform: "uppercase",
    top: "50%",
    left: "50%"
  },
  message: {
    fontFamily: "montserrat,sans-serif",
    fontSize: "28px",
    fontWeight: "400",
    textTransform: "uppercase",
    color: "#211b19",
    background: "#fff",
    padding: "10px 5px",
    margin: "auto",
    display: "inline-block",
    position: "absolute",
    bottom: "-82px",
    left: "0",
    right: "0"
  },
  button: {
    display: "inline-block"
  }
}));
function Index(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.helper}>
        <div className={classes.errorWrapper}>
          <h1 className={classes.title}>Ooops!</h1>
          <p className={classes.message}>
            Something went wrong. Probably we just didn't found your super hero.
            Sorry! =/ But you can try again.
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.history.push("/")}
            component={Link}
            className={classes.button}
          >
            To homepage
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Index);
