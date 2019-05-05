import * as React from 'react';
import { shallow } from "enzyme";
import SingleStory from '../SingleStory';

describe('<SingleStory/>', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<SingleStory />)
        expect(wrapper).toMatchSnapshot()
    })
})
