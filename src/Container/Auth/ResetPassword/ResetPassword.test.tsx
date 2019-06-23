import * as React from 'react';
import { shallow } from "enzyme";
import ResetPassword from './ResetPassword';

describe('<ResetPassword/>', () => {
    const props = {}
    it('should match snapshot', () => {
        const wrapper = shallow(<ResetPassword {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should render once', () => {
        const wrapper = shallow(<ResetPassword />)
        expect(wrapper.find('[data-test = "ResetPassword"]').length).toEqual(1)
    })
})
