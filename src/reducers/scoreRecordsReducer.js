export function scoreRecordsReducer(state = {}, action) {
	switch (action.type) {
		case "FETCHED_SCORE_RECORDS":
			return Object.assign({}, state, { scoreRecords: action.payload })
		default:
			return state
	}
}

