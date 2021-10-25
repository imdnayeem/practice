import React, { useEffect, useRef, useState } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const interval = useRef();
  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer((x) => x + 1);
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div>
      {timer}
      <button onClick={() => clearInterval(interval.current)}>Reset</button>
    </div>
  );
}

export default HookTimer;
