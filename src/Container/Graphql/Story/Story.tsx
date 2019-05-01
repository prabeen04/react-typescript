import * as React from 'react'
import StoryList from "./StoryList";
import StoryDetail from './StoryDetail';
import './Story.css';

export default function Story(): JSX.Element {
    return (
        <div className='story-wrapper'>
            <StoryList />
            <StoryDetail />
        </div>
    )
}
