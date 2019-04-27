import * as React from 'react'
import { Query } from "react-apollo";
import { GET_STORY_BY_ID } from "./Actions/queries";
const SampleQuery = () => (
    <Query
        query={GET_STORY_BY_ID}
    >
        {({ loading, error, data }) => {
            console.log(data)
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
                <div>
                    <p>{data.getStoryById.id}</p>
                </div>
            );
        }}
    </Query>
);
export default SampleQuery;