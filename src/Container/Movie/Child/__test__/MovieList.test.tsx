import * as React from 'react';
import { shallow } from "enzyme";
import MovieList from '../MovieList';

describe('<MovieList/>', () => {
    it('should match snapshot', () => {

        const wrapper = shallow(<MovieList movies={[]} />)
        expect(wrapper).toMatchSnapshot()
    })
})