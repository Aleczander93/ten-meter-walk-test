import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Results extends React.Component {

  getPatients() {
    return[]
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <Card>
            <CardHeader
              title="Name"
              subtitle="Date"
              avatar="opie_logo.png"
            />
            <CardText className="cardtext">
                <strong>Self-Selected Velocity</strong>
                <br />
                Trial 1: sec.<br />
                Trial 2: sec.<br />
                Trial 3: sec.<br />
                Average Time: sec.<br />
                <br />
                <strong>Fast Velocity</strong>
                <br />
                Trial 1: sec.<br />
                Trial 2: sec.<br />
                Trial 3: sec.<br />
                Average Time: sec.<br />
                <br />
                <strong>Actual Velocity</strong>
                <br />
                Average Self-Selected Velocity: m/s<br />
                Average Fast-Velocity: m/s<br />
            </CardText>
            <CardActions>
              <FlatButton label="Copy" fullWidth={true} />
            </CardActions>
          </Card>
        </div>
      </div>

    )
  }

}
