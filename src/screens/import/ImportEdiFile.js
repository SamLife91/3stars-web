import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

import Dropzone from "../../components/import/Dropzone";
import ListEdiFile from "../../components/import/ListEdiFile";
import ReviewEdiFile from "../../components/import/form";

import Divider from "@material-ui/core/Divider";

import { ImportProvider } from "../../context/TDImportContext";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2.5),
    margin: theme.spacing(5, 0)
  }
}));

function getSteps() {
  return ["Import Edi File", "Edit", "Confirm"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Dropzone />;
    case 1:
      return <ReviewEdiFile />;

    case 2:
      return <ListEdiFile />;
    default:
      return "err";
  }
}

const ImportEdifile = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  console.log(props);

  function handleNext() {
    let newSkipped = skipped;

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <ImportProvider>
      <Container maxWidth={false}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className={classes.root}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}> {label} </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {/* <Paper className={classes.root} elevation={10}> */}
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you & apos; re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <Container>
              {getStepContent(activeStep)}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "1.5vh"
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
                <Button
                  disabled={activeStep <= 1}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
              </div>
            </Container>
          )}
        </div>
        {/* </Paper> */}
      </Container>
    </ImportProvider>
  );
};

export default ImportEdifile;
