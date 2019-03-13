import * as React from 'react';
interface ICountProps {
    title: string
}
const Counter: React.SFC<ICountProps> = (props: ICountProps) => {
    const [count, setCount] = React.useState(0);
    const { title } = props;
    return (
        <div>
            <h1>{title}</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;