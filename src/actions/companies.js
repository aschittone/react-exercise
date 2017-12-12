const Papa = require("papaparse/papaparse.min.js")

export function companiesFetchData() {
	return function (dispatch) {
		Papa.parse('https://s3.amazonaws.com/simple-fractal-recruiting/companies.csv', {
			download: true,
			header: true,
			complete: function (results) {
				dispatch({ type: "FETCHED_COMPANIES", payload: results.data })
			}
		});
	}
}