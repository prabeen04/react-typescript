import React, { useState } from 'react';

interface counter {
    title: String;
    value: Number;
}
const Counter = (props: any) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;