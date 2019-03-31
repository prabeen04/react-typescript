import * as React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing';

describe('<Landing />', () => {

    it('should match snapshot', () => {
        const wrapper = shallow(<Landing />);
        expect(wrapper).toMatchSnapshot()
    })

    it('should render the Landing wrapper', () => {
        const wrapper = shallow(<Landing />);
        const landingWrapper = wrapper.find('[data-test="Landing"]');
        expect(landingWrapper.length).toEqual(1)
    })
})