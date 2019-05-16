import * as React from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import * as types from '../StoryActionTypes'
import Modal from '../../../../Utils/Modal'
import TextInput from '../../../../Component/Form/TextInput'
import SelectInput from '../../../../Component/Form/SelectInput'
import StoryContext from '../StoryContext';

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
    const [user, setUser] = React.useState<string>('')
    function handleSubmit(e: React.FormEvent, addStory: any) {
        e.preventDefault()
        dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: false })
        addStory({
            variables: {
                title: "sdl  d gsd g msd g nsdg s d",
                article: "asdasd body of, as fs dfmnsd nfmgsd gsmdgm medium story kas,f ma sf ams fmasf",
                createdAt: "12-01-2019",
                authorId: "5ca8cae848efb73984d347a6",
            }
        })
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
                                        options={[{ label: 'one', value: 1 }, { label: 'two', value: 2 }, { label: 'three', value: 3 },]}
                                    /><br />
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
