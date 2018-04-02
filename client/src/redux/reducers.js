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
		case types.EXECUTE_TRADE: {

			let tradeAmount = action.payload.amount;
			let tradeQuote = action.payload.quote;

			//console.log(`EXECUTE: USD ${tradeAmount} for BTC ${tradeQuote}`);

			// do some error checks to ensure user can make trade
			let userIsNotOverdrawing = (tradeAmount < state.usdBalance);

			// if user can trade, proceed
			if (userIsNotOverdrawing) {
				let newUsdBalance = state.usdBalance - tradeAmount;
				let newBtcBalance = state.btcBalance + tradeQuote;

				// after executing the trade, we need to recheck the trade amount vs the new
				// balance in order to propertly set the canTrade flag. if it's no good, the user
				// will be forced to update the trade amount in order to trade again.
				let canTrade = (tradeAmount < newUsdBalance);

				return {...state, usdBalance: newUsdBalance, btcBalance: newBtcBalance, canTrade: canTrade};
			}

			// uh-oh, don't do trade and set flag
			return {...state, canTrade: false};
		}

		case types.UPDATE_TRADE_FROM_AMOUNT: {

			// do error checking to ensure user can make trade. state var canTrade tracks this.
			let userHasPositiveFromBalance = (state.usdBalance > 0);
			let userHasEnteredNumericAmount = !isNaN(parseFloat(action.payload.amount));
			let userIsNotOverdrawing = (action.payload.amount < state.usdBalance);
			let userHasEnteredPositiveTradingAmount = (action.payload.amount > 0);

			let canTrade = userHasPositiveFromBalance && userHasEnteredNumericAmount &&
				userIsNotOverdrawing && userHasEnteredPositiveTradingAmount;

			/*
			console.log(`userHasPositiveFromBalance: ${userHasPositiveFromBalance}`);
			console.log(`userHasEnteredNumericAmount: ${userHasEnteredNumericAmount}`);
			console.log(`userIsNotOverdrawing: ${userIsNotOverdrawing}`);
			console.log(`userHasEnteredPositiveTradingAmount: ${userHasEnteredPositiveTradingAmount}`);
			console.log(`canTrade: ${canTrade}`);
			*/

			return {
				...state,
				tradeFromAmount: action.payload.amount,
				tradeToQuote: action.payload.quote,
				canTrade: canTrade
			};
		}

		default:
			return state;
	}
};

export {rootReducer, initialState};