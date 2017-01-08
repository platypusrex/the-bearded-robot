import {combineReducers} from 'redux';
import suppliers from './supplierReducer';

const rootReducer = combineReducers({
	suppliers
});

export default rootReducer;