import React from "react";
import styles from "./ServicePage.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

import ServicePageRedirection from "./ServicePageRedirection";

function ServicePageMap({ userLocation, location }) {
  // Determine which location to use for the map
  const mapLocation = location || userLocation;

  // If neither location nor userLocation is provided, show a loading message
  if (!mapLocation) {
    return (
      <div>
        <HourglassBottomIcon />
        地圖更新中...
      </div>
    );
  }

  // Create the URL for the OpenStreetMap iframe src attribute
  const openStreetMapURL = `https://www.openstreetmap.org/export/embed.html?bbox=${
    mapLocation.longitude - 0.0005
  }%2C${mapLocation.latitude - 0.0005}%2C${mapLocation.longitude + 0.005}%2C${
    mapLocation.latitude + 0.005
  }&layer=mapnik&marker=${mapLocation.latitude}%2C${mapLocation.longitude}`;

  return (
    <div className={styles["mapWrapper"]}>
      <p className={styles["mapHeading"]}>
        <LocationOnIcon />
        {location ? `${location.hospitalName}位置：` : "您的當前位置："}
      </p>
      <div className={styles["mapContainer"]}>
        <iframe
          src={openStreetMapURL}
          className={styles.iframe}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <ServicePageRedirection
          userLocation={userLocation}
          location={location}
        />
      </div>
    </div>
  );
}

export default ServicePageMap;
