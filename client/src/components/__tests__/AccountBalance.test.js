import React from 'react';
import {shallow} from 'enzyme';

import configureStore from 'redux-mock-store'

import AccountBalance from '../AccountBalance'

// mocking store and connecting it to component based on instructions here:
// https://hackernoon.com/unit-testing-redux-connected-components-692fa3c4441c
const initialState = {};

const mockStore = configureStore();
let connectedComponent;
let store;

beforeEach(() => {
    store = mockStore(initialState);
    connectedComponent = shallow(<AccountBalance store={store}/>)

});

it('renders without crashing', () => {
    expect((connectedComponent).exists(<div className='balanceBlock'></div>)).toBe(true)
});
