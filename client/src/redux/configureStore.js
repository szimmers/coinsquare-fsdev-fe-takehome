import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {rootReducer, initialState} from './reducers'

export const configureStore = () => {
	const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));

	return store;
};

export default configureStore;
