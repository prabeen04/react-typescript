import * as React from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag'
import StoryContext from "../StoryContext";
export default function StoryDetail() {
  const { state, dispatch } = React.useContext(StoryContext)
  const storyId = state.selectedStory
  const GET_STORY_DETAIL = gql`
  query Story($storyId: String) {
    getStoryById(id: $storyId) {
                    id
                    title
                  }
  }
`;

  return (
    <div className='story-detail' data-test='StoryDetail'>
      <p>Story details</p>
      <a href='#'>{state.selectedStory}</a>
      <Query query={GET_STORY_DETAIL}
        variables={{ storyId }}
      >
        {({ loading, error, data }) => {
          console.log(data)
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return (
            <div>
              <p>test </p>
            </div>
          );
        }}
      </Query>
    </div>
  )
}
