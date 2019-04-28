import * as React from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag';
const SampleQuery = () => (
    <>
        <Query
            query={gql`
                {
                    stories {
                    title
                }
                }
            `}
        >
            {({ loading, error, data }) => {
                console.log(data)
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return (
                    <div>
                        {
                            data.stories.map((item: any) => <p>{item.title}</p>)
                        }
                    </div>
                );
            }}
        </Query>
    </>
);
export default SampleQuery;

interface IStory {
    title: String
}
function Story(props: IStory) {
    return <h1>{props.title}</h1>
}