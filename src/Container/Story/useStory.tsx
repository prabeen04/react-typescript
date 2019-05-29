import * as React from 'react';
import * as types from './StoryActionTypes';

export const initialState: any = {
    addStoryModal: false,
    selectedStory: null,
    isEditing: false,
    currentEditingStory: null,
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
        case types.SET_EDITING_STATE:
            return {
                ...state,
                isEditing: action.payload.isEditing,
                addStoryModal: action.payload.addStoryModal,
                currentEditingStory: action.payload.currentEditingStory
            }
        default:
            throw new Error('should match a case');
    }
}
