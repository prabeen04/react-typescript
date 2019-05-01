import * as React from 'react'
import * as types from '../StoryActionTypes'
import Modal from '../../../../Utils/Modal'
import TextInput from '../../../../Component/Form/TextInput'
import StoryContext from '../StoryContext';

export default function AddStoryModal() {
    const { state, dispatch } = React.useContext(StoryContext)
    return (
        <Modal
            noHeader
            visible={state.addStoryModal}
            toggle={() => dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: false })}
        >
            <>
                <TextInput
                    className='form-control'
                    name='title'
                    onChange={() => { }}
                    value={''}
                    placeholder="What's the story ?"
                />
                <button
                    className='btn btn-primary'
                    onClick={() => { }}>Add</button>
            </>
        </Modal>
    )
}
