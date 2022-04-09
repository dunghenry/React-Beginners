import React from 'react';
const Main = () => {
    const [count, setCount] = React.useState(60);
    const countRef = React.useRef();
    const prevCount = React.useRef();
    const h1Ref = React.useRef();
    React.useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect);
    })
    React.useEffect(() => {
        prevCount.current = count;
    }, [count]);
    const handleStart = () => {
        countRef.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000)
    }
    const handleStop = () => {
        clearInterval(countRef.current);
    }
    console.log(prevCount, count);
  return (
      <div>
          <h1 ref={h1Ref}>{count}</h1>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Main;