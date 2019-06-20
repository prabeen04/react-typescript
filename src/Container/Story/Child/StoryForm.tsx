import * as React from 'react'
import moment from 'moment';
import { useMutation } from 'react-apollo-hooks';
import { EditorState, convertToRaw } from 'draft-js';
import * as types from '../StoryActionTypes'
import { ADD_STORY, GET_STORIES } from "../StoryQuery";
import TextInput from '../../../Component/Form/TextInput'
import SelectInput from '../../../Component/Form/SelectInput'
import Editor from '../../../Component/Form/Editor'
import StoryContext from '../StoryContext';
import useUsers from '../../Users/useUsers'
const draftToHtml = require("draftjs-to-html");

export default function StoryForm() {
    const { state, dispatch } = React.useContext(StoryContext)
    const [title, setTitle] = React.useState<string>('')
    const [editorState, setEditorState] = React.useState<EditorState>(EditorState.createEmpty())
    const [user, setUser] = React.useState<string>('')
    const { data, loading, error } = useUsers()
    const { users } = data
    const disabled = !title || !user
    React.useEffect(() => {
        const userOptions = users && users.map((user: any) => ({ label: user.userName, value: user.id }))
        userOptions && setUser(userOptions[0]['value'])
    }, [users])

    function handleSubmit(e: React.FormEvent, addStory: any) {
        e.preventDefault()
        dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: false })
        addStory({
            variables: {
                title,
                article: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                createdAt: moment().toISOString(),
                authorId: user,
            }
        })
    }
    function renderUsers() {
        return users && users.map((user: any) => ({ label: user.userName, value: user.id }))
    }
    function handleEditorStateChange(e: EditorState) {
        setEditorState(e)
    }
    function updateStoriesAfterCreate(cache: any, { data: { addStory } }: any) {
        const { stories } = cache.readQuery({ query: GET_STORIES });
        console.log(stories, addStory)
        const updatedStories = [...stories, addStory]
        cache.writeQuery({
            query: GET_STORIES,
            data: { stories: updatedStories },
        });
    }
    const addStory = useMutation(ADD_STORY, { update: updateStoriesAfterCreate })

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e, addStory)}>
                <TextInput
                    className='form-control'
                    name='title'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    // value={title}
                    defaultValue={state.isEditing ? state.currentEditingStory.title : ''}
                    placeholder="What's the story ?"
                /><br />
                <SelectInput
                    className='form-control'
                    name='user'
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUser(e.target.value)}
                    value={user}
                    placeholder="Author"
                    options={renderUsers() && renderUsers()}
                /><br />
                <Editor
                    editorState={editorState}
                    setEditorState={handleEditorStateChange}
                />
                <br />
                <button className='btn btn-primary' disabled={disabled}>Add</button>
            </form>

        </>
    )
}
