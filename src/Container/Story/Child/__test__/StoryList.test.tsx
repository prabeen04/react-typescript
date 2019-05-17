import * as React from 'react';
import { shallow } from "enzyme";
import StoryList from '../StoryList';

describe('<StoryList/>', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<StoryList />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should render story', () => {
        const wrapper = shallow(<StoryList />)

        expect(wrapper.find('[data-test="StoryList"]').length).toEqual(1)
    })
})
