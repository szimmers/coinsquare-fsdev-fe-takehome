import React from 'react';
import {shallow} from 'enzyme';

import App from './containers/App';

it('renders without crashing', () => {
    expect(shallow(<App/>).exists(<div className='App'></div>)).toBe(true)
});
