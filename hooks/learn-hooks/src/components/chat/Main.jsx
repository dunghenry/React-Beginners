import React from 'react';
import Content from './Content';

const Main = () => {
    const [show, setShow] = React.useState(false)
    const handleShow = () => {
        setShow(!show);
    }
  return (
      <div>
          <button onClick={handleShow}>Toggle</button>
          {show && <Content/>}
    </div>
  )
}

export default Main;