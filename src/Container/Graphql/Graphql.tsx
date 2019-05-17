import * as React from 'react'
import Story from './Story/Story'
import './Graphql.css';

export default function Graphql(): JSX.Element {
    return (
        <div>
            <>
                {window.location.origin.includes('localhost')
                    ? <Story />
                    : <h1 style={{ color: '#eee', textAlign: 'center', marginTop: 100 }}>Under construction :(</h1>
                }
            </>
        </div>
    )
}
