import { useState, useEffect } from 'react'
import { CounterInterface } from './Counter.interface'

const Counter = ({testID,  }:CounterInterface) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        console.log('increment', count)
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
        console.log('decrement', count)
    };

    useEffect(() => {
        console.log({ count: count });
    }, [count])

    return (
      <div data-testid={testID}>
          <h1>Count: {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
      </div>
    );

}

export default Counter
