import * as React from 'react';

export default function useStory() {
    const initialState: any = {
        addStoryModal: false
    }
    const [state, dispatch] = React.useReducer(storyReducer, initialState)
    return { state, dispatch }
}

function storyReducer(state: any, action: any) {
    switch (action.type) {
        default:
            throw new Error('should have a condition');
    }
}
