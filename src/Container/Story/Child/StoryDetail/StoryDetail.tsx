import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
import { Query } from "react-apollo";
import gql from 'graphql-tag'
import moment from 'moment';
import StoryDetailHeader from './StoryDetailHeader';

interface IStoryDetailProps extends RouteComponentProps<any> { }

function StoryDetail(props: IStoryDetailProps) {
  const storyId = props.match.params.id; //get storyId from url
  // get story detail graphql query
  const GET_STORY_DETAIL = gql`
  query Story($storyId: String!) {
    getStoryById(id: $storyId) {
      id
      title
      article
      createdAt 
      user {
          userName
        }
    }
  }
`;

  return (
    <>
      <StoryDetailHeader />
      <div className='story-detail' data-test='StoryDetail'>
        {storyId &&
          <Query query={GET_STORY_DETAIL}
            variables={{ storyId }}
            skip={!storyId}
          >
            {({ loading, error, data }: any) => {
              console.log(data)
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              return (
                <>
                  <div className='story-detail-heading'>
                    <div>
                      <h3>{data.getStoryById.title} </h3>
                      <p className='author'>{data.getStoryById.user.userName} - {moment(data.getStoryById.createdAt).fromNow()}</p>
                    </div>
                  </div>
                  <p className='article'>{data.getStoryById.article} </p>
                </>
              );
            }}
          </Query>}
      </div>
    </>



















































  )
}

export default withRouter(StoryDetail)