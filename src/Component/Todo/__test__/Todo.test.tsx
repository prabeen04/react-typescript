import * as React from 'react';
import { shallow } from "enzyme";
import Todo from "../Todo";

describe('<Todo />', () => {
    let wrapper: any;
    let props = {
        title: '',
        isCompleted: false,
        id: 1,
    }

    beforeEach(() => {
        wrapper = shallow(<Todo />)
    })
})