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
	tradeToQuote: 0
};

// Our root reducer starts with the initial state
// and must return a representation of the next state
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ACCOUNT_BALANCE:
			return {...state, currentTime: action.payload};

		case types.UPDATE_TRADE_FROM_AMOUNT:
			console.log('payload:', action.payload);
			return {
				...state,
				tradeFromAmount: action.payload.amount,
				quote: action.payload.quote
			};

		default:
			return state;
	}
};

export {rootReducer, initialState};