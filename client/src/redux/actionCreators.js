import axios from 'axios';
import * as types from './types';

/**
 * the user is executing the trade for the given amount and quote. as this is a
 * protype, we will not be going to the server to execute this trade or verifying
 * that the quote is still valid. instead, we will simply be updating the balances
 * for the holdings.
 * @param amount
 * @param quote
 * @returns {{type: string, payload: {amount: *, quote: *}}}
 */
export const executeTrade = (amount, quote) => ({
	type: types.EXECUTE_TRADE,
	payload: {
		amount: amount,
		quote: quote
	}
});

/**
 * when user updates his trade-from amount, also get the quote so the payload
 * has his amount and the resultant quote
 * @param amount
 * @returns {function(*)}
 */
export const updateTradeFromAmount = (amount) => {
	return (dispatch) => {
		let url = `/api/quote/btcusd/${amount}`;

		axios.get(url)
			.then(function (response) {
				let quote = response.data.quote;

				dispatch({
					type: types.UPDATE_TRADE_FROM_AMOUNT,
					payload: {
						amount: amount,
						quote: quote
					}
				});
			})
			.catch(function (error) {
				// if there's an error in the quote (e.g. bad user input), zero out everything
				dispatch({
					type: types.UPDATE_TRADE_FROM_AMOUNT,
					payload: {
						amount: 0,
						quote: 0
					}
				});
			});
	}
};
