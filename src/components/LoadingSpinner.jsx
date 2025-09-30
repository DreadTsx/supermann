import { useEffect, useState } from "react";

const LoadingSpinner = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  //
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete?.();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;
  //
  return (
    <div
      className="loader-container"
      role="status"
      aria-label="Loading content"
    >
      <div className="loader">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
      </div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
