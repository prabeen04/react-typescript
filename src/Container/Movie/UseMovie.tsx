import * as React from 'react';
import * as types from "./MovieActionTypes";
import { IMovie } from "./MovieInterface";

interface IUseMovie {
    fetchingMovies: boolean;
    fetchingMoviesError: boolean;
    movies: IMovie[];
}
export interface IAction {
    type: string;
    payload?: any
}
const initialState = {
    fetchingMovies: false,
    fetchingMoviesError: false,
    movies: [],
}

export default function useMovie() {
    console.log(process)
    console.log(process.env)
    console.log(process.env.TMDB_API_KEY)
    const [state, dispatch] = React.useReducer(movieReducer, initialState);
    const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
    const controller = new AbortController();
    const signal = controller.signal;
    React.useEffect(() => {
        dispatch({ type: types.GET_MOVIES_REQUEST })
        fetch(API_URL, {
            method: 'GET',
            signal
        })
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

        return () => controller.abort();
    }, [])
    return { state, dispatch }
}
function movieReducer(state: IUseMovie, action: IAction) {
    switch (action.type) {
        case types.GET_MOVIES_REQUEST:
            return { ...state, fetchingMovies: true, fetchingMoviesError: false }
        case types.GET_MOVIES_SUCCESS:
            return { ...state, fetchingMovies: false, fetchingMoviesError: false, movies: action.payload }
        case types.GET_MOVIES_FAILURE:
            return { ...state, fetchingMovies: false, fetchingMoviesError: true }
        default:
            return state;
    }
}