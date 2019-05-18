import * as React from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import * as types from '../StoryActionTypes'
import SingleStory from './SingleStory';
import { IStory } from "../StoryInterface";
import StoryContext from "../StoryContext";
import Empty from "../../../Component/Common/Empty";

const StoryList = (): JSX.Element => {
    const { state, dispatch } = React.useContext(StoryContext)
    return (
        <div data-test="StoryList">
            <Query
                query={gql`
                {
                    stories {
                    id
                    title
                }
                }
            `}
            >
                {({ loading, error, data }: any) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    if (data.stories.length) {
                        if (!state.selectedStory) {
                            dispatch({ type: types.SET_SELECTED_STORY, payload: data.stories[0].id })
                        }
                    }
                    return (
                        <>
                            {
                                !data.stories.length
                                    ? <Empty description='No Stories yet, Add your story' />
                                    : data.stories.map((story: IStory, i: any) => <SingleStory key={i} story={story} />)
                            }
                        </>
                    );
                }}
            </Query>
        </div>
    )
};
export default StoryList;
