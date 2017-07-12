import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const formattedSeconds = (sec) =>
  Math.floor('0' + sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)

export default class Timer extends React.Component {

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

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


      // handleSubmitClick() {
      //     clearInterval(this.incrementer);
      // }

    handleLapClick() {
      this.setState({
        laps: this.state.laps.concat([this.state.secondsElapsed])
      })
  }

  render() {

    const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
          />,
          <FlatButton
            label="Continue"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose}
            onClick={this.handleResetClick.bind(this)}
          />,
        ];

    return (
<div className="container">

  <div className="title">
    <h3>10 Meter Walk Test</h3>
  </div>

      <h1 className="stopwatch-timer">
       {formattedSeconds(this.state.secondsElapsed)}
      </h1>

  <div className='testBody'>

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
      ? <RaisedButton label='reset' className='reset-btn' fullWidth={true} onTouchTap={this.handleOpen} />
      : null
     )}

     <Dialog
         title="Warning!"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}>
         Are you sure you want to reset the timer?
      </Dialog>

     {(this.state.secondsElapsed !== 0 &&
       this.incrementer === this.state.lastClearedIncrementer
       ? <RaisedButton label='Submit Results' onClick={this.handleLapClick.bind(this)} fullWidth={true} labelColor='#fff' className='submitButton' color='white' backgroundColor='#64DD17' />
       : null
      )}

      <ul className="stopwatch-laps">
        { this.state.laps.map((lap, i) =>
            <li className="stopwatch-lap"><strong>{i + 1}</strong>{formattedSeconds(lap)}</li>
        )}
      </ul>

 </div>
</div>
    )
  }

}
