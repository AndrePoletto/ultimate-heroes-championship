import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  StepContent
} from "@material-ui/core";
import SelectStep from "../../molecules/SelectStep";
import HeroesNames from "../../atoms/HeroesNames";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "2rem"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  }
}));

function getSteps() {
  return ["Select the first hero", "Select the second", "Check your matchup"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <SelectStep order={1} />;
    case 1:
      return <SelectStep order={2} />;
    case 2:
      return <HeroesNames />;
    default:
      return "Unknown step";
  }
}

function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleCompare = () => {
    props.history.push("/compare");
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
              <StepContent>
                <div>
                  {activeStep === steps.length ? (
                    <div>
                      <Typography className={classes.instructions}>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Button onClick={handleReset} className={classes.button}>
                        Reset
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <div className={classes.instructions}>
                        {getStepContent(activeStep)}
                      </div>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>

                        <Button
                          variant="contained"
                          color="primary"
                          onClick={
                            activeStep === steps.length - 1
                              ? handleCompare
                              : handleNext
                          }
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? "Yeah" : "Next"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}

export default withRouter(VerticalLinearStepper);
