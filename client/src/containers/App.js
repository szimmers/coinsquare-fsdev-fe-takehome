import React, {Component} from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import './App.css';
import AccountBalance from '../components/AccountBalance';

class App extends Component {
	componentWillMount() {
		axios.get('/api/quote/btcusd')
			.then(function (response) {
				console.log('r:', response.data);
			})
			.catch(function (error) {
				console.log('e:', error);
			});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<AccountBalance />
			</div>
		);
	}
}

export default App;
