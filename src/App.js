import "./App.css";
import Video from "./video";
import { useRef, useEffect } from "react";

function App() {
  const videoRef = useRef();
  useEffect(() => console.log(videoRef.current));
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div style={{ padding: 20 }}>
      <Video ref={videoRef} />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}

export default App;
