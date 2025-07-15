import { useState } from "react";

export const CopyInput = () => {
  const [inputValue, setIpnutValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setIpnutValue(e.target.value)}
      />

      <button onClick={handleCopy}>Copy text</button>
    </div>
  );
};
