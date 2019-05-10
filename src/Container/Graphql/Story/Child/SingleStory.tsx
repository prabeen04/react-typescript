import * as React from 'react';
import * as types from '../StoryActionTypes';
import { IStory } from '../StoryInterface';

interface ISingleStory {
    story: IStory;
}
export default function SingleStory(props: ISingleStory): JSX.Element {
    return (
        <h1
            data-test="SingleStory"
            className='story-title'
            onClick={dispatch({ type: types.SET_SELECTED_STORY, payload: 'test' })}
        >
            {props.story.title}
        </h1>)
}