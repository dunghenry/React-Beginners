import { useContext } from 'react';
import Context from './Context';
export const useStore = () => {
    //C1
    // const [state, dispatch] = useContext(Context);
    //return [state, dispatch]

    return useContext(Context)
}