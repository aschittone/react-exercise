export function companiesReducer(state = {}, action) {
	switch (action.type) {
		case "FETCHED_COMPANIES":
			return Object.assign({}, state, { companies: action.payload })
		default:
			return state
	}
}

