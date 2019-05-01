import * as React from 'react'
import StoryList from "./StoryList";
import StoryDetail from './StoryDetail';
import './Story.css';

export default function Story(): JSX.Element {
    return (
        <div className='story-wrapper'>
            <div className="story-list">
                <StoryList />
            </div>
            <div className="story-detail">
                <StoryDetail />
            </div>
        </div>
    )
}
