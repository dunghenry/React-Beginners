import React from 'react';
const Content = () => {
    const [count, setCount] = React.useState(0);
    //Render UI lai cuoi cung va đồng bộ
    React.useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count])
    const handleCount = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <h1>{count}</h1>   
        <button onClick={handleCount}>Count++</button>  
    </div>
  )
}

export default Content;