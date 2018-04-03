import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// configuring React 16 to work w/ enzyme based on instructions here:
// http://airbnb.io/enzyme/docs/installation/index.html
configure({ adapter: new Adapter() });