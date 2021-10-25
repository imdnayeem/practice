import React, { useEffect, useRef } from "react";

function FocusInput() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  );
}

export default FocusInput;
