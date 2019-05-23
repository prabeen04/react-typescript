import gql from 'graphql-tag';
/**
 * @Query
 */
// get story detail graphql query
export const GET_STORY_DETAIL = gql`
  query GetStoryById($storyId: ID!) {
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
      createdAt
  }
  }
`;


/**
 * @Mutation
 */

export const ADD_STORY = gql`
  mutation AddStory($title: String!, $article: String!, $createdAt: String!, $authorId: String!) {
    addStory( title: $title, article: $article, createdAt: $createdAt, authorId: $authorId ){
        id
        title
        article
        createdAt
    }
  }
`;
