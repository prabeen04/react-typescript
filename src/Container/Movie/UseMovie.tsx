import * as React from 'react';
import { TMDB_API_KEY } from '../../Config/Keys'

const initialState = {

}

export default function useMovie() {
    const [state, dispatch] = React.useReducer(movieReducer, initialState);
    return null
}
function movieReducer(state: any, action: any) {
    return state
}