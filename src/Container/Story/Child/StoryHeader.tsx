import * as React from 'react'
import StoryContext from "../StoryContext";
import * as types from '../StoryActionTypes';

export default function StoryHeader() {
    const { story, dispatch }  = React.useContext(StoryContext)
    return (
        <div className='story-header'>
            <div></div>
            <div>
                <button
                    className='btn btn-primary red'
                    onClick={() => dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: true })}>
                    <i className="fas fa-paper-plane"></i>&nbsp;&nbsp;
                    Add Story</button>
            </div>
        </div>
    )
}
