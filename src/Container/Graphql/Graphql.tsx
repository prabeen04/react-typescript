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
        <div>
            <ApolloProvider client={client}>
                <>
                    {window.location.origin.includes('localhost')
                        ? <Story />
                        : <h1 style={{ color: '#eee', textAlign: 'center', marginTop: 100 }}>Under construction :(</h1>
                    }
                </>
            </ApolloProvider>
        </div>
    )
}
