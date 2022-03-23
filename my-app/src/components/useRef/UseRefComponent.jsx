import React, {useState, useRef, useEffect} from 'react';

const UseRefComponent = () => {
    const [count, setCount] = useState(60);
    const prevCount = useRef();
    const timer = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect);
    });

    const handleStart = () => {
        timer && clearInterval(timer.current);
        timer.current = setInterval(() => {
            setCount(prevState => prevState - 1);
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timer.current);
    }

    console.log(count, prevCount);

  return (
      <div>
          <h1 ref={h1Ref}>{count}</h1>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default UseRefComponent;