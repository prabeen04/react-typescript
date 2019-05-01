import * as React from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import { Button } from "reactstrap";
import * as types from '../StoryActionTypes'
import SingleStory from './SingleStory';
import AddStoryModal from "./AddStoryModal";
import { IStory } from "../StoryInterface";
import useStory from '../useStory'

const StoryList = (): JSX.Element => {

    const { state, dispatch } = useStory()

    return (
        <>
            <Query
                query={gql`
                {
                    stories {
                    title
                }
                }
            `}
            >
                {({ loading, error, data }) => {
                    console.log(data)
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return (
                        <div>
                            <button
                                className='btn btn-primary'
                                onClick={() => dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: true })}>Add Story</button>
                                <br/>
                            {
                                data.stories.map((item: IStory, i: any) => <SingleStory key={i} title={item.title} />)
                            }
                        </div>
                    );
                }}
            </Query>
            <AddStoryModal />
        </>
    )
};
export default StoryList;
