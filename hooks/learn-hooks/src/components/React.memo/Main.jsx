import React from 'react';
import Content from './Content';

const Main = () => {
    const [count, setCount] = React.useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }
  return (
      <div>
          <h1>{count}</h1>
          <Content/>
          <button onClick={handleCount}>Count++</button>
    </div>
  )
}

export default Main;