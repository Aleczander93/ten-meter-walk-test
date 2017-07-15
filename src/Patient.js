import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class Patient extends React.Component {

   handleSubmit(event) {
    event.preventDefault();
   }

   state = {
     value: '',
   };

   handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className="container">

        <div className="title">
          <h3>Patient Info</h3>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              hintText="John Doe"
              floatingLabelText="Full Name"
              fullWidth={true}
              type="text"
              name='fullName'
            /><br />

            <SelectField
                floatingLabelText="Assistive Device"
                value={this.state.value}
                fullWidth={true}
                onChange={this.handleChange}
              >
                <MenuItem value="None" primaryText="None" />
                <MenuItem value="Cane" primaryText="Cane" />
                <MenuItem value="Forearm Crutches" primaryText="Forearm Crutches" />
                <MenuItem value="Gait Trainer" primaryText="Gait Trainer" />
                <MenuItem value="Orthoses" primaryText="Orthoses" />
                <MenuItem value="Walker" primaryText="Walker" />
              </SelectField>
              <br />

              <DatePicker hintText="Date" fullWidth={true} floatingLabelText="Date"/>

              <RaisedButton label='Submit' type="submit" fullWidth={true} labelColor='#fff' className='submitButton' color='white' backgroundColor='#64DD17' />
            </div>
          </form>
        </div>
      )
    }
  }
