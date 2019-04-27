import gql from "graphql-tag";

export const GET_STORY_BY_ID = gql`
{
getStoryById(id: "5cbf2970bb668c41a88f693f") {
    id
    title
    user {
         userName
        }
    }
}

`