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
        date: ''
      };
    }


    stateInfo = (firstName, lastName, device, date ) => {
        this.setState({
          firstName: firstName,
          lastName: lastName,
          device: device,
          date:date
        });
    }

    // updateInfo(props){
    //   updateState: function(props) {
    //      this.props.updateInfo("firstName", "lastName", "value", "date")
    //   }
    // }


    handleNext = () => {
      const {stepIndex} = this.state;
      if (stepIndex < 2) {
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
            label={stepIndex === 2 ? 'Copy' : 'Next'}
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
              <Patient updateInfo={this.stateInfo}/>
                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
                Begin Test
              </StepButton>
              <StepContent>
                <Test />
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
                Results
              </StepButton>
              <StepContent style={{marginLeft:"0px", paddingLeft:"16px"}}>
                <Results firstName={this.state.firstName} lastName={this.state.lastName} device={this.state.device} date={this.state.date} />
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
          </Stepper>

        </div>
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
