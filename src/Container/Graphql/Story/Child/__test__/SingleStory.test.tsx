import * as React from 'react';
import { shallow } from "enzyme";
import SingleStory from '../SingleStory';

describe('<SingleStory/>', () => {
    const props = {
        title: 'test'
    }
    it('should match snapshot', () => {
        const wrapper = shallow(<SingleStory {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
