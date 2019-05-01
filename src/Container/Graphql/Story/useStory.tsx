import * as React from 'react';
import * as types from './StoryActionTypes';

export default function useStory() {
    const initialState: any = {
        addStoryModal: true
    }
    const [state, dispatch] = React.useReducer(storyReducer, initialState)
    return { state, dispatch }
}

function storyReducer(state: any, action: any) {
    switch (action.type) {
        case types.TOGGLE_ADD_STORY_MODAL:
        console.log('TOGGLE_ADD_STORY_MODAL', action)
            return { ...state, addStoryModal: action.payload }
        default:
            throw new Error('should have a condition');
    }
}
