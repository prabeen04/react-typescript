import gql from "graphql-tag";

export const sampleQuery = gql`
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