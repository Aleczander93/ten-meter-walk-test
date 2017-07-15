import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Patient from './Patient'
// import Form from './reduxformpractice'
import Timer from './Timer'
import Results from './Results'
// import Form from './reduxformpractice'

import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        open: false,
        stepIndex: 0,
      };
    }

    handleNext = () => {
  const {stepIndex} = this.state;
  if (stepIndex < 2) {
    this.setState({stepIndex: stepIndex + 1});
  }
};

handlePrev = () => {
  const {stepIndex} = this.state;
  if (stepIndex > 0) {
    this.setState({stepIndex: stepIndex - 1});
  }
};

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    // addItem(tempItem) {
    //   var tempPatient = this.state.Patient
    //   tempPatient.push(tempItem);
    //   this.setState({
    //     Patient : tempPatient
    //   });
    // }

    renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {

    const {stepIndex} = this.state;

    return (
      <MuiThemeProvider>
        <div className="Container">
          <div>
            <AppBar
              title={<img src='OPIElogo.png' alt='OPIE LOGO' width="157px" height="70px"/>}
              iconElementRight={<IconButton><NavigationMenu /></IconButton>}
              onRightIconButtonTouchTap={this.handleToggle}
              showMenuIconButton={false}
              style={{backgroundColor: "#f8f8f8", padding: "1% 7%"}}
            />
            <Drawer
              docked={false}
              width={200}
              openSecondary={true}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}>
                <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Patients</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Tests</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Settings</MenuItem>
            </Drawer>
          </div>



      <div className="Container">
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
              Patient Info
            </StepButton>
            <StepContent>
              <Patient />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
              Begin Test
            </StepButton>
            <StepContent>
              <Timer />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
              Results
            </StepButton>
            <StepContent>
              <Results />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
      </div>


          {/* <div>
            <div className="row">
              <div className="col s12 m6"></div>
              <div className="col s12 m6"></div>
              <div className="col s12 m12"></div>
            </div>
          </div> */}


        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
