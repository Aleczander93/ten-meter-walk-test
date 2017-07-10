import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Results extends React.Component {


  render() {
    return (
      <div className="container">
        <div className="card">
          <Card>
            <CardHeader
              title="Name"
              subtitle="Assistive Device Used"
              avatar="opie_logo.png"
            />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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
