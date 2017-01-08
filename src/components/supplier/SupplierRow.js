import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SupplierRow = ({supplier, onClick}) => {
	let address = `${supplier.deliveryLine}, ${supplier.city}, ${supplier.state} ${supplier.zip}`;
	return (
		<tr>
			<td><Link to={'/supplier/' + supplier.id}>{supplier.name}</Link></td>
			<td>{address}</td>
			<td>{supplier.phone}</td>
			<td>{supplier.email}</td>
			<td><button className="btn btn-sm btn-outline-danger" data-id={supplier.id} onClick={onClick}>Delete</button></td>
		</tr>
	);
};

SupplierRow.propTypes = {
	supplier: PropTypes.object.isRequired,
	onClick: PropTypes.func
};

export default SupplierRow;