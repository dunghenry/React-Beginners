import React, {useState, useEffect} from 'react'
const ContentComponent = () => {
    const [countdown, setCountdown] = useState(10);
    useEffect(() => {
        //Cách 1
        const timer = setInterval(() => {
            setCountdown(prevState => {
                if (prevState <= 0 ){
                    setCountdown(0)
                }
                return prevState - 1;
            });
        }, 1000);
        return () => {
            clearInterval(timer);
        }

        //Cách 2
        // const timer = setTimeout(() => {
        //     setCountdown(countdown - 1);
        //     if (countdown <= 0) {
        //         setCountdown(0);
        //     }
        // }, 1000)
        // return () =>{
        //     clearTimeout(timer)
        // }
    }, []) //nếu dùng setimeout phải thêm countdown vào dependency để component re-render lại nếu countdown thay đổi

    return (
        <h1>
            {countdown}
        </h1>
    )
}
const TimerFunctionsComponent = () => {
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

export default TimerFunctionsComponent;