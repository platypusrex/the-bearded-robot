import * as types from './actionTypes';
import supplierApi from '../api/mockSupplierApi';

export function loadSuppliersSuccess(suppliers) {
	return { type: types.LOAD_SUPPLIERS_SUCCESS, suppliers};
}

export function updateSupplierSuccess(supplier) {
	return { type: types.UPDATE_SUPPLIER_SUCCESS, supplier};
}

export function createSupplierSuccess(supplier) {
	return { type: types.CREATE_SUPPLIER_SUCCESS, supplier};
}

export function deleteSupplierSuccess(supplier) {
	return { type: types.DELETE_SUPPLIER_SUCCESS, supplier };
}

export function loadSuppliers() {
	return function(dispatch) {
		return fetch(`http://localhost:3000/suppliers`)
			.then(res => res.json())
			.then(suppliers => dispatch(loadSuppliersSuccess(suppliers)))
			.catch((err) => {
				throw(err)
			});
	};
}

export function saveSupplier(supplier) {
	const apiUrl = `http://localhost:3000/suppliers${(supplier._id) ? '/' + supplier._id : ''}`;
	const fetchOptions = {
		method: (supplier._id) ? 'PUT' : 'POST',
		mode: 'cors',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(supplier)
	};

	return function(dispatch) {
		return fetch(apiUrl, fetchOptions)
			.then(res => res.json())
			.then(supplier => (supplier._id) ? dispatch(updateSupplierSuccess(supplier)) : dispatch(createSupplierSuccess(supplier)))
			.catch((err) => {
				throw(err);
			});
	};
}

export function deleteSupplier(supplier) {
	const apiUrl = `http://localhost:3000/suppliers/${supplier._id}`;
	const fetchOptions = {
		method: 'DELETE',
		mode: 'cors'
	};

	return function(dispatch) {
		return fetch(apiUrl, fetchOptions)
			.then(res => res.json())
			.then((supplier) => {
				dispatch(deleteSupplierSuccess(supplier));
			})
			.catch((err) => {
				throw(err);
			});
	};
}