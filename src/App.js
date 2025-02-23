import React, { useState } from 'react';
import './index.css';

function App() {
  const [time, setTime] = useState(900); // 25 minutos en segundos
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(900);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  React.useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="browser-window">
      <div className="browser-header">
        <div className="browser-buttons">
          <span className="close-btn"></span>
          <span className="minimize-btn"></span>
          <span className="maximize-btn"></span>
        </div>
      </div>
    <div className="app" style={{ backgroundImage: 'url(/cute-center-image.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
      <h1 className={isRunning ? 'spinning-flower' : '' } style={{ fontSize: '2.5rem', fontWeight: 'bolder' }}>
        <div className="title-container">
          <span>Rice Timer ⏳</span>
        </div>
      </h1>
      <div className="timer">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={startTimer}>🌸 Start</button>
        <button onClick={stopTimer}>🌼 Stop</button>
        <button onClick={resetTimer}>🌈 Reset</button>
        </div>
        </div>
      </div>
  );
}

export default App;
