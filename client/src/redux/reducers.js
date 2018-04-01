import * as types from './types';

/**
 * for prototype, initialize the user's holdings here. note that we're also working
 * w/ a default, un-authed user.
 * @type {{usdBalance: number, btcBalance: number}}
 */
const initialState = {
	usdBalance: 156.12,
	btcBalance: 0,
	tradeFromAmount: 0,
	tradeToQuote: 0,
	canTrade: false
};

/**
 * for this simple prototype, all the reducers are located in this root reducer
 * @param state
 * @param action
 * @returns {*}
 */
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.EXECUTE_TRADE:
			let tradeAmount = action.payload.amount;
			let tradeQuote = action.payload.quote;

			console.log(`EXECUTE: USD ${tradeAmount} for BTC ${tradeQuote}`);

			let newUsdBalance = state.usdBalance - tradeAmount;
			let newBtcBalance = state.btcBalance + tradeQuote;

			return {...state, usdBalance: newUsdBalance, btcBalance: newBtcBalance};

		case types.UPDATE_TRADE_FROM_AMOUNT:
			console.log('payload:', action.payload);

			let userHasPositiveFromBalance = (state.usdBalance > 0);
			let userHasEnteredNumericAmount = !isNaN(parseFloat(action.payload.amount));
			let userIsNotOverdrawing = (action.payload.amount < state.usdBalance);

			let canTrade = userHasPositiveFromBalance && userHasEnteredNumericAmount && userIsNotOverdrawing;

			return {
				...state,
				tradeFromAmount: action.payload.amount,
				tradeToQuote: action.payload.quote,
				canTrade: canTrade
			};

		default:
			return state;
	}
};

export {rootReducer, initialState};