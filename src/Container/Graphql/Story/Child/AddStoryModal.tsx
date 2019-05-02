import * as React from 'react'
import * as types from '../StoryActionTypes'
import Modal from '../../../../Utils/Modal'
import TextInput from '../../../../Component/Form/TextInput'
import SelectInput from '../../../../Component/Form/SelectInput'
import StoryContext from '../StoryContext';

export default function AddStoryModal() {
    const { state, dispatch } = React.useContext(StoryContext)
    const [storyTitle, setStoryTitle] = React.useState<string>('')
    const [user, setUser] = React.useState<string>('')
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log(storyTitle, user)
    }
    return (
        <Modal
            noHeader
            visible={state.addStoryModal}
            toggle={() => dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: false })}
        >
            <>
                <form onSubmit={handleSubmit}>
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
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUser(e.target.value)}
                        value={user}
                        placeholder="What's the story ?"
                        options={[{ label: 'one', value: 1 }, { label: 'two', value: 2 }, { label: 'three', value: 3 },]}
                    /><br />
                    <button
                        className='btn btn-primary'
                    >Add</button>
                </form>
            </>
        </Modal>
    )
}
