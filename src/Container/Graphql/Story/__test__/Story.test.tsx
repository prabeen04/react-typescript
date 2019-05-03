import * as React from 'react';
import { shallow } from "enzyme";
import Story from '../Story';

describe('<Story/>', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Story />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should render story', () => {
        const wrapper = shallow(<Story />)
        expect(wrapper.find('[data-test="Story"]').length).toEqual(1)
    })
})
