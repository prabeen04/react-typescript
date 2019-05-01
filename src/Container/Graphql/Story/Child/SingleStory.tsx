import * as React from 'react';
import { IStory } from '../StoryInterface';

export default function Story(props: IStory): JSX.Element {
    return <h1 className='story-title' data-test="Story">{props.title}</h1>
}