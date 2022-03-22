import React, { useState } from 'react'
const TitleComponent = () => {
    return (
        <div>
            <h1>Hello cac ban nhe</h1>
        </div>
    )
}
const MountedUnmounted = () => {
    const [show, setShow] = useState(false);
    const handelClick = () => {
        setShow(!show);
    }
    return (
        <div>
            <button onClick={handelClick}>Toggle</button>
            {show && <TitleComponent />}
        </div>
    )
}

export default MountedUnmounted;