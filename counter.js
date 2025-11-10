import React, { useState } from 'react';
function Counter() {
    const [count, increment] = useState(0);
      function Click()
    {
        increment(count + 1);
    }
     return (
        <div>
            <button onClick={Click}>click here</button>
            <p>Count: {count}</p>
        </div>
    );
}

export default Counter;