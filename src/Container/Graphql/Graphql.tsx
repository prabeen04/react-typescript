import * as React from 'react'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Story from './Story/Story'
import './Graphql.css';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

export default function Graphql(): JSX.Element {
    return (
        <>
            <ApolloProvider client={client}>
                <>
                   {window.location.origin.includes('localhost') && <Story/>}
                </>
            </ApolloProvider>
        </>
    )
}
