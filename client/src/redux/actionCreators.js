import axios from 'axios';
import * as types from './types';

/*
export const fetchNewTime = () => ({
	type: types.GET_ACCOUNT_BALANCE,
	payload: new Date().toString(),
});

export const getQuote = (symbol) => ({
	type: types.GET_QUOTE,
	payload: symbol
});
*/

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
				console.log('r:', response.data);
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
				console.log('e:', error);
			});
	}
};
