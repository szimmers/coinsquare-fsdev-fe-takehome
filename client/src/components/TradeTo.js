import React, {Component} from 'react';
import {connect} from 'react-redux';
import './components.css';

/**
 * allows user to specify destination currency and see quote
 * (note: currently hardcoded to BTC destination)
 */
class TradeTo extends Component {
	render() {
		return (
			<div className="tradeBlock">
				<h4 className="tradeBlockLabel">For</h4>

				<div className="amount">
					BTC
				</div>

				<div className="amount">
					{this.props.tradeToQuote}
				</div>
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
		tradeToQuote: state.tradeToQuote
	};
}

export default connect(mapStateToProps)(TradeTo);