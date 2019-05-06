import * as React from 'react';
import { shallow } from "enzyme";
import StoryList from '../StoryList';

describe('<StoryList/>', () => {
    const props = {
        title: 'test'
    }
    it('should match snapshot', () => {
        const wrapper = shallow(<StoryList {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should render story', () => {
        const wrapper = shallow(<StoryList {...props} />)

        expect(wrapper.find('[data-test="StoryList"]').length).toEqual(1)
    })
})
