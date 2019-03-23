import * as React from 'react';
import Tabs from '../Tabs';
import { shallow } from "enzyme";

describe('<Tabs/>', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Tabs />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should render without error', () => {
        const wrapper = shallow(<Tabs />)
        expect(wrapper.find('[data-test="Tabs"]').length).toEqual(1)
    })
    
})