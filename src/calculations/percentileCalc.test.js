import { getResults } from './percentileCalc';

test('returns the correct percentiles for sample data set', () => {
	expect(
		getResults(
			'400',
			{
				scoreRecords: [
					{ candidate_id: "100", communication_score: "25", coding_score: "12", title: "Senior Engineer", company_id: "1" },
					{ candidate_id: "200", communication_score: "30", coding_score: "13", title: "Senior Engineer", company_id: "1" },
					{ candidate_id: "300", communication_score: "35", coding_score: "14", title: "Engineer", company_id: "2" },
					{ candidate_id: "400", communication_score: "40", coding_score: "15", title: "Engineer", company_id: "2" },
					{ candidate_id: "500", communication_score: "45", coding_score: "16", title: "Engineer", company_id: "3" },
					{ candidate_id: "600", communication_score: "50", coding_score: "17", title: "Engineer", company_id: "3" },
					{ candidate_id: "700", communication_score: "55", coding_score: "18", title: "Engineer", company_id: "1" }
				]
			},
			{
				companies: [
					{ company_id: "1", fractal_index: "0.678" },
					{ company_id: "2", fractal_index: "0.782" },
					{ company_id: "3", fractal_index: "0.795" }
				]
			}
		)
	).toEqual({ code: 33.333333333333336, com: 33.333333333333336 });
});