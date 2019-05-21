import * as React from 'react';
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import moment from 'moment';
import * as types from '../StoryActionTypes';
import { IStory } from '../StoryInterface';
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
    return (
        <div className="single-story"
            onClick={handleStoryDetailpush}
        >
            <i className="fas fa-book-reader"></i>
            <div>

                <h1
                    data-test="SingleStory"
                    className='story-title'
                >
                    {props.story.title}
                </h1>
                <p className='story-time'>{moment(props.story.createdAt).format('ll')}</p>
            </div>
        </div>
    )
}
export default withRouter(SingleStory)