import * as React from 'react';
import { animated } from "react-spring";
import { IMovie } from "../MovieInterface";
import MovieCard from './MovieCard';
import Empty from '../../../Component/Common/Error';

interface IMovieListProps {
    movies: IMovie[];
    searchText: string;
}
export default function MovieList(props: IMovieListProps): JSX.Element {
    const { movies, searchText } = props;
    if(!movies.filter((movie: IMovie) => movie.title && movie.title.toLowerCase().includes(searchText.toLowerCase())).length)
    return <Empty description='No movies found' iconType='fas fa-folder-open' />
    return (
        <animated.div>
            <div className='movie-list' data-test='MovieList'>
                {movies && movies
                    .filter((movie: IMovie) => movie.title && movie.title.toLowerCase().includes(searchText.toLowerCase()))
                    .map((movie: IMovie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </animated.div>
    )
}
