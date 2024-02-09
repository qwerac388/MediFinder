import React, { useState } from "react";
import styles from "./ServicePage.module.css";
import { hospitalSpecialistServices } from "../utils";

function ServicePageButton({ setSelectedService }) {
  const [selectedKey, setSelectedKey] = useState(null);

  // OnClick function for buttons
  const handleServiceClick = (serviceKey) => {
    setSelectedService(serviceKey);
    setSelectedKey(serviceKey);
  };

  return (
    <div className={styles["button-container"]}>
      {/* Map over a list of service keys to create buttons */}

      {Object.keys(hospitalSpecialistServices[0].specialistServices).map(
        (serviceKey) => (
          <button
            onClick={() => handleServiceClick(serviceKey)}
            key={serviceKey}
            // {highlighted color for selected button}
            className={`${styles["service-button"]} ${
              selectedKey === serviceKey ? styles["selected"] : ""
            }`}
          >
            {serviceKey}
          </button>
        )
      )}
    </div>
  );
}
export default ServicePageButton;
