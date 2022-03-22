import React, { useState } from 'react';

const ExersiesUseState = () => {
    const gifts = ['CPU i9', 'RAM 32GB RGB', 'RGB Keyboard'];
    const [gift, setGift] = useState();
    
    const handleGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    }
  return (
    <div>
          <h1>{gift || "Chưa có phần thưởng"}</h1>
          <button onClick={handleGift}>Lấy phần thưởng ngẫu nhiên</button>
    </div>
  )
}

export default ExersiesUseState;