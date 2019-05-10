import * as React from 'react';
import { IStory } from '../StoryInterface';

interface ISingleStory {
    story: IStory;
    dispatch: any;
}
export default function SingleStory(props: ISingleStory): JSX.Element {
    return <h1 className='story-title' data-test="SingleStory">{props.story.title}</h1>
}