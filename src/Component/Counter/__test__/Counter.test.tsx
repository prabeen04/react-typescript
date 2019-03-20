import * as React from 'react';
import Counter from '../Counter';
import { shallow } from "enzyme";

describe('<Counter/>', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Counter />)
        expect(wrapper).toMatchSnapshot()
    })
})