import * as React from 'react';
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import moment from 'moment';
import { Mutation } from 'react-apollo';
import * as types from '../StoryActionTypes';
import { IStory } from '../StoryInterface';
import { DELETE_STORY, GET_STORIES } from "../StoryQuery";
import StoryContext from '../StoryContext'

interface ISingleStory extends RouteComponentProps<any> {
    story: IStory;

}
const SingleStory = (props: ISingleStory): JSX.Element => {
    const { state, dispatch } = React.useContext(StoryContext)
    function handleStoryDetailpush() {
        dispatch({ type: types.SET_SELECTED_STORY, payload: props.story.id })
        props.history.push({
            pathname: `/story/${props.story.id}`,
            state: { story: props.story }
        })
    }
    function handleDeleteStory(e: React.SyntheticEvent, deleteStory: any, id: string) {
        e.stopPropagation();
        let allowDelete: any = confirm("Are you sure ?")
        if (allowDelete) {
            console.log('after confirm')
            deleteStory({
                variables: {
                    storyId: id
                }
            })
        }
    }
    function updateStoriesAfterDelete(cache: any, { data: { deleteStory } }: any) {
        const { stories } = cache.readQuery({ query: GET_STORIES });
        console.log(stories, deleteStory)
        const updatedStories = stories.filter((story: IStory) => story.id !== deleteStory.id)
        cache.writeQuery({
            query: GET_STORIES,
            data: { stories: updatedStories },
        });
    }
    return (
        <Mutation
            mutation={DELETE_STORY}
            variables={{ storyId: props.story.id }}
            update={updateStoriesAfterDelete}
        >
            {
                (deleteStory: any, { loading, data, error }: any) => (
                    <div className="single-story"
                        onClick={handleStoryDetailpush}
                    >
                        <i className="fas fa-book-reader"></i>
                        <div style={{ flexBasis: '95%' }}>
                            <h1
                                data-test="SingleStory"
                                className='story-title'
                            >
                                {props.story.title}
                            </h1>
                            <p className='story-time'>{moment(props.story.createdAt).format('ll')}</p>
                        </div>
                        <div className="story-action-wrapper">
                            <i className="fas fa-trash-alt"
                                onClick={(e: React.SyntheticEvent) => handleDeleteStory(e, deleteStory, props.story.id)}
                            ></i>
                        </div>
                    </div>
                )
            }
        </Mutation>
    )
}
export default withRouter(SingleStory)