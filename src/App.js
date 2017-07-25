import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Patient from './ui/patient'
// import Form from './reduxformpractice'
import Test from './ui/tests'
import Results from './ui/results'
// import stopwatch from './stopwatch'
// import Form from './reduxformpractice'
import Snackbar from 'material-ui/Snackbar';
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
        openSnackBar: false,
        firstName: '',
        lastName: '',
        device: '',
        date: '',
          test1:0,
          test2:0,
          test3:0,
          test4:0,
          test5:0,
          test6:0
      };
    }


    patientInfo = (firstName, lastName, device, date) => {
        this.setState({
          firstName: firstName,
          lastName: lastName,
          device: device,
          date: date
        });
    }

    testInfo1 = (test1) => {
      this.setState({
          test1: test1
      });
    }

    testInfo2 = (test2) => {
      this.setState({
          test2: test2
      });
    }

    testInfo3 = (test3) => {
      this.setState({
          test3: test3
      });
    }

    testInfo4 = (test4) => {
      this.setState({
          test4: test4
      });
    }

    testInfo5 = (test5) => {
      this.setState({
          test5: test5
      });
    }

    testInfo6 = (test6) => {
      this.setState({
          test6: test6
      });
    }

    handleNext = () => {
      const {stepIndex} = this.state;
       if (stepIndex < 1) {
        this.refs.patient.submitInfo();
      } if (stepIndex < 2) {
        this.setState({stepIndex: stepIndex + 1});
      } if (stepIndex === 2) {
        this.setState({openSnackBar: true});
      }
    };

    handlePrev = () => {
      const {stepIndex} = this.state;
      if (stepIndex > 0) {
        this.setState({stepIndex: stepIndex - 1});
      }
    };

    handleRequestClose = () => {
      this.setState({
        openSnackBar: false,
      });
    };

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '10px 0', textAlign:'center'}}>
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
            style={{minWidth: '25%'}}
          />
          )}
          <RaisedButton
            label={stepIndex === 2 ? 'Copy' : 'Save'}
            disableTouchRipple={true}
            disableFocusRipple={true}
            backgroundColor="#00BBF9"
            labelColor="#fff"
            onTouchTap={this.handleNext}
            style={{minWidth: '25%'}}
          />
          <Snackbar
            open={this.state.openSnackBar}
            message="Copied to Patient Records"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
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
                iconElementRight={<IconButton iconStyle={{fill:"#777777", marginTop:'5px', borderRadius:'5px', padding:'2px', border:'lightgrey 1px solid', width:'46px', height:"40px"}} style={{padding:"0px", width:'34px', height:"34px"}}><NavigationMenu/></IconButton>}
                onRightIconButtonTouchTap={this.handleToggle}
                showMenuIconButton={false}
                style={{backgroundColor: "#f8f8f8", padding: "10px 55px 10px 15px"}}
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
        <div>
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
              <Patient updatePatientInfo={this.patientInfo} ref='patient'/>
                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
                Begin Test
              </StepButton>
              <StepContent>
                <Test updateTests1={this.testInfo1} updateTests2={this.testInfo2} updateTests3={this.testInfo3}
                      updateTests4={this.testInfo4} updateTests5={this.testInfo5} updateTests6={this.testInfo6}/>
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
                Results
              </StepButton>
              <StepContent style={{marginLeft:"0px", paddingLeft:"16px"}}>
                <Results firstName={this.state.firstName} lastName={this.state.lastName} device={this.state.device} date={this.state.date}
                  test1={this.state.test1} test2={this.state.test2} test3={this.state.test3}
                  test4={this.state.test4} test5={this.state.test5} test6={this.state.test6} />
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
          </Stepper>

        </div>
      </div>
    </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
