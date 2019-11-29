import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VerticalLinearStepper from "../../components/organisms/Stepper";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%"
  }
}));

function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <VerticalLinearStepper />
    </div>
  );
}

export default Index;
