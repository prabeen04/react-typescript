import * as React from 'react';
import useMovie from './UseMovie';
import MovieList from './Child/MovieList';
import MovieHeader from "./Child/MovieHeader";
import './Movie.css';
import Empty from '../../Component/Common/Empty';
import CircularLoading from '../../Component/Loading/CircularLoading';

export default function Movie(): JSX.Element {
    const { state, dispatch } = useMovie();
    const { fetchingMovies, fetchingMoviesError, movies, activeFilter, searchText } = state;
    if (fetchingMovies) return <CircularLoading/>
    if (fetchingMoviesError) return <Empty description='Error while fetching movies'/>
    return (
        <div className='movie-wrapper'>
            <MovieHeader
                activeFilter={activeFilter}
                searchText={searchText}
                dispatch={dispatch}
            />
            <MovieList
                movies={movies}
                searchText={searchText}
            />
        </div>
    )
}
