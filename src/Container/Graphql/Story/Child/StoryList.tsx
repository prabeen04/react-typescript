import * as React from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import * as types from '../StoryActionTypes'
import SingleStory from './SingleStory';
import { IStory } from "../StoryInterface";
import StoryContext  from "../StoryContext";
const StoryList = (): JSX.Element => {

    const test = React.useContext(StoryContext)
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
                                onClick={() => test.dispatch({ type: types.TOGGLE_ADD_STORY_MODAL, payload: true })}>Add Story</button>
                            <br />
                            {
                                data.stories.map((item: IStory, i: any) => <SingleStory key={i} title={item.title} />)
                            }
                        </div>
                    );
                }}
            </Query>
        </>
    )
};
export default StoryList;
