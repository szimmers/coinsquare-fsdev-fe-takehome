import React, {Component} from 'react';
import {connect} from 'react-redux';

/**
 * allows user to specify destination currency and see quote
 * (note: currently hardcoded to BTC destination)
 */
class TradeTo extends Component {
	render() {
		return (
			<div>
				<h3>For</h3>

				<select>
					<option value="BTC">BTC</option>
				</select>

				<br/>

				<div>
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