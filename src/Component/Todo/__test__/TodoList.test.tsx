import * as React from 'react';
import { shallow } from "enzyme";
import TodoList from "../TodoList";


describe('<TodoList />', () => {
    let wrapper;
    let props = {
        todos: [],
        deleteTodo: jest.fn,
        updateTodo: jest.fn,
        toggleTodo: jest.fn,
    }
    beforeEach(() => {
        wrapper = shallow(<TodoList {...props} />)
    })
})