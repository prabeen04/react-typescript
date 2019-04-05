import * as React from 'react';
import { SET_MOVIE_FILTER, SET_FILTER_TEXT } from "../MovieActionTypes";
import TextInput from "../../../Component/Form/TextInput";
interface IMovieHeaderProps {
    dispatch: any;
    activeFilter: string;
    searchText: string;
}
export default function MovieHeader(props: IMovieHeaderProps) {
    const { activeFilter, searchText, dispatch } = props;
    function setFilter(filterType: string): void {
        dispatch({
            type: SET_MOVIE_FILTER,
            payload: filterType
        })
    }
    function setSearchText(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: SET_FILTER_TEXT,
            payload: event.target.value
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
            <div className="seach-box">
                <TextInput
                    name='movie-fiter'
                    onChange={setSearchText}
                    className='dark-input'
                    placeholder='Search movie ...'
                    value={searchText}
                    style={{ width: 300, padding: '0.3rem', paddingLeft: 30 }}
                />
            </div>
        </div>
    )
}
