import React, { useState, useReducer } from 'react';

//initialState

const initialState = 0;

//Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

//reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action: ');
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
        </div>
    )
}

export default UseReducer