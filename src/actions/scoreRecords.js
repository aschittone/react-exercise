import ScoreRecords from './data/score-records.js'

export function scoreRecordsFetchData() {
	return function (dispatch) {
		var result = { scoreRecords: [] }
		var data = ScoreRecords.scoreRecords
		data.forEach((ele, i) => {
			if (i !== 0) {
				result.scoreRecords.push({ [data[0][0]]: ele[0].toString(), [data[0][1]]: ele[1].toString(), [data[0][2]]: ele[2].toString(), [data[0][3]]: ele[3].toString(), [data[0][4]]: ele[4].toString() })
			}
		})
		dispatch({ type: "FETCHED_SCORE_RECORDS", payload: result.scoreRecords })
	}
}