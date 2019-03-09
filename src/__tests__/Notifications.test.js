import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import '../../setupTests';
import Notifications from '../components/Notifications/Notifications'

describe('Notifications', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Notifications />));

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Notifications />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});