import * as React from 'react';
import { Style } from "../../App";
const initialState = { count: 0 };
interface IcounterState {
    count: string
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
            <h1>{count}</h1>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increase</button>&nbsp;
            <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decrease</button>&nbsp;
            <button className='btn btn-warning' onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;

const appReducer = (state, action) => {
    // switch (action.type) {
    //     case 'INCREASE_TIME':
    //         return { ...state, time: moment(action.payload).add(1, state.viewType) }
    //     case 'DECREASE_TIME':
    //         return { ...state, time: moment(action.payload).subtract(1, state.viewType) }
    //     case 'CHANGE_VIEW_TYPE':
    //         return { ...state, viewType: action.payload }
    //     default:
    //         return { ...state }
    // }
    return state;
}