import * as React from 'react';
import * as types from './StoryActionTypes';

export const initialState: any = {
    addStoryModal: false,
    selectedStory: 'null',
}
export default function useStory() {
    const [state, dispatch] = React.useReducer(storyReducer, initialState)
    return { state, dispatch }
}

function storyReducer(state: any, action: any) {
    switch (action.type) {
        case types.TOGGLE_ADD_STORY_MODAL:
            return { ...state, addStoryModal: action.payload }
        case types.SET_SELECTED_STORY:
            return { ...state, selectedStory: action.payload }
        default:
            throw new Error('should match a case');
    }
}
