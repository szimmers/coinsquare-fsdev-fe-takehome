import React, {Component} from 'react';
import {connect} from 'react-redux';

class AccountBalance extends Component {
	componentWillMount() {
	}

	render() {
		return (
			<div>
				<h3>Account Balance</h3>

				<label>
					USD:
					<span>{this.props.usdBalance}</span>
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
/*
*/