import React, { useEffect, useState } from 'react';
//1, Callback được gọi sau khi component đc mounted
//2, Cleanup function luôn được gọi trước khi component unmounted
//3, Cleanup function luôn được gọi trước khi callback được gọi
const TitleComponent = () => {
    return (
        <div>
            <h1>Xin chào các bạn</h1>
        </div>
    )
}

const CleanUpFunctionComponent = () => {
     const [show, setShow] = useState(false);
    const handelClick = () => {
        setShow(!show);
    }
    useEffect(() => {
        console.log('Use callback')
        return () => console.log("Clean up function")
    });
  return (
      <div>
            <button onClick={handelClick}>Toggle</button>
            {show && <TitleComponent />}
        </div>
  )
}

export default CleanUpFunctionComponent;