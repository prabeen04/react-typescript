import * as React from 'react';
import { shallow } from "enzyme";
import Fetch from '../Fetch';

describe('<Fetch/>', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Fetch/>);
        expect(wrapper).toMatchSnapshot()
    })
})