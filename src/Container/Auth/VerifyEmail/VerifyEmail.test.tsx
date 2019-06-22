import * as React from 'react';
import { shallow } from "enzyme";
import VerifyEmail from './VerifyEmail';

describe('<VerifyEmail/>', () => {
    const props = {}
    it('should match snapshot', () => {
        const wrapper = shallow(<VerifyEmail {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
