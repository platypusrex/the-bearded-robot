import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import SuppliersPage from './components/supplier/SuppliersPage';
import ManageSuppliersPage from './components/supplier/ManageSuppliersPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/suppliers" component={SuppliersPage}/>
		<Route path="/supplier" component={ManageSuppliersPage}/>
		<Route path="/supplier/:id" component={ManageSuppliersPage}/>
	</Route>
);