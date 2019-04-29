import * as React from 'react';
import { shallow } from "enzyme";
import Story from '../Story';

describe('<Story/>', () => {
    it('should match snapshot', () => {
        const props = {
            title: 'test'
        }
        const wrapper = shallow(<Story {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
