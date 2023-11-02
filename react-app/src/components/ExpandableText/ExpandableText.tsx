import React, { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [showHideToggle, setShowHideToggle] = useState(false);

  const handleClick = () => {
    setShowHideToggle(!showHideToggle);
  };

  return (
    <div>
      {showHideToggle ? children : children.slice(0, maxChars)}
      <button onClick={handleClick}>{showHideToggle ? "Hide" : "Show"}</button>
    </div>
  );
};

export default ExpandableText;
