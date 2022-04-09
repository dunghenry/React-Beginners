import React from 'react';
const orders = [100, 200, 300];
const Main = () => {
    //?const total = orders.reduce((total, current) => total + current);
    //?console.log(total);
    //?const [count, setCount] = React.useState(total);//Mỗi lần render đều tính lại total là không cần thiết ảnh hưởng đến performance app

    const [count, setCount] = React.useState(() => {
        const total = orders.reduce((total, current) => total + current);
        console.log(total);
        return total;
    })

    const [info, setInfo] = React.useState({
        name: "Tran Dung",
        age: 21
    })
    const handleCount = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        //Vẫn chỉ render 1 lần mặc dù gọi callback 2 lần
    }
    const handleIncrease = () => {
        setCount(count + 1);
    }
    const handleInfo = () => {
        //setInfo({ ...info, bio: "Yêu màu hồng, hehe" })//?Cách 1
        //setInfo(prev => ({ prev, bio: "Yêu màu hồng, hehe" })); //?Cách 2
        setInfo(prev => ({ ...prev, bio: "Yêu màu hồng, hehe" })); //?Cách 3
    }
  return (
      <div>
          <h1>{count}</h1>
          <h2>{ JSON.stringify(info) }</h2>
          <button onClick={handleIncrease}>Count++</button>
          <button onClick={handleCount}>Count + 2</button>
          <button onClick={handleInfo}>Update Info</button>
    </div>
  )
}
export default Main;