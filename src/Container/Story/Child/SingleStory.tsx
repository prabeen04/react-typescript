import * as React from 'react';
import * as types from '../StoryActionTypes';
import { IStory } from '../StoryInterface';
import useStory from "../useStory";
import StoryContext from '../StoryContext'
interface ISingleStory {
    story: IStory;
}
export default function SingleStory(props: ISingleStory): JSX.Element {
    const { state, dispatch } = React.useContext(StoryContext)
    return (
        <h1
            data-test="SingleStory"
            className='story-title'
            onClick={() => dispatch({ type: types.SET_SELECTED_STORY, payload: props.story.id })}
        >
            {props.story.title}
        </h1>)
}