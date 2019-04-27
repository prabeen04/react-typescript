import gql from "graphql-tag";

export const sampleQuery = gql`
{
    users {
        userName
    }
}
`