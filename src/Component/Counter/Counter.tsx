import * as React from 'react';
import { Style } from "../../App";
interface ICountProps {
    title: string
}
const Counter: React.SFC<ICountProps> = (props: ICountProps) => {
    const style = React.useContext(Style)
    console.log(style)
    const [count, setCount] = React.useState<number>(0);
    const { title } = props;
    return (
        <div className='jumbotron'>
            <button onClick={() => console.log('injecting style ....')}>Inject styles</button>
            <h1>{title}</h1>
            <h1>{count}</h1>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increase</button>&nbsp;
            <button className='btn btn-warning' onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;