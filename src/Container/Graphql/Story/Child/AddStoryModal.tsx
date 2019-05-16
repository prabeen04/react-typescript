import * as React from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import * as types from '../StoryActionTypes'
import Modal from '../../../../Utils/Modal'
import TextInput from '../../../../Component/Form/TextInput'
import SelectInput from '../../../../Component/Form/SelectInput'
import StoryContext from '../StoryContext';
import Textarea from '../../../../Component/Form/Teaxtarea';
import useUsers from '../../../Users/useUsers'

const ADD_STORY = gql`
  mutation AddStory($title: String!, $article: String!, $createdAt: String!, $authorId: String!) {
    addStory( title: $title, article: $article, createdAt: $createdAt, authorId: $authorId ){
    title
  }
  }
`;

export default function AddStoryModal() {
    const { state, dispatch } = React.useContext(StoryContext)
    const [storyTitle, setStoryTitle] = React.useState<string>('')
    const [article, setArticle] = React.useState<string>('')
    const [user, setUser] = React.useState<string>('')
    const { data, loading, error } = useUsers()
    const { users } = data
    console.log('*************************', users)
    function handleSubmit(e: React.FormEvent, addStory: any) {
        e.preventDefault()
        dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: false })
        addStory({
            variables: {
                title: storyTitle,
                article,
                createdAt: "12-01-2019",
                authorId: "5ca8cae848efb73984d347a6",
            }
        })
    }
    function renderUsers() {
        return users && users.map((user: any) => ({ label: user.userName, value: user.id }))
    }
    console.log(renderUsers())
    return (
        <Modal
            noHeader
            visible={state.addStoryModal}
            toggle={() => dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: false })}
        >
            <>
                <Mutation mutation={ADD_STORY}>
                    {
                        (addStory, { loading, data, error }) => {
                            console.log(loading)
                            console.log(data)
                            console.log(error)
                            return (
                                <form onSubmit={(e) => handleSubmit(e, addStory)}>
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
                                        options={renderUsers() && renderUsers()}
                                    /><br />
                                    <Textarea
                                        className='form-control'
                                        name='article'
                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setArticle(e.target.value)}
                                        value={article}
                                        placeholder="Describe the hell and heaven :)"
                                    />
                                    <br />
                                    <button className='btn btn-primary'>Add</button>
                                </form>
                            )
                        }
                    }
                </Mutation>

            </>
        </Modal>
    )
}
