import * as React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const SampleQuery = () => (
    <Query
        query={gql`
      {
        users {
          userName
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