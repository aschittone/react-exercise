export function showPercentile(bool, results, candidateID) {
	return function (dispatch) {
		dispatch({ type: "SHOW_PERCENTILE", payload: bool, percentiles: results, candidateID: candidateID })
	}
}