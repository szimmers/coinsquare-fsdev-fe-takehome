import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateTradeFromAmount} from '../redux/actionCreators'
import './components.css';

/**
 * allows user to specify source currency and amount
 * (note: currently hardcoded to USD source)
 */
class TradeFrom extends Component {
	constructor(props) {
		super(props);

		this.state = { amount: '0' };
		this.amountUpdated = this.amountUpdated.bind(this);
	}

	componentDidMount() {
	}

	/**
	 * when user updates amount, ensure redux tracks new amount
	 * @param event
	 */
	amountUpdated(event) {
		let amount = event.target.value;

		this.setState({ amount: amount });
		this.props.updateTradeFromAmount(amount);
	}

	render() {
		return (
			<div className="tradeBlock">
				<h4 className="tradeBlockLabel">Trade</h4>

				<div className="amount">
					USD
				</div>

				<input
					className="amount"
					type="number"
					placeholder="Enter your amount"
					onChange={this.amountUpdated}
					value={this.state.amount}
				/>
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

export default connect(mapStateToProps, {updateTradeFromAmount})(TradeFrom);