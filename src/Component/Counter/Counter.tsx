import * as React from 'react';
import { Style } from "../../App";
const initialState = { count: 0 };
interface ICounterState {
    count: number
}
interface ICountProps {
}
const Counter: React.SFC<ICountProps> = (props: ICountProps) => {
    const style = React.useContext(Style)
    const [state, dispatch] = React.useReducer(appReducer, initialState)
    return (
        <div className='jumbotron' data-test='Counter'>
            <button onClick={() => console.log('injecting style ....')}>Inject styles</button>
            <h1>{state.count}</h1>
            <button className='btn btn-primary' onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>&nbsp;
            <button className='btn btn-danger' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>&nbsp;
            <button className='btn btn-warning' onClick={() => dispatch({ type: 'RESET' })}>Reset</button>&nbsp;
            <button className='btn btn-default' onClick={() => dispatch({ type: 'MULTIPLY', payload: 5 })}>Multiply by 5 </button>
        </div>
    )
}

export default Counter;

const appReducer = (state: ICounterState, action: { type: string, payload?: number | null | undefined }) => {
    console.log(action)
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        case 'MULTIPLY':
            return { ...state, count: state.count * 5 }
        case 'RESET':
            return { ...state, count: 0 }
        default:
            return { ...state }
    }
}