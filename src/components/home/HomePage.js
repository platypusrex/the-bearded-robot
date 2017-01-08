import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>The Bearded Robot</h1>
				<p>Bots with beards my friend. It's a brave new world.</p>
				<Link to="/about" className="btn btn-success">Learn More</Link>
			</div>
		);
	}
}

export default HomePage;