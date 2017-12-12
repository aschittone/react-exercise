const Papa = require("papaparse/papaparse.min.js")

export function scoreRecordsFetchData() {
	return function (dispatch) {
		Papa.parse('https://s3.amazonaws.com/simple-fractal-recruiting/score-records.csv', {
			download: true,
			header: true,
			complete: function (results) {
				dispatch({ type: "FETCHED_SCORE_RECORDS", payload: results.data })
			}
		})
	}
}