import React from 'react';

//initialState
const initialState = 0;

//Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

//Reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action')
    }
}

const PartOne = () => {
    const [count, dispatch] = React.useReducer(reducer, initialState)
    const Increase = () => {
        dispatch(UP_ACTION);
    }
    const Decrease = () => {
        dispatch(DOWN_ACTION);
    }
  return (
      <div>
          <h1>{count}</h1>
          <button onClick={Increase}>Count++</button>
          <button onClick={Decrease}>Count--</button>
    </div>
  )
}

export default PartOne;