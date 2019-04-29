import * as React from 'react';
import { shallow, mount } from "enzyme";
import MovieList from '../MovieList';
import { IMovie } from "../../MovieInterface";

const movieListProps: IMovie[] = [{
    adult: false,
    backdrop_path: "/h3KN24PrOheHVYs9ypuOIdFBEpX.jpg",
    genre_ids: [16, 10751, 12],
    id: 166428,
    original_language: "en",
    original_title: "How to Train Your Dragon: The Hidden World",
    overview: "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
    popularity: 470.427,
    poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    release_date: "2019-01-03",
    title: "How to Train Your Dragon: The Hidden World",
    video: false,
    vote_average: 7.7,
    vote_count: 1230,
}]
describe('<MovieList/>', () => {
    it('should match snapshot', () => {

        const wrapper = mount(<MovieList movies={movieListProps} searchText=''/>)
        expect(wrapper).toMatchSnapshot()
    })
    it('should render Movielist', () => {
        const wrapper = shallow(<MovieList movies={[]}  searchText=''/>)
        const movieList = wrapper.find('[data-test="MovieList"]')
        expect(movieList.length).toEqual(1)
    })
    it('should recieve correct props', () => {
        const wrapper = mount(<MovieList movies={movieListProps}  searchText=''/>)
        expect(wrapper.prop('movies')).toEqual(movieListProps)
    })
    it('should recieve only 1 moviedetail', () => {
        const wrapper = mount(<MovieList movies={movieListProps} searchText=''/>)
        expect(wrapper.prop('movies').length).toEqual(1)
    })
})