/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './js/components/NavBar';
import HomePage from './js/pages/HomePage';
import {HashRouter,Switch,Route} from 'react-router-dom';
import MyAccountPage from './js/pages/MyAccountPage';
// start the Stimulus application
import './bootstrap';

const App = () => {
	return <HashRouter>
		<NavBar />
		<main className="container pt-5">
			<Switch>
				<Route path="/my-account" component={MyAccountPage}/>
				<Route path="/" component={HomePage}/>
			</Switch>
		</main>
		</HashRouter>
	;
}
const rootElement = document.querySelector('#app');
ReactDom.render(<App/>,rootElement);
