import { useState, useLayoutEffect } from 'react';
//1, Cập nhật state
//2, Cập nhật DOM,
//3, Cleanup function nếu có,
//4, Gọi useLayoutEffect
//5, Render lại UI
const ContentComponent = () => {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count]);

    const handleCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>Run</button>
        </div>
    )
}
const FakeChatApp = () => {
    const [show, setShow] = useState(false);
    const handelClick = () => {
        setShow(!show);
    }
    return (
        <div>
            <button onClick={handelClick}>Toggle</button>
            {show && <ContentComponent />}
        </div>
    )
}

export default FakeChatApp