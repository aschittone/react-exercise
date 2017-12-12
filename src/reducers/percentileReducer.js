export function percentileReducer(state = { comPercentile: 0, codePercentile: 0, show: false, candidateID: false }, action) {
	switch (action.type) {
		case "SHOW_PERCENTILE":
			return Object.assign({}, state, { show: action.payload, comPercentile: action.percentiles.com, codePercentile: action.percentiles.code, candidateID: action.candidateID })
		default:
			return state
	}
}