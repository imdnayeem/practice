import React from "react";
import "./myStyles.css";

function StyleSheet({ primary }) {
  let className = primary ? "primary" : "";
  return (
    <div>
      <p className={`${className} font-xl`}>Style Sheet</p>
    </div>
  );
}

export default StyleSheet;
