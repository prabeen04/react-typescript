import * as React from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag'
import StoryContext from "../StoryContext";
export default function StoryDetail() {
  const { state, dispatch } = React.useContext(StoryContext)
  return (
    <div className='story-detail' data-test='StoryDetail'>
      <p>Story details</p>
      <a href='#'>{state.selectedStory}</a>
      <Query query={gql`
                {
                  getStoryById(id: $id) {
                    id
                    title
                    user {
                      userName
                    }
                  }
                }
            `}
        variables={{ $id: state.selectedStory }}
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
