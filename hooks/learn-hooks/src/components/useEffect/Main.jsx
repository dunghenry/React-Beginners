import React from 'react'
import PartOne from './PartOne';
import PartTwo from './PartTwo';
import PartThree from './PartThree';
import PartFour from './PartFour';
import PartFive from './PartFive';

const Main = () => {
    const [show, setShow] = React.useState(false)
    const handleShow = () => {
        setShow(!show);
    }
  return (
      <div>
          <button onClick={handleShow}>Toggle</button>
          {show && <PartFive/>}
    </div>
  )
}

export default Main