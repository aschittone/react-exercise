import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Input extends React.Component {
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
    let candidate = this.props.scoreRecords.scoreRecords.filter((ele) => ele.candidate_id === this.state.value)
    if (candidate.length >= 1) {
      this.props.handleClick(this.state.value)
      this.setState({
        value: '',
        errorText: ''
      })
    } else {
      this.setState({
        errorText: 'candidate not found'
      })
    }
  }

  render() {
    return (
      <div>
        <TextField hintText="Enter Candidate ID Here"
          onChange={this.handleChange}
          errorText={this.state.errorText}
          floatingLabelStyle={{ color: '#000' }}
          floatingLabelFocusStyle={{ color: '#000' }}
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

