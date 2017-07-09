import React from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const formattedSeconds = (sec) =>
  Math.floor('0' + sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)


class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        secondsElapsed: 0,
        laps: [],
        lastClearedIncrementer: null,
        open: false
      };
      this.incrementer = null;
    }

 handleToggle = () => this.setState({open: !this.state.open});

 handleClose = () => this.setState({open: false});

  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
        })
      , 1000);
    }

  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
      });
    }

  handleResetClick() {
      clearInterval(this.incrementer);
      this.setState({
        secondsElapsed: 0,
        laps: []
      });
    }

    handleSubmitClick() {
        clearInterval(this.incrementer);
    }

//   handleLabClick() {
//   this.setState({
//     laps: this.state.laps.concat([this.state.secondsElapsed])
//   })
// }

  render() {
    return (
      <MuiThemeProvider>
        <div className="Container">
          <div>

            <AppBar
              title="10-METER WALK TEST"
              iconElementRight={<IconButton><NavigationMenu /></IconButton>}
              onRightIconButtonTouchTap={this.handleToggle}
              showMenuIconButton={false}
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


          <h1 className="stopwatch-timer">
           {formattedSeconds(this.state.secondsElapsed)}
          </h1>

          <div className="testBody">


            {(this.state.secondsElapsed === 0 ||
              this.incrementer === this.state.lastClearedIncrementer
              ? <RaisedButton className="start-btn" primary={true} label="Begin Test" fullWidth={true} onClick={this.handleStartClick.bind(this)}/>
              : <RaisedButton className="stop-btn" secondary={true} label="Stop Test" fullWidth={true} onClick={this.handleStopClick.bind(this)}/>
            )}

            {/* {(this.state.secondsElapsed !== 0 &&
              this.incrementer !== this.state.lastClearedIncrementer
              ? <RaisedButton onClick={this.handleLabClick.bind(this)}>lap</RaisedButton>
              : null
            )} */}

            {(this.state.secondsElapsed !== 0 &&
              this.incrementer === this.state.lastClearedIncrementer
              ? <RaisedButton label='reset' className='reset-btn' fullWidth={true} onClick={this.handleResetClick.bind(this)}/>
              : null
             )}

             {(this.state.secondsElapsed !== 0 &&
               this.incrementer === this.state.lastClearedIncrementer
               ? <RaisedButton label='Submit Results' fullWidth={true} labelColor='#fff' className='submitButton' color='white' backgroundColor='#64DD17' onClick={this.handleSubmitClick.bind(this)}/>
               : null
              )}

            {/* <ul className="stopwatch-laps">
              { this.state.laps.map((lap, i) =>
                  <li className="stopwatch-lap"><strong>{i + 1}</strong>/ {formattedSeconds(lap)}</li>)
              }
            </ul> */}
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
