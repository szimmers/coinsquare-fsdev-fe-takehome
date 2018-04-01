import * as types from './types';

// Initial (starting) state
const initialState = {
	usdBalance: 156.12,
	btcBalance: 0
};

// Our root reducer starts with the initial state
// and must return a representation of the next state
const rootReducer = (state = initialState, action) => {
	return state;
};

export {rootReducer, initialState};