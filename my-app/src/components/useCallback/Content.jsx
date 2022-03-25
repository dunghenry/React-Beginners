import { memo } from 'react';

const Content = ({onIncrease}) => {
    console.log("Render");
  return (
      <div>
          <h1>Xin chao moi nguoi</h1>
          <button onClick={onIncrease}>Click me!</button>
    </div>
  )
}

export default memo(Content);