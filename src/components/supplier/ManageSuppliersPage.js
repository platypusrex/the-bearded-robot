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
		this.validateFormInputs = this.validateFormInputs.bind(this);
		this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
		this.validateRequired = this.validateRequired.bind(this);
		this.validateZip = this.validateZip.bind(this);
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
		this.validateFormInputs(value, field);

		if(field === 'phone' || field === 'zip') {
			supplier[field] = value.toString();
		} else if(field === 'state'){
			supplier[field] = value.toUpperCase();
		} else {
			supplier[field] = value;
		}

		return this.setState({supplier: supplier});
	}

	updateErrorsState(errors) {
		this.setState({
			errors: Object.assign({}, errors)
		});
	}

	validateFormInputs(value, field) {
		switch (field) {
			case 'name':
				this.validateRequired(value, field);
				break;
			case 'category':
				this.validateRequired(value, field);
				break;
			case 'phone':
				this.validatePhoneNumber(value);
				break;
			case 'email':
				this.validateEmail(value);
				break;
			case 'state':
				this.validateState(value);
				break;
			case 'zip':
				this.validateZip(value);
				break;
		}
	}

	validateRequired(value, field) {
		let errors = {};
		if (value.length < 1) {
			errors.type = field;
			errors.message = `${field} is required`;
		}
		this.updateErrorsState(errors);
	}


	validatePhoneNumber(phoneNumber) {
		const validatePhone = /^\d{10}$/;
		let errors = {};
		if(validatePhone.test(phoneNumber.toString()) === false) {
			errors.type = 'phone';
			errors.message = 'phone number must be 10 digits long';
		}
		this.updateErrorsState(errors);
	}

	validateEmail(emailAddress) {
		const validateEmail = /(.+)@(.+){2,}\.(.+){2,}/;
		let errors = {};
		if(validateEmail.test(emailAddress) === false) {
			errors.type = 'email';
			errors.message = 'please enter a valid email address';
		}
		this.updateErrorsState(errors);
	}

	validateState(state) {
		const validateState = /^[a-zA-Z]{2}$/;
		let errors = {};
		if(validateState.test(state) === false) {
			errors.type = 'state';
			errors.message = 'please use state abbreviation';
		}
		this.updateErrorsState(errors);
	}

	validateZip(zip) {
		const validateZip = /^\d{5}$/;
		let errors = {};
		if(validateZip.test(zip) === false) {
			errors.type = 'zip';
			errors.message = 'please use 5 digit zip';
		}
		this.updateErrorsState(errors);
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