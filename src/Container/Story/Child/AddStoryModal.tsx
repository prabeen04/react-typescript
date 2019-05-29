import * as React from 'react'
import * as types from '../StoryActionTypes'
import Modal from '../../../Utils/Modal'
import StoryContext from '../StoryContext';
import StoryForm from './StoryForm';

export default function AddStoryModal() {
    const { state, dispatch } = React.useContext(StoryContext)
    return (
        <Modal
            noHeader
            visible={state.addStoryModal}
            toggle={() => dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: false })}
        >
            <StoryForm />
        </Modal>
    )
}
