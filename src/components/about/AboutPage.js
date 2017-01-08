import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
	render() {
		return (
			<div>
				<h1>About</h1>
				<div className="info-container">
					<section className="section-wrapper">
						<h5>Intro</h5>
						<p>
							Ok...so, nothing special here. Just your basic CRUD style app built with React and Redux.
							Here's a few things worth sharing but not super important. So if your already bored, just
							skip this and head on over to the <Link to="/suppliers">suppliers page</Link> and get started.
						</p>
					</section>
					<section className="section-wrapper">
						<h5>Notes</h5>
						<p>
							The app allows the user to read a list of TheBearded Robot's Suppliers, filter that list
							via the supplier's category, update the existing records and each property on the record
							(well...not the id), create new records/suppliers, and delete the supplier if desired.
						</p>
						<p>
							Nothing special happening here. Not much attention to UI, just initial setup for getting
							started with Sass and some base styling. I've incorporated the Bootstrap framework but very little
							styling what-so-ever. There are some obvious UX issues, but as time is somewhat of the essence,
							some of those concerns were overlooked for the time being. Each CRUD operation should perform
							as requested with some indication to the user as to whether the operation completed successfully.
						</p>
					</section>
					<section className="section-wrapper">
						<h5>Dev Environment</h5>
						<ul>
							<li>Transpiling via <strong>Babel</strong></li>
							<li>bundling via <strong>Webpack</strong></li>
							<li>linting via <strong>ESLint</strong></li>
							<li>serving the app via <strong>Express</strong></li>
							<li>tying it all together via <strong>npm scripts</strong></li>
						</ul>e
					</section>
					<section className="section-wrapper">
						<h5>API</h5>
						<p>
							What!? You built out an API for this! Well....no. But I did write a script to
							simulate calls to an API. Even added a delay via setTimeout to sim waiting for a response
							from the server. There's also a little script for generating some unique id's for newly
							created records. Check it out in the <code>/api</code> directory.
						</p>
					</section>
					<section className="section-wrapper">
						<h5>Getting Started</h5>
						<p>
							Install dependencies -> <strong>npm install</strong><br/>
							Start the server -> <strong>npm start</strong>
						</p>
						<p>Good to go!</p>
					</section>
				</div>
			</div>
		);
	}
}

export default AboutPage;