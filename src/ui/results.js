import React from 'react';
import {Card, CardText} from 'material-ui/Card';
// import RaisedButton from 'material-ui/RaisedButton';


export default class Results extends React.Component {


  render() {
    return (
        <div className="card">
          <Card>
            {/* <CardHeader
              title={this.props.firstName}
              subtitle="date"
              avatar="opie_logo.png"
            /> */}

            <CardText className="cardtext">
                <div id="copy-target">
                  <strong>Patient's Name:</strong> {this.props.firstName} {this.props.lastName}
                  <br />
                  <strong>Assistive Device Used: </strong> {this.props.device}
                  <br />
                  <strong>Date:</strong> {this.props.date.toDateString()}
                  <br />
                  <br />
                  <strong>Self-Selected Velocity</strong>
                  <br />
                  Trial 1: {this.props.test1} sec.<br />
                  Trial 2: {this.props.test2} sec.<br />
                  Trial 3: {this.props.test3} sec.<br />
                  Average Time: sec.<br />
                  <br />
                  <strong>Fast Velocity</strong>
                  <br />
                  Trial 1: {this.props.test4} sec.<br />
                  Trial 2: {this.props.test5} sec.<br />
                  Trial 3: {this.props.test6} sec.<br />
                  Average Time: sec.<br />
                  <br />
                  <strong>Actual Velocity</strong>
                  <br />
                  Average Self-Selected Velocity: m/s<br />
                  Average Fast-Velocity: m/s<br />
                </div>

                {/* <RaisedButton className='copyBtn' label='Copy' data-clipboard-action="copy" data-clipboard-target="#cardtext" fullWidth={true} labelColor='#fff' color='white' backgroundColor='#64DD17' /> */}

            </CardText>
          </Card>
        </div>
    )
  }
}
