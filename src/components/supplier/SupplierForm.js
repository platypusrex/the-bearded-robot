import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const SupplierForm = ({supplier, onSave, onChange, errors}) => {
	return (
		<div className="supplier-form-container">
			<div className="flex-container center-align page-header">
				<h1>Manage Suppliers</h1>
			</div>
			<div className="card">
				<div className="card-block">
					<form>
						<h3>{supplier.name || 'New Supplier'}</h3>
						<div className="row">
							<div className="col-md-6">
								<TextInput
									name="name"
									label="Name"
									placeholder="Name"
									value={supplier.name}
									onChange={onChange}
									errors={errors}/>
							</div>
							<div className="col-md-6">
								<TextInput
									name="category"
									label="Category"
									placeholder="Category"
									value={supplier.category}
									onChange={onChange}
									errors={errors}/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<TextInput
									name="phone"
									label="Phone"
									placeholder="Phone"
									value={supplier.phone.toString()}
									onChange={onChange}
									errors={errors}/>
							</div>
							<div className="col-md-6">
								<TextInput
									name="email"
									label="Email"
									placeholder="Email"
									value={supplier.email}
									onChange={onChange}
									errors={errors}/>
							</div>
						</div>
						<h6>Address</h6>
						<div className="card">
							<div className="card-block">
								<div className="row">
									<div className="col-md-6">
										<TextInput
											name="deliveryLine"
											label="Delivery Line"
											placeholder="Delivery Line"
											value={supplier.deliveryLine}
											onChange={onChange}
											errors={errors}/>
									</div>
									<div className="col-md-6">
										<TextInput
											name="city"
											label="City"
											placeholder="City"
											value={supplier.city}
											onChange={onChange}
											errors={errors}/>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<TextInput
											name="state"
											label="State"
											placeholder="State"
											value={supplier.state}
											onChange={onChange}
											errors={errors}/>
									</div>
									<div className="col-md-6">
										<TextInput
											name="zip"
											label="Zip"
											placeholder="Zip"
											value={supplier.zip.toString()}
											onChange={onChange}
											errors={errors}/>
									</div>
								</div>
							</div>
						</div>
						<button type="submit" disabled={errors && errors.type} onClick={onSave} className="btn btn-outline-primary">Save</button>
					</form>
				</div>
			</div>
		</div>
	);
};

SupplierForm.propTypes = {
	supplier: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object
};

export default SupplierForm;