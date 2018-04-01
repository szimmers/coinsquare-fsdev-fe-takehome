import React, {Component} from 'react';
import {connect} from 'react-redux';
import './components.css';

/**
 * displays the user's account balances for holdings in each of USD and BTC.
 */
class AccountBalance extends Component {
	render() {
		return (
			<div className="balanceBlock">
				<h3>Account Balance</h3>

				<label>
					USD:
					<span>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(this.props.usdBalance)}
					</span>
				</label>

				<br/>
				<label>
					BTC:
					<span>{this.props.btcBalance}</span>
				</label>
			</div>
		);
	}
}

/**
 * for getting app state into component
 * @param state
 * @returns {{posts: *|Function}}
 */
function mapStateToProps(state) {
	return {
		usdBalance: state.usdBalance,
		btcBalance: state.btcBalance
	};
}

export default connect(mapStateToProps)(AccountBalance);
