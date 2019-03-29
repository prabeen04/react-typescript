import * as React from 'react';
import Counter from '../Counter';
import { shallow } from "enzyme";

describe('<Counter/>', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Counter />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should render counter', () => {
        const wrapper = shallow(<Counter />)
        expect(wrapper.find('[data-test="Counter"]').length).toEqual(1)
    })
    it('should increment counter', () => {
        const wrapper = shallow(<Counter />)
        const incrementButton = wrapper.find('[data-test="increment-button"]')
        const counterDisplay = wrapper.find('[data-test="counter-display"]')
        expect(incrementButton.length).toEqual(1);
        incrementButton.simulate('click');
        // incrementButton.props().      
        expect(counterDisplay.text()).toEqual('0')
    })
})