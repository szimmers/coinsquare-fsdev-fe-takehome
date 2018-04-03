import React from 'react';
import {shallow} from 'enzyme';

import configureStore from 'redux-mock-store'

import TradeButton from '../TradeButton'
import {executeTrade} from "../../redux/actionCreators";
import * as types from '../../redux/types';

const mockStore = configureStore();

describe('TradeButton', () => {
    let wrapper, store;

    const tradeFromAmount = 500;
    const tradeToQuote = 0.05;

    beforeEach(() => {
        const initialState = {
            tradeFromAmount,
            tradeToQuote
        };

        store = mockStore(initialState);
        wrapper = shallow(
            <TradeButton store={store} />
        );
    });

    it('should show previous trade from amount', () => {
        expect(wrapper.props().tradeFromAmount).toBe(500);
    });

    it('should kick off EXECUTE_TRADE action creator type when the trade is executed', () => {
        const expectedAction = {
            type: types.EXECUTE_TRADE,
            payload: {
                amount: tradeFromAmount,
                quote: tradeToQuote
            }
        };

        expect(executeTrade(tradeFromAmount, tradeToQuote)).toEqual(expectedAction);
    });
});
