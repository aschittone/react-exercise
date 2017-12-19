import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorText: '',
      value: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      errorText: ''
    })
  }

  handleClick = () => {
    let candidate = this.props.scoreRecords.filter((ele) => ele.candidate_id === this.state.value)
    if (candidate.length >= 1) {
      this.props.handleClick(this.state.value)
      this.setState({
        value: '',
        errorText: ''
      })
    } else {
      this.setState({
        errorText: 'Candidate Not Found'
      })
    }
  }

  render() {
    return (
      <div>
        <TextField hintText="Enter Candidate ID Here"
          onChange={this.handleChange}
          errorText={this.state.errorText}
          underlineFocusStyle={{ borderColor: '#000' }}
        />
        <FlatButton onClick={this.handleClick}
          label="Submit"
        />
      </div>

    )
  }
}

export default Input

