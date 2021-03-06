import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { formatNum } from '../calculations/percentileCalc'

const Percentile = (props) => {
  return (
    <div>
      <h1>Candidate ID: {props.candidate}</h1>
      <br></br>
      <h2>Communication Score: {formatNum(Math.round(props.com))} Percentile</h2>
      <h2>Coding Score: {formatNum(Math.round(props.code))} Percentile</h2>
      <br></br>
      <FlatButton onClick={props.handleClick} label="Search Again" />
    </div>

  )
};

export default Percentile