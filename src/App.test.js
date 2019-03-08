import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import '../setupTests';
import App from './App';
import Board from './components/Board/Board';

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the Board Component', () => {
        expect(wrapper.containsMatchingElement(<Board />)).toEqual(true);
    });
});