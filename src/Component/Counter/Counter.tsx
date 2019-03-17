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
    console.log(style)
    const [count, setCount] = React.useState<number>(0);
    const [state, dispatch] = React.useReducer(appReducer, initialState)
    return (
        <div className='jumbotron'>
            <button onClick={() => console.log('injecting style ....')}>Inject styles</button>
            <h1>{state.count}</h1>
            <button className='btn btn-primary' onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>&nbsp;
            {/* <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decrease</button>&nbsp;
            <button className='btn btn-warning' onClick={() => setCount(0)}>Reset</button> */}
        </div>
    )
}

export default Counter;

const appReducer = (state: ICounterState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREASE':
            return { ...state }
        case 'RESET':
            return { ...state, }
        default:
            return { ...state }
    }
    return state;
}