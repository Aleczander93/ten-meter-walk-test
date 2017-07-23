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

const formattedSeconds1 = (sec1) =>
  Math.floor(sec1 / 60) +
    ':' +
  ('0' + sec1 % 60).slice(-2)

const formattedSeconds2 = (sec2) =>
  Math.floor(sec2 / 60) +
    ':' +
  ('0' + sec2 % 60).slice(-2)

const formattedSeconds3 = (sec3) =>
  Math.floor(sec3 / 60) +
    ':' +
  ('0' + sec3 % 60).slice(-2)

const formattedSeconds4 = (sec4) =>
  Math.floor(sec4 / 60) +
    ':' +
  ('0' + sec4 % 60).slice(-2)

const formattedSeconds5 = (sec5) =>
  Math.floor(sec5 / 60) +
    ':' +
  ('0' + sec5 % 60).slice(-2)

const formattedSeconds6 = (sec6) =>
  Math.floor(sec6 / 60) +
    ':' +
  ('0' + sec6 % 60).slice(-2)


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
        // laps: [],
        selectable: false,
        lastClearedIncrementer1: null,
        lastClearedIncrementer2: null,
        lastClearedIncrementer3: null,
        lastClearedIncrementer4: null,
        lastClearedIncrementer5: null,
        lastClearedIncrementer6: null,
        open1: false,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
        open6: false,
        showCheckboxes: false,
        selected: [1],
      };
      this.incrementer1 = null;
      this.incrementer2 = null;
      this.incrementer3 = null;
      this.incrementer4 = null;
      this.incrementer5 = null;
      this.incrementer6 = null;
    }


