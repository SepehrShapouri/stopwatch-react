import { useState, useRef } from "react";
import "./App.css";
const StopWatch = () => {
  const [now, setNow] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const intervalRef = useRef(null)
  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current)
   intervalRef.current =  setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const handleStop = ()=>{
    clearInterval(intervalRef.current)
  }
  let secondsPassed = 0;
  if (now != null || startTime != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <div className="main">
      <p>{secondsPassed.toFixed(3)}</p>
      <div className="buttonHolder">
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
      </div>
    </div>
  );
};

export default StopWatch;
