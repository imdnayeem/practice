import React from "react";
import reactDom from "react-dom";

function PortalDemo() {
  return reactDom.createPortal(
    <div>Portal Demo</div>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
