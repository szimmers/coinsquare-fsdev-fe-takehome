import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import AccountBalance from '../components/AccountBalance';
import TradeFrom from '../components/TradeFrom';
import TradeTo from '../components/TradeTo';
import TradeButton from '../components/TradeButton';

class App extends Component {
	componentWillMount() {
		axios.get('/api/ticker/btcusd')
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
				<AccountBalance />
				<TradeFrom />
				<TradeTo />
				<TradeButton />
			</div>
		);
	}
}

export default App;
