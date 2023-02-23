import { useState, useEffect } from "react";

const SlidingContent = ({ isActive, children }) => {
  const [isHidden, setIsHidden] = useState(!isActive);

  useEffect(() => {
    if (isActive) {
      setIsHidden(false);
    } else {
      const timeoutId = setTimeout(() => {
        setIsHidden(true);
      }, 400);
      return () => clearTimeout(timeoutId);
    }
  }, [isActive]);

  return (
    <div
      className={`sliding-content ${isHidden ? "hidden" : ""}`}
    >
      {children}
    </div>
  );
};

export default SlidingContent;
