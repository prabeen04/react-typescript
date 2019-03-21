import * as React from 'react';
import { shallow } from "enzyme";
import Navbar from '../Navbar';

describe('<Navbar />', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Navbar />)
        expect(wrapper).toMatchSnapshot()
    })


    it('should render without error', () => {
        const wrapper = shallow(<Navbar />)
        expect(wrapper.find('[data-test="Navbar"]').length).toEqual(1)
    })
})