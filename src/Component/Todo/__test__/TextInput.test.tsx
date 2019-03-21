import * as React from 'react';
import { shallow } from "enzyme";
import TextInput from '../TextInput';

describe('<TextInput />', () => {
    it('should match snapshot', () => {
        const props = {
            name: '',
            value: '',
            onChange: jest.fn()

        }
        const wrapper = shallow(<TextInput {...props} />)
        expect(wrapper).toMatchSnapshot()

    })
})