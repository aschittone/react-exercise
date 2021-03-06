export function getResults(candidateID, studentRecords, companyData) {
	let candidate = getCandidate(candidateID, studentRecords)
	let data = organizeData(candidateID, studentRecords, companyData)
	let percentilesObj = getPercentiles(candidate, data)
	return percentilesObj
}

function getPercentiles(candidate, data) {
	let n = data.length
	let rCode = sortCode(data).indexOf(candidate) + 1
	let rCom = sortCommunication(data).indexOf(candidate) + 1
	let codePercentile = (100 / (n + 1)) * rCode
	let comPercentile = (100 / (n + 1)) * rCom
	return { code: codePercentile, com: comPercentile }
}

function organizeData(candidateID, studentRecords, companyData) {
	let candidate = getCandidate(candidateID, studentRecords)
	let company = companyData.filter((comp) => candidate.company_id === comp.company_id)
	return studentRecords.filter((ele) => {
		let company2 = companyData.filter((comp) => ele.company_id === comp.company_id)
		return ele.title === candidate.title && isSimilarCompany(company, company2)
	})
}

function sortCode(data) {
	return data.sort((function (a, b) { return parseInt(a.coding_score, 10) > parseInt(b.coding_score, 10) ? 1 : -1 }))
}

function sortCommunication(data) {
	return data.sort((function (a, b) { return parseInt(a.communication_score, 10) > parseInt(b.communication_score, 10) ? 1 : -1 }))
}

function isSimilarCompany(company1, company2) {
	return parseFloat(company1[0]["fractal_index"] - company2[0]["fractal_index"]) < 0.15
}

function getCandidate(candidateID, records) {
	let record = records.filter((ele) => ele.candidate_id === candidateID)
	return record[0]
}

export function formatNum(num) {
	var n = num.toString()
	if (n[n.length - 1] === 3 && n[n.length - 2] === "1") {
		return num + 'th'
	} else if (n[n.length - 1] === '1') {
		return num + 'st'
	} else if (n[n.length - 1] === "2") {
		return num + 'nd'
	} else if (n[n.length - 1] === "3") {
		return num + 'rd'
	} else {
		return num + 'th'
	}
}