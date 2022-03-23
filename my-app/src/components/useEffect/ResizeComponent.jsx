import React, { useState, useEffect } from 'react'

const ResizeComponent = () => {
    //Dùng cho responsive rất tiện
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <div>
            <h1>Màn hình {width} x {height}</h1>
        </div>
    )
}

export default ResizeComponent;