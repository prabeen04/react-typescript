import * as React from 'react';
import useMovie from './UseMovie';
import MovieList from './Child/MovieList';
import MovieHeader from "./Child/MovieHeader";
import './Movie.css';

export default function Movie(): JSX.Element {
    const { state, dispatch } = useMovie();
    const { fetchingMovies, fetchingMoviesError, movies, activeFilter, searchText } = state;
    console.log(state)
    if (fetchingMovies) {
        return (
            <div className="flex-container center-align-row" style={{ width: '100%', padding: 100 }}>
                <div className="loading"></div>
            </div>
        )
    }
    if (fetchingMoviesError) {
        return <h3>Error fetvhing movies</h3>
    }
    return (
        <div className='movie-wrapper'>
            <MovieHeader
                activeFilter={activeFilter}
                searchText={searchText}
                dispatch={dispatch}
            />
            <MovieList movies={movies} />
        </div>
    )
}
