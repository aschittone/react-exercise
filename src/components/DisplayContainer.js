import React, { Component } from 'react';
import Percentile from './Percentile'
import InputUser from './InputUser'
import { connect } from 'react-redux';
import { companiesFetchData } from '../actions/companies'
import { scoreRecordsFetchData } from '../actions/scoreRecords'
import { showPercentile } from '../actions/percentile'
import { getResults } from '../calculations/percentileCalc'



class DisplayContainer extends Component {

	componentDidMount() {
		this.props.fetchCompanyData()
		this.props.fetchScoreData()
	}

	handleClick = (candidateID) => {
		if (typeof candidateID === 'string') {
			let results = getResults(candidateID, this.props.scoreRecords, this.props.companies)
			this.props.showPercentile(true, results, candidateID)
		} else {
			this.props.showPercentile(false, { com: 0, code: 0 }, candidateID)
		}
	}

	render() {
		return (
			<div>
				{this.props.showPercentileNum ? <Percentile candidate={this.props.candidate} com={this.props.comPercentile} code={this.props.codePercentile} handleClick={this.handleClick} /> : <InputUser handleClick={this.handleClick} scoreRecords={this.props.scoreRecords} />}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		companies: state.companies,
		scoreRecords: state.scoreRecords,
		comPercentile: state.showPercentileNum.comPercentile,
		codePercentile: state.showPercentileNum.codePercentile,
		candidate: state.showPercentileNum.candidateID,
		showPercentileNum: state.showPercentileNum.show
	};
};

function mapDispatchToProps(dispatch) {
	return {
		fetchCompanyData: () => dispatch(companiesFetchData()),
		fetchScoreData: () => dispatch(scoreRecordsFetchData()),
		showPercentile: (bool, results, candidate) => dispatch(showPercentile(bool, results, candidate))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);