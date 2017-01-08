import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as supplierActions from '../../actions/supplierActions';
import SupplierList from './SupplierList';
import toastr from 'toastr';

class SuppliersPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			selectedCategory: this.props.selectedCategory
		};

		this.redirectToAddSupplierPage = this.redirectToAddSupplierPage.bind(this);
		this.onSupplierListFilterChange = this.onSupplierListFilterChange.bind(this);
		this.deleteSupplier = this.deleteSupplier.bind(this);
	}

	redirectToAddSupplierPage() {
		browserHistory.push('/supplier');
	}

	onSupplierListFilterChange(event) {
		return this.setState({selectedCategory: event.target.value});
	}

	deleteSupplier(event) {
		let supplier = this.getSupplierById(event.target.dataset.id);

		if(supplier) {
			this.props.actions.deleteSupplier(supplier)
				.then(() => {
					toastr.success('Supplier Removed');
				})
				.catch(error => {
					toastr.error(error);
				});
		} else {
			toastr.error('There was an issue finding the supplier record');
		}
	}

	getSupplierById(supplierId) {
		let suppliers = this.props.suppliers;

		return suppliers.filter(supplier => {
			return supplier.id === supplierId;
		})[0];
	}

	render() {
		const {suppliers} = this.props;
		const {categories} = this.props;

		return (
			<div className="suppliers-page-container">
				<div className="flex-container center-align page-header">
					<h1>Suppliers</h1>
					<button
						type="submit"
						onClick={this.redirectToAddSupplierPage}
						className="btn btn-outline-primary">Add Supplier</button>
				</div>
				<SupplierList
					suppliers={suppliers}
					categories={categories}
					name="categories"
					onChange={this.onSupplierListFilterChange}
					deleteSupplier={this.deleteSupplier}
					value={this.state.selectedCategory}
					defaultOption="All"/>
			</div>
		);
	}
}

SuppliersPage.propTypes = {
	suppliers: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	categories: PropTypes.array,
	selectedCategory: PropTypes.string
};

function getSupplierCategories(suppliers) {
	return [...new Set(suppliers.map(supplier => { return supplier.category; }))];
}

function mapStateToProps(state, ownProps) {
	const categories = getSupplierCategories(state.suppliers);

	return {
		suppliers: state.suppliers,
		categories: categories
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(supplierActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SuppliersPage);