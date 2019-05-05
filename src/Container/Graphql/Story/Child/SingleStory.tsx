import * as React from 'react';
import { IStory } from '../StoryInterface';

export default function SingleStory(props: IStory): JSX.Element {
    return <h1 className='story-title' data-test="SingleStory">{props.title}</h1>
}