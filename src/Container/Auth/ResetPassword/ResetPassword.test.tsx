import * as React from 'react';
import { shallow } from "enzyme";
import ResetPassword from './ResetPassword';

describe('<ResetPassword/>', () => {
    const props = {}
    it('should match snapshot', () => {
        const wrapper = shallow(<ResetPassword {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
