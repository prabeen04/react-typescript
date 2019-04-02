import * as React from 'react'
import useMovie from './UseMovie';

export default function Movie() {
    const { state, dispatch } = useMovie();
    return (
        <div style={{height: 200}}>
            <h3>Movie component</h3>
        </div>
    )
}
