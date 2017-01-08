import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
	return (
		<nav className="tbr-nav">
			<div className="flex-container center-align">
				<h6>The Bearded Robot</h6>
				<IndexLink to="/" activeClassName="active">Home</IndexLink>
				{" | "}
				<Link to="/about" activeClassName="active">About</Link>
				{" | "}
				<Link to="/suppliers" activeClassName="active">Suppliers</Link>
			</div>
		</nav>

	);
};

export default Header;