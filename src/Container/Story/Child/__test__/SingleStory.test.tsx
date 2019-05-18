import * as React from 'react';
import { shallow } from "enzyme";
import SingleStory from '../SingleStory';

describe('<SingleStory/>', () => {
    const props = {
        story: {
            id: 'id1',
            title: 'test'
        }
    }
    it('should match snapshot', () => {
        const wrapper = shallow(<SingleStory {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should render SingleStory', () => {
        const wrapper = shallow(<SingleStory {...props} />)

        expect(wrapper.find('[data-test="SingleStory"]').length).toEqual(1)
    })
})
