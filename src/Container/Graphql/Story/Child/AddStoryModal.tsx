import * as React from 'react'
import * as types from '../StoryActionTypes'
import Modal from '../../../../Utils/Modal'
import TextInput from '../../../../Component/Form/TextInput'
import SelectInput from '../../../../Component/Form/SelectInput'
import StoryContext from '../StoryContext';

export default function AddStoryModal() {
    const { state, dispatch } = React.useContext(StoryContext)
    const [storyTitle, setStoryTitle] = React.useState<string>('')

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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStoryTitle(e.target.value)}
                    value={storyTitle}
                    placeholder="What's the story ?"
                /><br />
                <SelectInput
                    className='form-control'
                    name='title'
                    onChange={() => { }}
                    value={3}
                    placeholder="What's the story ?"
                    options={[{ label: 'one', value: 1 }, { label: 'two', value: 2 }, { label: 'three', value: 3 },]}
                /><br />
                <button
                    className='btn btn-primary'
                    onClick={() => { }}>Add</button>
            </>
        </Modal>
    )
}
