import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Patient from './Patient'
import Timer from './Timer'
import Results from './Results'

class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        open: false
      };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

  render() {
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

          <div>
            <div className="row">
              <div className="col s12 m6"><Patient /></div>
              <div className="col s12 m6"><Timer /></div>
              <div className="col s12 m12"><Results /></div>
            </div>
          </div>


        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
