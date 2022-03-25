import './App.css';
import { useContext } from 'react';
import Content from './components/Content';
import { ThemeContext } from './ThemeContext';
function App() {
  const value = useContext(ThemeContext);
  return (
    <div className="app" style={{ padding: '20px 40px' }}>
      <button onClick={value.toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}
export default App;
