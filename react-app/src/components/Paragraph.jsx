import React, {useContext} from 'react';
import {ThemeContext} from '../ThemeContext.jsx';
const Paragraph = () => {
    const value = useContext(ThemeContext);
  return (
    <div className={value.theme}>Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet</div>
  )
}

export default Paragraph;