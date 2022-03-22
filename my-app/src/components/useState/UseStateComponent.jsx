import React, { useState } from 'react';
const orders = [1, 2, 3, 4, 5, 6, 7, 8];

const useStateComponent = () => {
  // const total = orders.reduce((total, item) => total + item);
  // console.log(total); //re-render luôn bị tính lại ảnh hưởng đến performance

  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, item) => total + item);
    return total;
  });

  const [info, setInfo] = useState({
    name: "Tran Van Dung",
    age: 21,
    address: "Ninh Binh"
  });

  //handle counter
  const increaseHandle = () => {
    // setCounter(counter + 1);

    //Sd callback
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);

  }

  //change <object width="" height="" data=""></object>
  const handleObject = () => {
    //C1
    // setInfo({ ...info, bio: "Yêu màu hồng ghét sự giả dối!Hehe" });

    //C2: Dùng callback
    setInfo(prevState => ({...prevState, bio: "Yêu màu hồng"}));

  }

  // console.log("re-render");

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseHandle}>Counter++</button>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleObject}>Change Object</button>
    </div>
  )
}

export default useStateComponent;