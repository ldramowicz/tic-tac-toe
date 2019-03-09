import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import '../../setupTests';
import Board from '../components/Board/Board';
import Square from '../components/Square/Square';
import Notifications from '../components/Notifications/Notifications';

describe('Board', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Board />));

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Board />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

/*    it('should render a <div />', () => {
        expect(wrapper.find('div className="Board"').length).toEqual(1);
    });*/

    it('should render the Square Component', () => {
        expect(wrapper.containsMatchingElement(<Square />)).toEqual(true);
    });

    it('should render 9 Square Components', () => {
        expect(wrapper.find('Square').length).toEqual(9);
    });

    it('root element should have a "Board" class', () => {
        expect(wrapper.hasClass('Board')).toEqual(true);
    });

    it('should render the Notifications Component', () => {
        expect(wrapper.containsMatchingElement(<Notifications />)).toEqual(true);
    });
});