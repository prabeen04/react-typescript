import * as React from 'react';
import { SET_MOVIE_FILTER } from "../MovieActionTypes";

interface IMovieHeaderProps {
    dispatch: any,
    activeFilter: string
}
export default function MovieHeader(props: IMovieHeaderProps) {
    const { activeFilter, dispatch } = props;
    function setFilter(filterType: string): void {
        dispatch({
            type: SET_MOVIE_FILTER,
            payload: filterType
        })
    }
    return (
        <div className='movie-header'>
            <div className="filter-tags">
                <span
                    className={`tag ${activeFilter === 'top-rated' && 'active-tag'}`}
                    onClick={() => setFilter('top-rated')} >Top rated</span>
                <span
                    className={`tag ${activeFilter === 'most-loved' && 'active-tag'}`}
                    onClick={() => setFilter('most-loved')}  >Most loved</span>
                <span
                    className={`tag ${activeFilter === 'new-arrival' && 'active-tag'}`}
                    onClick={() => setFilter('new-arrival')}  >New arrival</span>
            </div>
        </div>
    )
}
