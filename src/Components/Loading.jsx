import React, { useState, useEffect } from "react";
import styles from "../App.module.css";

function LoadingOpening() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Simulating a delay for the preloader to be displayed
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 700);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      {showPreloader && (
        <div className={styles["preloader"]}>
          <div className={styles["spinner"]}></div>
        </div>
      )}
    </>
  );
}

export default LoadingOpening;
