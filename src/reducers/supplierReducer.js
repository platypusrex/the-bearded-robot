import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function supplierReducer(state = initialState.suppliers, action) {
	switch(action.type) {
		case types.LOAD_SUPPLIERS_SUCCESS:
			return action.suppliers;

		case types.UPDATE_SUPPLIER_SUCCESS:
			return [
				...state.filter(supplier => supplier._id !== action.supplier._id),
				Object.assign({}, action.supplier)
			];

		case types.CREATE_SUPPLIER_SUCCESS:
			return [
				...state,
				Object.assign({}, action.supplier)
			];

		case types.DELETE_SUPPLIER_SUCCESS:
			return [
				...state.filter(supplier => supplier._id !== action.supplier._id)
			];

		default:
			return state;
	}
}