import * as React from 'react';
import StoryHeader from './Child/StoryHeader'
import StoryList from "./Child/StoryList";
import AddStoryModal from "./Child/AddStoryModal";
import useStory from './useStory'
import StoryContext from './StoryContext'
import './Story.css';

export default function Story(): JSX.Element {
    const { state, dispatch } = useStory()
    return (
        <>
            {window.location.origin.includes('localhost')
                ? <StoryContext.Provider value={{ state, dispatch }}>
                    <StoryHeader />
                    <div className='story-wrapper' data-test="Story">
                        <div className="story-list">
                            <StoryList />
                        </div>
                        <AddStoryModal />
                    </div>
                </StoryContext.Provider>
                : <h1 style={{ color: '#eee', textAlign: 'center', marginTop: 100 }}>Under construction :(</h1>
            }
        </>

    )
}
