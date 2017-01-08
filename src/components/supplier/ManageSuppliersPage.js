import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as supplierActions from '../../actions/supplierActions';
import SupplierForm from './SupplierForm';
import toastr from 'toastr';

class ManageSuppliersPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			supplier: Object.assign({}, props.supplier),
			errors: {}
		};

		this.updateSupplierState = this.updateSupplierState.bind(this);
		this.saveSupplier = this.saveSupplier.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.supplier.id !== nextProps.supplier.id) {
			this.setState({supplier: Object.assign({}, nextProps.supplier)});
		}
	}

	updateSupplierState(event) {
		const value = event.target.value;
		const field = event.target.name;
		let supplier = this.state.supplier;


		if(field === 'phone' || field === 'zip') {
			supplier[field] = value.toString();
		} else {
			supplier[field] = value;
		}

		return this.setState({supplier: supplier});
	}

	saveSupplier(event) {
		event.preventDefault();
		let supplier = this.state.supplier;
		if(supplier.phone && typeof supplier.phone !== 'number') {
			supplier.phone = parseInt(supplier.phone);
		}

		this.props.actions.saveSupplier(supplier)
			.then(() => this.redirect())
			.catch((error) => {
				toastr.error(error);
			});
	}

	redirect() {
		toastr.success('Supplier Saved');
		this.context.router.push('/suppliers');
	}

	render() {
		return (
			<SupplierForm
				supplier={this.state.supplier}
				onChange={this.updateSupplierState}
				onSave={this.saveSupplier}
				errors={this.state.errors}/>
		);
	}
}

ManageSuppliersPage.propTypes = {
	supplier: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

ManageSuppliersPage.contextTypes = {
	router: PropTypes.object
};

function getSupplierById(suppliers, supplierId) {
	const supplierNew =  suppliers.filter(supplier => {
		return supplier.id === supplierId;
	})[0];

	return (supplierNew) ? supplierNew : null;
}

function mapStateToProps(state, ownProps) {
	const supplierId = ownProps.params.id;
	let supplier = { name: '', address: '', phone: '', email: '', category: '' };

	if(supplierId && state.suppliers.length > 0) {
		supplier = getSupplierById(state.suppliers, supplierId);
	}

	return {
		supplier: supplier
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(supplierActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSuppliersPage);