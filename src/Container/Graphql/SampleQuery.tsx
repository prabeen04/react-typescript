import * as React from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag';

interface IStory {
    title: String
}
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
                            data.stories.map((item: IStory, i: any) => <Story key={i} title={item.title}/>)
                        }
                    </div>
                );
            }}
        </Query>
    </>
);
export default SampleQuery;

function Story(props: IStory) {
    return <h1 className='story-title'>{props.title}</h1>
}