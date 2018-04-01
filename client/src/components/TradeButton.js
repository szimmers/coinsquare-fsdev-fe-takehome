import React, {Component} from 'react';
import {connect} from 'react-redux';
import {executeTrade} from '../redux/actionCreators'

/**
 * allows user to execute the trade w/ the quoted amount
 */
class TradeButton extends Component {
	constructor(props) {
		super(props);

		this.executeTrade = this.executeTrade.bind(this);
	}

	/**
	 * allows user to execute the trade w/ the quoted amount
	 */
	executeTrade() {
		console.log(`TRADE BUTTON: USD ${this.props.tradeFromAmount} for BTC ${this.props.tradeToQuote}`);
		this.props.executeTrade(this.props.tradeFromAmount, this.props.tradeToQuote);
	}

	render() {
		return (
			<button onClick={this.executeTrade}>
				Trade
			</button>
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
		tradeFromAmount: state.tradeFromAmount,
		tradeToQuote: state.tradeToQuote
	};
}

export default connect(mapStateToProps, {executeTrade})(TradeButton);