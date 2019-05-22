import * as React from 'react'
import { Query } from "react-apollo";
import moment from 'moment';
import * as types from '../StoryActionTypes'
import SingleStory from './SingleStory';
import { IStory } from "../StoryInterface";
import StoryContext from "../StoryContext";
import Empty from "../../../Component/Common/Empty";
import CircularLoading from '../../../Component/Loading/CircularLoading';
import { GET_STORIES } from "../StoryQuery";

const StoryList = (): JSX.Element => {
    const { state, dispatch } = React.useContext(StoryContext)
    return (
        <div data-test="StoryList">
            <Query
                query={GET_STORIES}
            >
                {({ loading, error, data }: any) => {
                    if (loading) return <CircularLoading/>;
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
                                    : data.stories
                                        .sort((a: IStory, b: IStory) => moment(a.createdAt) < moment(b.createdAt) ? 1 : -1)
                                        .map((story: IStory, i: any) => <SingleStory key={i} story={story} />)
                            }
                        </>
                    );
                }}
            </Query>
        </div>
    )
};
export default StoryList;
