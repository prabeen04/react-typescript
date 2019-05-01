import * as React from 'react'
import StoryList from "./Child/StoryList";
import StoryDetail from './Child/StoryDetail';
import AddStoryModal from "./Child/AddStoryModal";
import useStory from './useStory'
import './Story.css';

export const StoryContext = React.createContext({});
export default function Story(): JSX.Element {
    const { state, dispatch } = useStory()
    return (
        <StoryContext.Provider value={{ state, dispatch }}>

            <div className='story-wrapper'>
                <div className="story-list">
                    <StoryList />
                </div>
                <div className="story-detail">
                    <StoryDetail />
                </div>
                <AddStoryModal />
            </div>
        </StoryContext.Provider>
    )
}
