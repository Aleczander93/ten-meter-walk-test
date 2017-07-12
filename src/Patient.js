import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class Patient extends React.Component {

  state = {
     value: 1,
   };

   handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className="container">

      <div className="title">
        <h3>Patient Info</h3>
      </div>

      <div>
        <TextField
          hintText="John Doe"
          floatingLabelText="Full Name"
          fullWidth="true"
        /><br />

        <SelectField
            floatingLabelText="Assistive Device"
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth="true"
          >
            <MenuItem value={1} primaryText="None" />
            <MenuItem value={2} primaryText="Cane" />
            <MenuItem value={3} primaryText="Forearm Crutches" />
            <MenuItem value={4} primaryText="Gait Trainer" />
            <MenuItem value={5} primaryText="Orthoses" />
            <MenuItem value={5} primaryText="Walker" />
          </SelectField>
          <br />

          <DatePicker hintText="Date" fullWidth="true" floatingLabelText="Date"/>

          <RaisedButton label='Submit' fullWidth={true} labelColor='#fff' className='submitButton' color='white' backgroundColor='#64DD17' />
        </div>
      </div>

    )
  }

}
