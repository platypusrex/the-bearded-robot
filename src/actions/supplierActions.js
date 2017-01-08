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
		return supplierApi.getAllSuppliers().then(suppliers => {
			dispatch(loadSuppliersSuccess(suppliers));
		}).catch((error) => {
			throw(error);
		});
	};
}

export function saveSupplier(supplier) {
	return function(dispatch) {
		return supplierApi.saveSupplier(supplier).then(savedSupplier => {
			supplier.id ? dispatch(updateSupplierSuccess(savedSupplier)) : dispatch(createSupplierSuccess(savedSupplier));
		}).catch((error) => {
			throw(error);
		});
	};
}

export function deleteSupplier(supplier) {
	return function(dispatch) {
		return supplierApi.deleteSupplier(supplier).then(supplier => {
			dispatch(deleteSupplierSuccess(supplier));
		}).catch((error) => {
			throw(error);
		});
	};
}