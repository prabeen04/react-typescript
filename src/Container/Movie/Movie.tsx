import * as React from 'react'
import useMovie from './UseMovie';

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
            {movies.map((movie: any) => <p>{movie.original_title}</p>)}
        </div>
    )
}
