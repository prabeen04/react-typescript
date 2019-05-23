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
    function deleteStory(e: React.SyntheticEvent, id: string) {
        e.stopPropagation();
        alert(id)
    }
    return (
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
                    onClick={(e: React.SyntheticEvent) => deleteStory(e, props.story.id)}
                ></i>
            </div>
        </div>
    )
}
export default withRouter(SingleStory)