import { useReducer } from 'react';
import reducer,{ initialState } from './reducer';
import logger from './logger';
import Context from './Context';
function Provider({ children }) {
    const [state, dispatch] = useReducer(logger(reducer), initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider;