import * as React from 'react';
import { TMDB_API_KEY } from '../../Config/Keys'
import * as types from "./MovieActionTypes";
const initialState = {
    fetchingMovies: false,
    fetchingMoviesError: false,
    movies: [],
}

export default function useMovie() {
    const [state, dispatch] = React.useReducer(movieReducer, initialState);
    const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`;
    
    React.useEffect(() => {
        dispatch({ type: types.GET_MOVIES_REQUEST })
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch({
                    type: types.GET_MOVIES_SUCCESS,
                    payload: data.results
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: types.GET_MOVIES_REQUEST })
            })
    }, [])
    return { state, dispatch }
}
function movieReducer(state: any, action: any) {
    return state
}