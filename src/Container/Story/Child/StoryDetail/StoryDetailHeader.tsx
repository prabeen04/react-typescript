import * as React from 'react'
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from 'react-router';

interface IStoryDetailHeader extends RouteComponentProps { }

function StoryDetailHeader(props: IStoryDetailHeader) {
    return (
        <div className='story-detail-header'>
            <div>
                <button className='btn btn-primary red'
                    onClick={() => props.history.goBack()}
                >
                    <i className="fas fa-long-arrow-alt-left"></i>&nbsp;
                     back</button>
            </div>
            <div></div>
        </div>
    )
}

export default withRouter(StoryDetailHeader)