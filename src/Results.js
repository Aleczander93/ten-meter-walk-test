import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class Results extends React.Component {

  render() {
    return (
        <div className="card">
          <Card>
            <CardHeader
              title="Name"
              subtitle="Date"
              avatar="opie_logo.png"
            />
            <CardText className="cardtext">
                <div id="copy-target">
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
                </div>
            </CardText>
          </Card>
        </div>

    )
  }

}
