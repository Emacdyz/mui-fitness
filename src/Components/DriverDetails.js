import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'

class DriverDetails extends Component {

  state = {
    activeStep: 0,
    checked: false,
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    })
  }

  getSteps = () => {
    return ['Name', 'E-mail', 'Phone', 'Pickup location'];
  }
  
  getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <TextField
            required
            id="required"
            label="Name"
            margin="normal"
          />
        )
      case 1:
        return(
          <TextField
            required
            id="E-mail"
            label="E-mail"
            type="email"
            margin="normal"
          />
        )
      case 2:
        return(
          <TextField
            required
            id="Phone"
            label="Phone"
            type="number"
            margin="normal"
          />
        )
      case 3:
      return(
        <div>
          <TextField
            required
            id="Pickup Location"
            label="Pickup Location"
            margin="normal"
            style={{ display: 'block' }}
          />
          <Checkbox
            checked={this.state.checked}
            color='primary'
            value="checked"
            onClick={this.handleChange('checked')}
            style={{ marginLeft: '-10px' }}
          />
          <Typography style={{ display: 'inline' }}>
            By submitting your damage report you agree with the terms and conditions.
          </Typography>
        </div>
      )
      default:
        return 'Unknown step';
    }
  }

  render() {
    const steps = this.getSteps()
    const { activeStep, checked } = this.state
    return (
      <div>
        <Typography variant="display3" color="primary">
          Your details
        </Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return(
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{this.getStepContent(index)}</Typography>
                  <div>
                    <div style={{ marginTop: '5px' }}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        disabled={activeStep === steps.length - 1 && !checked}
                      >
                        {activeStep === steps.length - 1 ? 'Sumbit Damage Report' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
     </div>
    )
  }
}

export default DriverDetails