////////////////////////////////////////////////////////////////
    handleStartClick1() {
      this.incrementer1 = setInterval( () =>
        this.setState({
          secondsElapsed: {
              test1: this.state.secondsElapsed.test1 + 1,
              test2: this.state.secondsElapsed.test2,
              test3: this.state.secondsElapsed.test3,
              test4: this.state.secondsElapsed.test4,
              test5: this.state.secondsElapsed.test5,
              test6: this.state.secondsElapsed.test6,
            }
          })
        , 1000);
      }

    handleStopClick1() {
      clearInterval(this.incrementer1);
      this.setState({
        lastClearedIncrementer1: this.incrementer1
        });
      }

    handleResetClick1() {
        clearInterval(this.incrementer1);
        this.setState({
          secondsElapsed: {
            test1:0,
            test2: this.state.secondsElapsed.test2,
            test3: this.state.secondsElapsed.test3,
            test4: this.state.secondsElapsed.test4,
            test5: this.state.secondsElapsed.test5,
            test6: this.state.secondsElapsed.test6,
          },
          laps: []
        });
      }

      handleSave1() {
        this.props.updateTests1(this.state.secondsElapsed.test1)
      }

      handleTest1 = (event) => {
        this.setState({formattedSeconds1: event.target.value});
      };

      handleOpen1 = () => {
          this.setState({open1: true});
      };

      handleClose1 = () => {
          this.setState({open1: false});
      };

    ////////////////////////////////////////////////////////////////
        handleStartClick2() {
          this.incrementer2 = setInterval( () =>
            this.setState({
              secondsElapsed: {
                  test2: this.state.secondsElapsed.test2 + 1,
                  test1: this.state.secondsElapsed.test1,
                  test3: this.state.secondsElapsed.test3,
                  test4: this.state.secondsElapsed.test4,
                  test5: this.state.secondsElapsed.test5,
                  test6: this.state.secondsElapsed.test6,
                }
              })
            , 1000);
          }

        handleStopClick2() {
          clearInterval(this.incrementer2);
          this.setState({
            lastClearedIncrementer2: this.incrementer2
            });
          }

        handleResetClick2() {
            clearInterval(this.incrementer2);
            this.setState({
              secondsElapsed: {
                test2:0,
                test1: this.state.secondsElapsed.test1,
                test3: this.state.secondsElapsed.test3,
                test4: this.state.secondsElapsed.test4,
                test5: this.state.secondsElapsed.test5,
                test6: this.state.secondsElapsed.test6,
              },
              laps: []
            });
          }

          handleSave2() {
            this.props.updateTests2(this.state.secondsElapsed.test2)
          }

          handleTest2 = (event) => {
            this.setState({formattedSeconds2: event.target.value});
          };

          handleOpen2 = () => {
              this.setState({open2: true});
          };

          handleClose2 = () => {
              this.setState({open2: false});
          };

        ////////////////////////////////////////////////////////////////
            handleStartClick3() {
              this.incrementer3 = setInterval( () =>
                this.setState({
                  secondsElapsed: {
                      test3: this.state.secondsElapsed.test3 + 1,
                      test1: this.state.secondsElapsed.test1,
                      test2: this.state.secondsElapsed.test2,
                      test4: this.state.secondsElapsed.test4,
                      test5: this.state.secondsElapsed.test5,
                      test6: this.state.secondsElapsed.test6,
                    }
                  })
                , 1000);
              }

            handleStopClick3() {
              clearInterval(this.incrementer3);
              this.setState({
                lastClearedIncrementer3: this.incrementer3
                });
              }

            handleResetClick3() {
                clearInterval(this.incrementer3);
                this.setState({
                  secondsElapsed: {
                    test3:0,
                    test2: this.state.secondsElapsed.test2,
                    test1: this.state.secondsElapsed.test1,
                    test4: this.state.secondsElapsed.test4,
                    test5: this.state.secondsElapsed.test5,
                    test6: this.state.secondsElapsed.test6,
                  },
                  laps: []
                });
              }

              handleSave3() {
                this.props.updateTests3(this.state.secondsElapsed.test3)
              }

              handleTest3 = (event) => {
                this.setState({formattedSeconds3: event.target.value});
              };

              handleOpen3 = () => {
                  this.setState({open3: true});
              };

              handleClose3 = () => {
                  this.setState({open3: false});
              };


    ////////////////////////////////////////////////////////////////
        handleStartClick4() {
          this.incrementer4 = setInterval( () =>
            this.setState({
              secondsElapsed: {
                  test4: this.state.secondsElapsed.test4 + 1,
                  test1: this.state.secondsElapsed.test1,
                  test3: this.state.secondsElapsed.test3,
                  test2: this.state.secondsElapsed.test2,
                  test5: this.state.secondsElapsed.test5,
                  test6: this.state.secondsElapsed.test6,
                }
              })
            , 1000);
          }

        handleStopClick4() {
          clearInterval(this.incrementer4);
          this.setState({
            lastClearedIncrementer4: this.incrementer4
            });
          }

        handleResetClick4() {
            clearInterval(this.incrementer4);
            this.setState({
              secondsElapsed: {
                test4:0,
                test2: this.state.secondsElapsed.test2,
                test1: this.state.secondsElapsed.test1,
                test3: this.state.secondsElapsed.test3,
                test5: this.state.secondsElapsed.test5,
                test6: this.state.secondsElapsed.test6,
              },
              laps: []
            });
          }

          handleSave4() {
            this.props.updateTests4(this.state.secondsElapsed.test4)
          }

          handleTest4 = (event) => {
            this.setState({formattedSeconds4: event.target.value});
          };

          handleOpen4 = () => {
              this.setState({open4: true});
          };

          handleClose4 = () => {
              this.setState({open4: false});
          };


    ////////////////////////////////////////////////////////////////
        handleStartClick5() {
          this.incrementer5 = setInterval( () =>
            this.setState({
              secondsElapsed: {
                  test5: this.state.secondsElapsed.test5 + 1,
                  test1: this.state.secondsElapsed.test1,
                  test3: this.state.secondsElapsed.test3,
                  test4: this.state.secondsElapsed.test4,
                  test2: this.state.secondsElapsed.test2,
                  test6: this.state.secondsElapsed.test6,
                }
              })
            , 1000);
          }

        handleStopClick5() {
          clearInterval(this.incrementer5);
          this.setState({
            lastClearedIncrementer5: this.incrementer5
            });
          }

        handleResetClick5() {
            clearInterval(this.incrementer5);
            this.setState({
              secondsElapsed: {
                test5:0,
                test2: this.state.secondsElapsed.test2,
                test1: this.state.secondsElapsed.test1,
                test4: this.state.secondsElapsed.test4,
                test3: this.state.secondsElapsed.test3,
                test6: this.state.secondsElapsed.test6,
              },
              laps: []
            });
          }

          handleSave5() {
            this.props.updateTests5(this.state.secondsElapsed.test5)
          }

          handleTest5 = (event) => {
            this.setState({formattedSeconds5: event.target.value});
          };

          handleOpen5 = () => {
              this.setState({open5: true});
          };

          handleClose5 = () => {
              this.setState({open5: false});
          };


        ////////////////////////////////////////////////////////////////
        handleStartClick6() {
          this.incrementer6 = setInterval( () =>
            this.setState({
              secondsElapsed: {
                  test6: this.state.secondsElapsed.test6 + 1,
                  test1: this.state.secondsElapsed.test1,
                  test3: this.state.secondsElapsed.test3,
                  test4: this.state.secondsElapsed.test4,
                  test5: this.state.secondsElapsed.test5,
                  test2: this.state.secondsElapsed.test2,
                }
              })
            , 1000);
          }

        handleStopClick6() {
          clearInterval(this.incrementer6);
          this.setState({
            lastClearedIncrementer6: this.incrementer6
            });
          }

        handleResetClick6() {
            clearInterval(this.incrementer6);
            this.setState({
              secondsElapsed: {
                test6:0,
                test2: this.state.secondsElapsed.test2,
                test1: this.state.secondsElapsed.test1,
                test4: this.state.secondsElapsed.test4,
                test5: this.state.secondsElapsed.test5,
                test3: this.state.secondsElapsed.test3,
              },
              laps: []
            });
          }

          handleSave6() {
            this.props.updateTests6(this.state.secondsElapsed.test6)
          }

          handleTest6 = (event) => {
            this.setState({formattedSeconds6: event.target.value});
          };

          handleOpen6 = () => {
              this.setState({open6: true});
          };

          handleClose6 = () => {
              this.setState({open6: false});
          };

          isSelected = (index) => {
            return this.state.selected.indexOf(index) !== -1;
          };

          handleRowSelection = (selectedRows) => {
            this.setState({
              selected: selectedRows,
            });
          };

  render() {

    const actions1 = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose1}
          />,
          <FlatButton
            label="Continue"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose1}
            onClick={this.handleResetClick1.bind(this)}
          />,
        ];

    const actions2 = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose2}
          />,
          <FlatButton
            label="Continue"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose2}
            onClick={this.handleResetClick2.bind(this)}
          />,
        ];

    const actions3 = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose3}
          />,
          <FlatButton
            label="Continue"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose3}
            onClick={this.handleResetClick3.bind(this)}
          />,
        ];

    const actions4 = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose4}
          />,
          <FlatButton
            label="Continue"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose4}
            onClick={this.handleResetClick4.bind(this)}
          />,
        ];

    const actions5 = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose5}
          />,
          <FlatButton
            label="Continue"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose5}
            onClick={this.handleResetClick5.bind(this)}
          />,
        ];

    const actions6 = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose6}
          />,
          <FlatButton
            label="Continue"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose6}
            onClick={this.handleResetClick6.bind(this)}
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

                 <h1
                   className="stopwatch-timer"
                   value={this.formattedSeconds1}
                   onChange={this.handleTest1}>
                  {formattedSeconds1(this.state.secondsElapsed.test1)}
                 </h1>

               </TableRowColumn>
               <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                 {(this.state.secondsElapsed.test1 !== 0 &&
                   this.incrementer1 === this.state.lastClearedIncrementer1
                   ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen1} />
                   : null
                  )}

                 {(this.state.secondsElapsed.test1 === 0 ||
                   this.incrementer1 === this.state.lastClearedIncrementer1
                   ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick1.bind(this)}/>
                   : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick1.bind(this)}/>
                 )}

                 {(this.state.secondsElapsed.test1 !== 0 &&
                  this.incrementer1 === this.state.lastClearedIncrementer1
                  ? <ContentSave label='Submit Results' onClick={this.handleSave1.bind(this)} className='submitButton'  />
                  : null
                 )}

                 <Dialog
                     title="Warning!"
                     actions={actions1}
                     modal={false}
                     open={this.state.open1}
                     onRequestClose={this.handleClose1}>
                     Are you sure you want to reset the timer?
                  </Dialog>

               </TableRowColumn>
             </TableRow>
             <TableRow selected={this.isSelected(1)}>
               <TableRowColumn>Test 2</TableRowColumn>
               <TableRowColumn>

                 <h1
                 value={this.formattedSeconds2}
                 onChange={this.handleTest2}
                 className="stopwatch-timer">
                  {formattedSeconds2(this.state.secondsElapsed.test2)}
                 </h1>

               </TableRowColumn>
               <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                 {(this.state.secondsElapsed.test2 !== 0 &&
                   this.incrementer2 === this.state.lastClearedIncrementer2
                   ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen2} />
                   : null
                  )}

                 {(this.state.secondsElapsed.test2 === 0 ||
                   this.incrementer2 === this.state.lastClearedIncrementer2
                   ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick2.bind(this)}/>
                   : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick2.bind(this)}/>
                 )}

                 {(this.state.secondsElapsed.test2 !== 0 &&
                  this.incrementer2 === this.state.lastClearedIncrementer2
                  ? <ContentSave label='Submit Results' onClick={this.handleSave2.bind(this)} className='submitButton'  />
                  : null
                 )}

                 <Dialog
                     title="Warning!"
                     actions={actions2}
                     modal={false}
                     open={this.state.open2}
                     onRequestClose={this.handleClose2}>
                     Are you sure you want to reset the timer?
                  </Dialog>

               </TableRowColumn>
             </TableRow>
             <TableRow selected={this.isSelected(2)}>
               <TableRowColumn>Test 3</TableRowColumn>
               <TableRowColumn>

                 <h1
                 value={this.formattedSeconds3}
                 onChange={this.handleTest3}
                 className="stopwatch-timer">
                  {formattedSeconds3(this.state.secondsElapsed.test3)}
                 </h1>

               </TableRowColumn>
               <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                 {(this.state.secondsElapsed.test3 !== 0 &&
                   this.incrementer3 === this.state.lastClearedIncrementer3
                   ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen3} />
                   : null
                  )}

                 {(this.state.secondsElapsed.test3 === 0 ||
                   this.incrementer3 === this.state.lastClearedIncrementer3
                   ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick3.bind(this)}/>
                   : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick3.bind(this)}/>
                 )}

                 {(this.state.secondsElapsed.test3 !== 0 &&
                  this.incrementer3 === this.state.lastClearedIncrementer3
                  ? <ContentSave label='Submit Results' onClick={this.handleSave3.bind(this)} className='submitButton'  />
                  : null
                 )}

                 <Dialog
                     title="Warning!"
                     actions={actions3}
                     modal={false}
                     open={this.state.open3}
                     onRequestClose={this.handleClose3}>
                     Are you sure you want to reset the timer?
                  </Dialog>

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

                      <h1
                       value={this.formattedSeconds4}
                       onChange={this.handleTest4}
                       className="stopwatch-timer">
                        {formattedSeconds4(this.state.secondsElapsed.test4)}
                      </h1>

                    </TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                      {(this.state.secondsElapsed.test4 !== 0 &&
                        this.incrementer4 === this.state.lastClearedIncrementer4
                        ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen4} />
                        : null
                       )}

                      {(this.state.secondsElapsed.test4 === 0 ||
                        this.incrementer4 === this.state.lastClearedIncrementer4
                        ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick4.bind(this)}/>
                        : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick4.bind(this)}/>
                      )}

                      {(this.state.secondsElapsed.test4 !== 0 &&
                       this.incrementer4 === this.state.lastClearedIncrementer4
                       ? <ContentSave label='Submit Results' onClick={this.handleSave4.bind(this)} className='submitButton'  />
                       : null
                      )}

                      <Dialog
                          title="Warning!"
                          actions={actions4}
                          modal={false}
                          open={this.state.open4}
                          onRequestClose={this.handleClose4}>
                          Are you sure you want to reset the timer?
                       </Dialog>

                    </TableRowColumn>
                  </TableRow>
                  <TableRow selected={this.isSelected(1)}>
                    <TableRowColumn>Test 2</TableRowColumn>
                    <TableRowColumn>

                      <h1
                       value={this.formattedSeconds5}
                       onChange={this.handleTest5}
                       className="stopwatch-timer">
                       {formattedSeconds5(this.state.secondsElapsed.test5)}
                      </h1>

                    </TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                      {(this.state.secondsElapsed.test5 !== 0 &&
                        this.incrementer5 === this.state.lastClearedIncrementer5
                        ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen5} />
                        : null
                       )}

                      {(this.state.secondsElapsed.test5 === 0 ||
                        this.incrementer5 === this.state.lastClearedIncrementer5
                        ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick5.bind(this)}/>
                        : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick5.bind(this)}/>
                      )}

                      {(this.state.secondsElapsed.test5 !== 0 &&
                       this.incrementer5 === this.state.lastClearedIncrementer5
                       ? <ContentSave label='Submit Results' onClick={this.handleSave5.bind(this)} className='submitButton'  />
                       : null
                      )}

                      <Dialog
                          title="Warning!"
                          actions={actions5}
                          modal={false}
                          open={this.state.open5}
                          onRequestClose={this.handleClose5}>
                          Are you sure you want to reset the timer?
                       </Dialog>

                    </TableRowColumn>
                  </TableRow>
                  <TableRow selected={this.isSelected(2)}>
                    <TableRowColumn>Test 3</TableRowColumn>
                    <TableRowColumn>

                      <h1
                       value={this.formattedSeconds6}
                       onChange={this.handleTest6}
                       className="stopwatch-timer">
                       {formattedSeconds6(this.state.secondsElapsed.test6)}
                      </h1>

                    </TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center', fontSize:'0px' }}>

                      {(this.state.secondsElapsed.test6 !== 0 &&
                        this.incrementer6 === this.state.lastClearedIncrementer6
                        ? <AvReplay label='reset' className='reset-btn' onTouchTap={this.handleOpen6} />
                        : null
                       )}

                      {(this.state.secondsElapsed.test6 === 0 ||
                        this.incrementer6 === this.state.lastClearedIncrementer6
                        ? <AvPlayArrow className="start-btn" label="Begin" onClick={this.handleStartClick6.bind(this)}/>
                        : <AvPause className="stop-btn" label="Stop" onClick={this.handleStopClick6.bind(this)}/>
                      )}

                      {(this.state.secondsElapsed.test6 !== 0 &&
                       this.incrementer6 === this.state.lastClearedIncrementer6
                       ? <ContentSave label='Submit Results' onClick={this.handleSave6.bind(this)} className='submitButton'  />
                       : null
                      )}

                      <Dialog
                          title="Warning!"
                          actions={actions6}
                          modal={false}
                          open={this.state.open6}
                          onRequestClose={this.handleClose6}>
                          Are you sure you want to reset the timer?
                       </Dialog>

                        </TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              )
            }
          }
