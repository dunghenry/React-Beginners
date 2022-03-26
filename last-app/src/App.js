import './App.css';
import { useRef } from 'react';
import Video from './components/Video';

function App() {
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.play();
  }
  const handlePause = () => {
    videoRef.current.pause();
  }
  
  return (
    <div className="App" style={{padding: '10px 10px 0px'}}>
      <Video ref={videoRef} />
      <br></br>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
