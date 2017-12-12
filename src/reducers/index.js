import { combineReducers } from 'redux';
import { companiesReducer } from './companiesReducer';
import { scoreRecordsReducer } from './scoreRecordsReducer';
import { percentileReducer } from './percentileReducer';


export default combineReducers({
	companies: companiesReducer,
	scoreRecords: scoreRecordsReducer,
	showPercentileNum: percentileReducer
});
