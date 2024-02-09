import React from "react";
import styles from "../App.module.css";

function Redirection({ userLocation, location }) {
  // Determine which location to redirect for the map
  const mapLocation = location || userLocation;
  const redirectToGoogleMaps = () => {
    window.open(
      `https://maps.google.com/maps?q=${mapLocation.latitude},${mapLocation.longitude}`
    );
  };

  const redirectToAppleMaps = () => {
    window.open(
      `http://maps.apple.com/maps?daddr=${mapLocation.latitude},${mapLocation.longitude}`
    );
  };

  return (
    <div className={`${styles["redirectContainer"]}`}>
      <button
        onClick={redirectToGoogleMaps}
        className={`${styles["mapButton"]}`}
      >
        Google Map
      </button>

      <button
        onClick={redirectToAppleMaps}
        className={`${styles["mapButton"]}`}
      >
        Apple Map
      </button>
    </div>
  );
}
export default Redirection;
