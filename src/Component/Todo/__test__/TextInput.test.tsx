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
    it('should render counter', () => {
        const props = {
            name: '',
            value: '',
            onChange: jest.fn()
        }
        const wrapper = shallow(<TextInput {...props} />)
        expect(wrapper.find('[data-test="TextInput"]').length).toEqual(1)
    })
    it('should render counter', () => {
        const props = {
            name: 'name',
            value: '',
            onChange: jest.fn()
        }
        const wrapper = shallow(<TextInput name='input' {...props} />)
        expect(wrapper.props().name).toEqual(undefined)
    })
})