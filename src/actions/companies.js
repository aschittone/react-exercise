import Companies from './data/companies.js'

export function companiesFetchData() {
	return function (dispatch) {
		var result = { companies: [] }
		var data = Companies.companies
		data.forEach((ele, i) => {
			if (i !== 0) {
				result.companies.push({ [data[0][0]]: ele[0].toString(), [data[0][1]]: ele[1].toString() })
			}
		})
		dispatch({ type: "FETCHED_COMPANIES", payload: result.companies })

	}
}