import * as React from 'react';

export interface IStory {
    title: String
}
export default function Story(props: IStory) {
    return <h1 className='story-title'>{props.title}</h1>
}