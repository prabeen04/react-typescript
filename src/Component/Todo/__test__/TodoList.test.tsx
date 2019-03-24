import * as React from 'react';
import { shallow } from "enzyme";
import TodoList from "../TodoList";


describe('<TodoList />', () => {
    let wrapper: any;
    let props = {
        todos: [],
        deleteTodo: jest.fn,
        updateTodo: jest.fn,
        toggleTodo: jest.fn,
    }
    beforeEach(() => {
        wrapper = shallow(<TodoList {...props} />)
    })


    it('should match snapshot', (): any => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should render without crashing', () => {
        expect(wrapper.find('[data-test="TodoList"]').length).toEqual(1)
    })
})