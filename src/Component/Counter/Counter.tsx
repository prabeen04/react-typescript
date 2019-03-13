import * as React from 'react';

const Counter = (props: any) => {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;