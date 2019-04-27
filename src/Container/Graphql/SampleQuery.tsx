import * as React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { sampleQuery } from "./Actions/queries";
const SampleQuery = () => (
    <Query
        query={gql`
            {
  getStoryById(id: "5cbf2970bb668c41a88f693f") {
    id
    title
    user {
      userName
    }
  }
}

        `}
    >
        {({ loading, error, data }) => {
            console.log(data)
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data && data.users.map(({ userName }: { userName: any }) => (
                <div key={userName}>
                    <p>Username: {userName}</p>
                </div>
            ));
        }}
    </Query>
);
export default SampleQuery;