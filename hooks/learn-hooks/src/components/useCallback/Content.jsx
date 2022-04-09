import React from 'react';
const Content = ({onIncrease}) => {
    console.log("Render")
  return (
      <div>
      <h1>Content component</h1>
      <button onClick={onIncrease}>Count++</button>
    </div>
  )
}

export default React.memo(Content);