import React, {Component} from 'react';
import './App.css';
import AccountBalance from '../components/AccountBalance';
import TradeFrom from '../components/TradeFrom';
import TradeTo from '../components/TradeTo';
import TradeButton from '../components/TradeButton';

class App extends Component {
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
