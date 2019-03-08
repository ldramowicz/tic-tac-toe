import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import '../../setupTests';
import Board from '../components/Board/Board';

describe('Board', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Board />));

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Board />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the Square Component', () => {
        expect(wrapper.containsMatchingElement(<Square />)).toEqual(true);
    });
});