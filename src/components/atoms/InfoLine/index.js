import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    boxPack: "justify",
    justifyContent: "space-between",
    boxAlign: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    padding: "0.75rem 0px 0.375rem",
    borderBottom: "1px solid rgb(68, 68, 68)"
  },
  key: {
    margin: "0",
    fontSize: "0.7rem",
    fontWeight: "400",
    color: "rgb(158, 158, 158)"
  },
  value: {
    width: "100%",
    color: "rgb(255, 152, 0)",
    fontSize: "0.9rem",
    fontWeight: "200",
    textAlign: "right",
    padding: "0px",
    margin: "0px"
  }
}));

export default function InfoLine(props) {
  const classes = useStyles();
  const key = props.keyName;
  const value = !!props.statValeu ? props.statValeu : "unknown";

  return (
    <div className={classes.root}>
      <span className={classes.key}>{key}</span>
      <p className={classes.value}>{value}</p>
    </div>
  );
}
