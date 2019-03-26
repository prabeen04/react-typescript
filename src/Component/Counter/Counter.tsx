import * as React from 'react';
import './Counter.css';

const initialState = { count: 0 };
interface ICounterState {
    count: number
}
interface ICountProps {
}
const Counter: React.SFC<ICountProps> = (props: ICountProps) => {
    const [state, dispatch] = React.useReducer(appReducer, initialState)
    return (
        <div className='counter-wrapper' data-test='Counter'>
            <div className='counter-display'>
                <h1>{state.count}</h1>
            </div>
            <div className="counter-controls">
                <button
                    className='btn btn-primary'
                    onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>&nbsp;
            <button
                    className='btn btn-danger'
                    disabled={state.count < 1}
                    onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>&nbsp;
            <button
                    className='btn btn-warning'
                    onClick={() => dispatch({ type: 'RESET' })}>Reset</button>&nbsp;
            <button
                    className='btn btn-secondary'
                    disabled={state.count === 0}
                    onClick={() => dispatch({ type: 'MULTIPLY', payload: 5 })}>Multiply by 5 </button>
            </div>
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