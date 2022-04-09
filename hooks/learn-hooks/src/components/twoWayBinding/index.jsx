import React from 'react';
const gifts = [
  'CPU i9',
  "RAM 32GB RGB",
  "RGB Keyboard"
]
const Main = () => {
  const [gift, setGift] = React.useState();
  const handleGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  }
  console.log("render");
  return (
    <div>
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={handleGift}>Lấy phần thưởng</button>
    </div>
  )
}

export default Main