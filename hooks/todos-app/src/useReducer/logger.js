function logger(reducer) {
    console.log(reducer);
    return (prevState, action) => {
        console.group(action.type);
        console.log(prevState);
        const newState = reducer(prevState, action);
        console.log(newState);
        console.groupEnd();
        return newState;
    }
}
export default logger;