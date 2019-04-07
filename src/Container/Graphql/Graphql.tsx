import * as React from 'react'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import SampleQuery from './SampleQuery';
import './Graphql.css';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

export default function Graphql(): JSX.Element {
    return (
        <>
            <ApolloProvider client={client}>
                <div className='graphql-wrapper'>
                    <h4>Graphql component</h4>
                    <SampleQuery/>
                </div>
            </ApolloProvider>
        </>
    )
}
