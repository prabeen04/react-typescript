import * as React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing';

describe('<Landing />', () => {
    const wrapper = shallow(<Landing />);
    const landingWrapper = wrapper.find('[data-test="Landing"]');

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

})