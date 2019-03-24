import * as React from 'react';
import { shallow } from "enzyme";
import TodoList from "../TodoList";


describe('<TodoList />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TodoList />)
    })
})