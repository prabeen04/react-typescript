import * as React from 'react';
import { shallow } from "enzyme";
import Todo from "../Todo";

describe('<Todo />', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallow(<Todo />)
    })

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})