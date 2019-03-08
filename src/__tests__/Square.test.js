import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import '../../setupTests';
import Square from '../components/Square/Square';

describe('Square', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Square />));

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Square />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});