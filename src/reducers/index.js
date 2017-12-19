import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { percentileReducer } from './percentileReducer';


export default combineReducers({
	data: dataReducer,
	showPercentileNum: percentileReducer
});
