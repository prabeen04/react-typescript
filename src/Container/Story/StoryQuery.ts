import gql from 'graphql-tag';

// get story detail graphql query
export const GET_STORY_DETAIL = gql`
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
export const GET_STORIES = gql`
  {
      stories {
      id
      title
  }
  }
`;