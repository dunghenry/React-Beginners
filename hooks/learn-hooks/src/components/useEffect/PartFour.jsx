import React from 'react';
const PartFour = () => {
    const [countdown, setCountdown] = React.useState(100);
    // C1
    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCountdown(prev => prev - 1);
    //     }, 1000);
    //     console.log(timer)
    //     return () => clearInterval(timer);
    // }, []);
    //C2
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);
        return () => clearTimeout(timer);    
    }, [countdown]);
    console.log('Render')
  return (
      <div>
          {countdown}
    </div>
  )
}

export default PartFour