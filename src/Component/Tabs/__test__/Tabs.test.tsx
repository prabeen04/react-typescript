import * as React from 'react';
import Tabs from '../Tabs';
import { shallow } from "enzyme";

describe('<Tabs/>', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Tabs />)
        expect(wrapper).toMatchSnapshot()
    })
})