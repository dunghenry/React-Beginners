import { useState } from 'react';
import ContentComponent from './ContentComponent';

const MemoComponent = () => {
    const [count, setCount] = useState(1);
    const increase = () => {
        setCount(count + 1);
    }
  return (
      <div>
          <ContentComponent />
          <h1>{count}</h1>
          <button onClick={increase}>Click me!</button>
    </div>
  )
}

export default MemoComponent;