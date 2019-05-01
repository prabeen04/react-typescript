import * as React from 'react'
import Modal from '../../../../Utils/Modal'
import useStory from '../useStory';
import Story from './SingleStory';

export default function AddStoryModal() {
    const { state, dispatch } = useStory()
    return (
        <Modal
            noHeader
            visible={state.addStoryModal}
            toggle={() => { }}
        >
            <p>asflansf</p>
        </Modal>
    )
}
