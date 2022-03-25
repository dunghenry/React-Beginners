import { useState, useCallback } from 'react';
import Content from './Content';
const UseCallback = () => {
    const [count, setCount] = useState(0);
    // const handleIncrease = () => {
    //     setCount(prev => prev + 1);
    // }

    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1);
    }, []) //Ko bi render lai vi giong nhu referene type, neu nhu dependency thay doi thi tra ve tham chieu moi, con khong thi tra ve tham chieu cu va cpn ko bi re render dung ms memo
  return (
      <div>
          <Content onIncrease={handleIncrease}/>
          <h1>{count}</h1>
    </div>
  )
}

export default UseCallback;