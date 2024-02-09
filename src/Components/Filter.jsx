import React from "react";
import styles from "../App.module.css";

function Filter() {
  const latitude = 37.7749; // Sample latitude
  const longitude = -122.4194; // Sample longitude

  const redirectToGoogleMaps = () => {
    window.open(`https://maps.google.com/maps?q=${latitude},${longitude}`);
  };

  const redirectToAppleMaps = () => {
    window.open(`http://maps.apple.com/maps?daddr=${latitude},${longitude}`);
  };
  return (
    <div className={styles["FilterWrapper"]}>
      <button>
        <span class="glyphicon glyphicon-align-center"></span>
        <span>篩選</span>
      </button>
      <button>
        <span class="glyphicon glyphicon-map-marker"></span>
        <span>位置</span>
      </button>
    </div>
  );
}

export default Filter;
