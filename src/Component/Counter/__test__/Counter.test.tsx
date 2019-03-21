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
})