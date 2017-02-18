import React, {PropTypes} from 'react';
import SupplierRow from './SupplierRow';

const SupplierList = ({suppliers, categories, onChange, name, value, defaultOption, deleteSupplier}) => {
	return (
		<div className="card">
			<div className="card-title">
				<div className="flex-container center-align card-header">
					<div className="flex-container flex-column">
						<select
							className="form-control"
							name={name}
							onChange={onChange}
							value={value}>
							<option value="">{defaultOption}</option>
							{categories.map((category) => {return <option key={category} value={category}>{category}</option>;})}
						</select>
					</div>
				</div>
			</div>
			<div className="container table-container">
			<table className="table table-responsive table-striped">
				<thead>
					<tr>
						<th>Name</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Email</th>
						<th/>
					</tr>
				</thead>
				<tbody>
				{suppliers.map(supplier =>
					(value === supplier.category || !value) && <SupplierRow key={supplier._id} supplier={supplier} onClick={deleteSupplier} />
				)}
				</tbody>
			</table>
			</div>
		</div>
	);
};

SupplierList.propTypes = {
	suppliers: PropTypes.array.isRequired,
	categories: PropTypes.array,
	onChange: PropTypes.func,
	name: PropTypes.string,
	value: PropTypes.string,
	defaultOption: PropTypes.string,
	deleteSupplier: PropTypes.func
};

export default SupplierList;