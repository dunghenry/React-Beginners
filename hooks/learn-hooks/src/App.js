import React from 'react';
import './App.css';
import Main from './components/useContext';
import { ThemeContext } from './ThemeContext';
function App() {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <div className="App">
      <button onClick={toggleTheme}>Toggle theme</button>
      <Main/>
    </div>
  );
}

export default App;
