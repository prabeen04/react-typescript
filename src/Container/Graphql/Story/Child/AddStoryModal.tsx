import * as React from 'react'
import * as types from '../StoryActionTypes'
import Modal from '../../../../Utils/Modal'
import useStory from '../useStory';
import Story from './SingleStory';

export default function AddStoryModal() {
    const { state, dispatch } = useStory()
    return (
        <Modal
            noHeader
            visible={state.addStoryModal}
            toggle={() => dispatch({type: types.TOGGLE_ADD_STORY_MODAL, payload: false})}
        >
            <p>asflansf</p>
        </Modal>
    )
}
