import React from 'react';
// import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import AvPause from 'material-ui/svg-icons/av/pause';
import AvReplay from 'material-ui/svg-icons/av/replay';
import ContentSave from 'material-ui/svg-icons/content/save';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)

export default class Test extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        secondsElapsed: {
          test1:0,
          test2:0,
          test3:0,
          test4:0,
          test5:0,
          test6:0
        },
        laps: [],
        selectable: false,
        lastClearedIncrementer: null,
        open: false,
        showCheckboxes: false,
        selected: [1],
      };
      this.incrementer = null;
    }

    handleStartClick() {
      this.incrementer = setInterval( () =>
        this.setState({
          secondsElapsed: {
              test1: this.state.secondsElapsed.test1 + 1
            }
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
          secondsElapsed: {
            test1:0,
            test2:0,
            test3:0,
            test4:0,
            test5:0,
            test6:0
          },
          laps: []
        });
      }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleLapClick() {
      this.setState({
        laps: this.state.laps.concat(this.state.secondsElapsed)
      })
    }

    isSelected = (index) => {
      return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
      this.setState({
        selected: selectedRows,
      });
    };

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
      <div>
        <Table onRowSelection={this.handleRowSelection} selectable={this.state.selectable}>
           <TableHeader adjustForCheckbox={this.state.showCheckboxes} displaySelectAll={this.state.showCheckboxes}>
             <TableHeaderColumn colSpan="3" style={{textAlign: 'center', fontSize: '18px'}}>
                  Self-Selected Velocity
                </TableHeaderColumn>
           </TableHeader>
           <TableBody displayRowCheckbox={this.state.showCheckboxes}>
             <TableRow selected={this.isSelected(0)}>
               <TableRowColumn>Test 1</TableRowColumn>
               <TableRowColumn>

                 <h1 className="stopwatch-timer">
                  {formattedSeconds(this.state.secondsElapsed.test1)}
                 </h1>

               </TableRowColumn>
               <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                 {(this.state.secondsElapsed.test1 !== 0 &&
                   this.incrementer === this.state.lastClearedIncrementer
                   ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen} />
                   : null
                  )}

                 {(this.state.secondsElapsed.test1 === 0 ||
                   this.incrementer === this.state.lastClearedIncrementer
                   ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick.bind(this)}/>
                   : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick.bind(this)}/>
                 )}

                 {(this.state.secondsElapsed.test1 !== 0 &&
                  this.incrementer === this.state.lastClearedIncrementer
                  ? <ContentSave label='Submit Results' onClick={this.handleLapClick.bind(this)} className='submitButton'  />
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

                  {/* <ul className="stopwatch-laps">
                    { this.state.laps.map((lap, i) =>
                        <li className="stopwatch-lap"><strong>{i + 1}</strong>{formattedSeconds(lap)}</li>
                    )}
                  </ul> */}

               </TableRowColumn>
             </TableRow>
             <TableRow selected={this.isSelected(1)}>
               <TableRowColumn>Test 2</TableRowColumn>
               <TableRowColumn>

                 <h1 className="stopwatch-timer">
                  {formattedSeconds(this.state.secondsElapsed.test2)}
                 </h1>

               </TableRowColumn>
               <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                 {(this.state.secondsElapsed.test2 !== 0 &&
                   this.incrementer === this.state.lastClearedIncrementer
                   ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen} />
                   : null
                  )}

                 {(this.state.secondsElapsed.test2 === 0 ||
                   this.incrementer === this.state.lastClearedIncrementer
                   ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick2.bind(this)}/>
                   : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick.bind(this)}/>
                 )}

                 {(this.state.secondsElapsed.test2 !== 0 &&
                  this.incrementer === this.state.lastClearedIncrementer
                  ? <ContentSave label='Submit Results' onClick={this.handleLapClick.bind(this)} className='submitButton'  />
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

                  {/* <ul className="stopwatch-laps">
                    { this.state.laps.map((lap, i) =>
                        <li className="stopwatch-lap"><strong>{i + 1}</strong>{formattedSeconds(lap)}</li>
                    )}
                  </ul> */}

               </TableRowColumn>
             </TableRow>
             <TableRow selected={this.isSelected(2)}>
               <TableRowColumn>Test 3</TableRowColumn>
               <TableRowColumn>

                 <h1 className="stopwatch-timer">
                  {formattedSeconds(this.state.secondsElapsed.test3)}
                 </h1>

               </TableRowColumn>
               <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                 {(this.state.secondsElapsed.test3 !== 0 &&
                   this.incrementer === this.state.lastClearedIncrementer
                   ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen} />
                   : null
                  )}

                 {(this.state.secondsElapsed.test3 === 0 ||
                   this.incrementer === this.state.lastClearedIncrementer
                   ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick.bind(this)}/>
                   : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick.bind(this)}/>
                 )}

                 {(this.state.secondsElapsed.test3 !== 0 &&
                  this.incrementer === this.state.lastClearedIncrementer
                  ? <ContentSave label='Submit Results' onClick={this.handleLapClick.bind(this)} className='submitButton'  />
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

                  {/* <ul className="stopwatch-laps">
                    { this.state.laps.map((lap, i) =>
                        <li className="stopwatch-lap"><strong>{i + 1}</strong>{formattedSeconds(lap)}</li>
                    )}
                  </ul> */}

               </TableRowColumn>
             </TableRow>
               </TableBody>
             </Table>

             <Table onRowSelection={this.handleRowSelection} selectable={this.state.selectable}>
                <TableHeader adjustForCheckbox={this.state.showCheckboxes} displaySelectAll={this.state.showCheckboxes}>
                  <TableHeaderColumn colSpan="3" style={{textAlign: 'center', fontSize: '18px'}}>
                       Fast Velocity
                     </TableHeaderColumn>
                </TableHeader>
                <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                  <TableRow selected={this.isSelected(0)}>
                    <TableRowColumn>Test 1</TableRowColumn>
                    <TableRowColumn>

                      <h1 className="stopwatch-timer">
                        {formattedSeconds(this.state.secondsElapsed.test4)}
                      </h1>

                    </TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                      {(this.state.secondsElapsed.test4 !== 0 &&
                        this.incrementer === this.state.lastClearedIncrementer
                        ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen} />
                        : null
                       )}

                      {(this.state.secondsElapsed.test4 === 0 ||
                        this.incrementer === this.state.lastClearedIncrementer
                        ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick.bind(this)}/>
                        : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick.bind(this)}/>
                      )}

                      {(this.state.secondsElapsed.test4 !== 0 &&
                       this.incrementer === this.state.lastClearedIncrementer
                       ? <ContentSave label='Submit Results' onClick={this.handleLapClick.bind(this)} className='submitButton'  />
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

                       {/* <ul className="stopwatch-laps">
                         { this.state.laps.map((lap, i) =>
                             <li className="stopwatch-lap"><strong>{i + 1}</strong>{formattedSeconds(lap)}</li>
                         )}
                       </ul> */}

                    </TableRowColumn>
                  </TableRow>
                  <TableRow selected={this.isSelected(1)}>
                    <TableRowColumn>Test 2</TableRowColumn>
                    <TableRowColumn>

                      <h1 className="stopwatch-timer">
                       {formattedSeconds(this.state.secondsElapsed.test5)}
                      </h1>

                    </TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                      {(this.state.secondsElapsed.test5 !== 0 &&
                        this.incrementer === this.state.lastClearedIncrementer
                        ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen} />
                        : null
                       )}

                      {(this.state.secondsElapsed.test5 === 0 ||
                        this.incrementer === this.state.lastClearedIncrementer
                        ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick.bind(this)}/>
                        : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick.bind(this)}/>
                      )}

                      {(this.state.secondsElapsed.test5 !== 0 &&
                       this.incrementer === this.state.lastClearedIncrementer
                       ? <ContentSave label='Submit Results' onClick={this.handleLapClick.bind(this)} className='submitButton'  />
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

                       {/* <ul className="stopwatch-laps">
                         { this.state.laps.map((lap, i) =>
                             <li className="stopwatch-lap"><strong>{i + 1}</strong>{formattedSeconds(lap)}</li>
                         )}
                       </ul> */}

                    </TableRowColumn>
                  </TableRow>
                  <TableRow selected={this.isSelected(2)}>
                    <TableRowColumn>Test 3</TableRowColumn>
                    <TableRowColumn>

                      <h1 className="stopwatch-timer">
                       {formattedSeconds(this.state.secondsElapsed.test6)}
                      </h1>

                    </TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                      {(this.state.secondsElapsed.test6 !== 0 &&
                        this.incrementer === this.state.lastClearedIncrementer
                        ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen} />
                        : null
                       )}

                      {(this.state.secondsElapsed.test6 === 0 ||
                        this.incrementer === this.state.lastClearedIncrementer
                        ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick.bind(this)}/>
                        : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick.bind(this)}/>
                      )}

                      {(this.state.secondsElapsed.test6 !== 0 &&
                       this.incrementer === this.state.lastClearedIncrementer
                       ? <ContentSave label='Submit Results' onClick={this.handleLapClick.bind(this)} className='submitButton'  />
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

                       {/* <ul className="stopwatch-laps">
                         { this.state.laps.map((lap, i) =>
                             <li className="stopwatch-lap"><strong>{i + 1}</strong>{formattedSeconds(lap)}</li>
                         )}
                       </ul> */}

                        </TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              )
            }
          }
