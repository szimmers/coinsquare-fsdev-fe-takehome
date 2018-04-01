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
		const {tradeFromAmount, tradeToQuote} = this.props;
		this.props.executeTrade(tradeFromAmount, tradeToQuote);
	}

	render() {
		return (
			<button
				onClick={this.executeTrade}
				disabled={!this.props.canTrade}
			>
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
		tradeToQuote: state.tradeToQuote,
		canTrade: state.canTrade
	};
}

export default connect(mapStateToProps, {executeTrade})(TradeButton);