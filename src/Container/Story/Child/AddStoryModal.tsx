import * as React from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import moment from 'moment';
import { EditorState } from 'draft-js';
import * as types from '../StoryActionTypes'
import Modal from '../../../Utils/Modal'
import TextInput from '../../../Component/Form/TextInput'
import SelectInput from '../../../Component/Form/SelectInput'
import Editor from '../../../Component/Form/Editor'
import StoryContext from '../StoryContext';
import useUsers from '../../Users/useUsers'

const ADD_STORY = gql`
  mutation AddStory($title: String!, $article: String!, $createdAt: String!, $authorId: String!) {
    addStory( title: $title, article: $article, createdAt: $createdAt, authorId: $authorId ){
        title
    }
  }
`;

export default function AddStoryModal() {
    const { state, dispatch } = React.useContext(StoryContext)
    const [title, setTitle] = React.useState<string>('')
    const [article, setArticle] = React.useState<string>('test description')
    const [editorState, setEditorState] = React.useState<EditorState>(EditorState.createEmpty())
    const [user, setUser] = React.useState<string>('')
    const { data, loading, error } = useUsers()
    const { users } = data
    const disabled = !title && !article && !user
    function handleSubmit(e: React.FormEvent, addStory: any) {
        e.preventDefault()
        dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: false })
        addStory({
            variables: {
                title,
                article,
                createdAt: moment().toISOString(),
                authorId: user,
            }
        })
    }
    function renderUsers() {
        return users && users.map((user: any) => ({ label: user.userName, value: user.id }))
    }
    function handleEditorStateChange(e: EditorState) {
        console.log(e)
        setEditorState(e)
    }
    return (
        <Modal
            noHeader
            visible={state.addStoryModal}
            toggle={() => dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: false })}
        >
            <>
                <Mutation mutation={ADD_STORY}>
                    {
                        (addStory: any, { loading, data, error }: any) => {
                            return (
                                <form onSubmit={(e) => handleSubmit(e, addStory)}>
                                    <TextInput
                                        className='form-control'
                                        name='title'
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                                        value={title}
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
                                    <button className='btn btn-primary' disabled={true}>Add</button>
                                </form>
                            )
                        }
                    }
                </Mutation>

            </>
        </Modal>
    )
}
