import React, { useReducer , useRef} from 'react';
//initialState
const initialState = {
    job: '',
    jobs: [],
}

//actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

//
const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const selectIndex = action.payload
            const newJobs = state.jobs.filter((job, index) => index !== selectIndex)
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action');
    }
}

const TodoList = () => {
    const inputRef = useRef();
    const [state, dispatch] = useReducer(reducer, initialState);
    const { job, jobs } = state;
    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    }
    const handleDelete = (index) => {
        dispatch(deleteJob(index));
    }
    return (
        <div style={{ padding: '0 30px' }}>
            <h3>Todos</h3>
            <input ref={ inputRef } placeholder="Enter todo..." value={job} onChange={(e) => {
                dispatch(setJob(e.target.value))
            }} />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {
                    jobs.map((job, index) => {
                        return (
                            <div key={index}>
                                
                                <li> {job} <button onClick={() => handleDelete(index)}>x</button></li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;