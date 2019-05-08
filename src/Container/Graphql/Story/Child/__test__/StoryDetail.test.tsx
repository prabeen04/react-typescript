import * as React from 'react';
import { shallow } from "enzyme";
import StoryDetail from '../StoryDetail';

describe('<StoryDetail/>', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<StoryDetail />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should render story', () => {
        const wrapper = shallow(<StoryDetail />)
        expect(wrapper.find('[data-test="StoryDetail"]').length).toEqual(1)
    })
})
