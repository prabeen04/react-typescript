import * as React from 'react';
import { IMovie } from "./MovieInterface";
import useMovie from './UseMovie';

const IMG_URL = 'http://image.tmdb.org/t/p/w185/'
export default function Movie() {
    const { state, dispatch } = useMovie();
    const { fetchingMovies, fetchingMoviesError, movies } = state;
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
        <div style={{ height: 200 }}>
            {movies.map((movie: IMovie) => {
                return <>
                    <p>{movie.original_title}</p>
                    <img src={`${IMG_URL}${movie.poster_path}`} alt="" />
                </>
            })}
        </div>
    )
}
