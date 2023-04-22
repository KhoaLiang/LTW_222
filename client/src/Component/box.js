import React, { useState } from "react";

const BoxWithCopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "200px",
          
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          boxShadow: "2px 2px 5px #ccc",
          marginRight: "10px",
          backgroundColor: "white",
        }}
      >
        {text}
      </div>
      <button
        style={{
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleCopy}
      >
        {isCopied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
};

export default BoxWithCopyButton;
