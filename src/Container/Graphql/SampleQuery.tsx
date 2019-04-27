import * as React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { sampleQuery } from "./Actions/queries";
const SampleQuery = () => (
    <Query
        query={sampleQuery}
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