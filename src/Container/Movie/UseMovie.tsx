import * as React from 'react';
import * as types from "./MovieActionTypes";
import { IMovie } from "./MovieInterface";

interface IUseMovie {
    fetchingMovies: boolean;
    fetchingMoviesError: boolean;
    movies: IMovie[];
    activeFilter: string;
    searchText: string;
}
export interface IAction {
    type: string;
    payload?: any
}
const initialState = {
    fetchingMovies: false,
    fetchingMoviesError: false,
    movies: [],
    activeFilter: 'default',
    searchText: '',
}

export default function useMovie() {
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
        case types.SET_MOVIE_FILTER:
            return { ...state, activeFilter: action.payload, movies: sortMoviesByActiveFilter(state.movies, action.payload) }
        case types.SET_FILTER_TEXT:
            return {
                ...state, searchText: action.payload,
                movies: filterMovieBySearchText(state.movies, action.payload)
            }
        default:
            return state;
    }
}

/**
 * sort movies based on the active filter provided
 */
function sortMoviesByActiveFilter(movies: IMovie[], filter: string) {
    if (filter === 'top-rated') {
        return movies.sort((a, b) => a.vote_average < b.vote_average ? 1 : -1)
    }
    if (filter === 'most-loved') {
        return movies.sort((a, b) => a.vote_count < b.vote_count ? 1 : -1)
    }
    if (filter === 'new-arrival') {
        return movies.sort((a, b) => a.release_date < b.release_date ? 1 : -1)
    }
    return movies
}

/**
 * sort movies based on the active filter provided
 */
function filterMovieBySearchText(movies: IMovie[], searchText: string) {
    const newMovies = [...movies]
    if (!searchText) {
        return newMovies
    }
    return movies.filter((movie: IMovie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
}