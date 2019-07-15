import React from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'

import Dropzone from '../../components/import/Dropzone'
import ListEdiFile from '../../components/import/ListEdiFile'
import ReviewEdiFile from '../../components/import/form'
import Tabs from '../../components/import/Tabs'

import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(5, 0)
  }
}))

function getSteps() {
  return ['Import Edi File', 'Edit', 'Confirm']
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Dropzone />
    case 1:
      return (
        <div>
          <ReviewEdiFile />
          <Divider />
          <Tabs />
        </div>
      )

    case 2:
      return <ListEdiFile />
    default:
      return 'err'
  }
}

const ImportEdifile = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())
  const steps = getSteps()

  function handleNext() {
    let newSkipped = skipped

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  function handleReset() {
    setActiveStep(0)
  }

  return (
    <Container maxWidth="lg">
      <Paper className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {}
            const labelProps = {}
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}> {label} </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </Paper>
      <Paper className={classes.root}>
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
            <div>
              {getStepContent(activeStep)}
              <div>
                <Button
                  disabled={activeStep <= 1}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Paper>
    </Container>
  )
}

export default ImportEdifile