import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



export default class Patient extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        firstName: '',
        lastName: '',
        device: '',
        date: {}
      };

      this.handlefirstName = this.handlefirstName.bind(this);
      this.handlelastName = this.handlelastName.bind(this);
      this.handleDate = this.handleDate.bind(this);

    }

  submitInfo() {
    this.props.updatePatientInfo(this.state.firstName, this.state.lastName, this.state.device, this.state.date);
  }


  handleDevice = (event, index, device) => {
    this.setState({device});
  }

  handlefirstName(event){
    this.setState({firstName: event.target.value});
  };

  handlelastName(event){
    this.setState({lastName: event.target.value});
  };

  handleDate(event , date){
    var currentState = this.state;
    currentState.date = date;
    this.setState({currentState});
  };


  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              floatingLabelText="First Name"
              fullWidth={true}
              type="text"
              name='firstName'
              value={this.firstName}
              onChange={this.handlefirstName}
            />
            <br />

            <TextField
              floatingLabelText="Last Name"
              fullWidth={true}
              value={this.lastName}
              onChange={this.handlelastName}
              type="text"
              name='lastName'
            /><br />

            <SelectField
                ref="deviceinfo"
                name='value'
                floatingLabelText="Assistive Device"
                value={this.state.device}
                fullWidth={true}
                onChange={this.handleDevice}
              >
                <MenuItem value="None" primaryText="None" />
                <MenuItem value="Cane" primaryText="Cane" />
                <MenuItem value="Forearm Crutches" primaryText="Forearm Crutches" />
                <MenuItem value="Gait Trainer" primaryText="Gait Trainer" />
                <MenuItem value="Orthoses" primaryText="Orthoses" />
                <MenuItem value="Walker" primaryText="Walker" />
              </SelectField>
              <br />

              <DatePicker hintText="Date" value={this.state.date} onChange={this.handleDate} name='date' fullWidth={true} floatingLabelText="Date"/>
              <div className="submitContainer">
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
