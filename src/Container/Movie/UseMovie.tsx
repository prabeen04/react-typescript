import * as React from 'react';
import { TMDB_API_KEY } from '../../Config/Keys'
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