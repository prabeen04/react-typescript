import * as React from 'react';
interface ICountProps {
    title: string
}
const Counter: React.SFC<ICountProps> = (props: ICountProps) => {
    const [count, setCount] = React.useState(0);
    const { title } = props;
    return (
        <div className='jumbotron'>
            <h1>{title}</h1>
            <h1>{count}</h1>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increase</button>&nbsp;
            <button className='btn btn-warning' onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;