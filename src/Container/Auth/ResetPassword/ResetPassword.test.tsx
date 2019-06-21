import * as React from 'react';
import { shallow } from "enzyme";
import ResetPassword from './ResetPassword';

describe('<ResetPassword/>', () => {
    const props = {
        // story: {
        //     id: 'id1',
        //     title: 'test'
        // }
    }
    it('should match snapshot', () => {
        const wrapper = shallow(<ResetPassword {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should render ResetPassword', () => {
        const wrapper = shallow(<ResetPassword {...props} />)

        expect(wrapper.find('[data-test="ResetPassword"]').length).toEqual(1)
    })
})
