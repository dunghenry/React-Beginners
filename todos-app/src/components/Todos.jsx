import { useRef, useReducer } from 'react';
import reducer, {initialState} from './reducer';
import { addJob, setJob, deleteJob } from './actions';
import logger from './logger';
const Todos = () => {
  const inputRef = useRef();
    const [state, dispatch] = useReducer(logger(reducer), initialState);
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

export default Todos;