export function dataReducer(state = {}, action) {
	switch (action.type) {
		case "FETCHED_COMPANIES":
			return Object.assign({}, state, { companies: action.payload })
		case "FETCHED_SCORE_RECORDS":
			return Object.assign({}, state, { scoreRecords: action.payload })
		default:
			return state
	}
}


