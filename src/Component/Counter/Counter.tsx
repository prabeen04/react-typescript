import React, { useState } from 'react';

const Counter = (props: any) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>increase</button>
        </div>
    )
}

export default Counter;