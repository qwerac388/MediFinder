import React, { useEffect, useState, useRef } from "react";
import styles from "../App.module.css";
import SearchBar from "./SearchBar";
import LastUploadTime from "./LastUploadTime";
import { isWaitTimeOverTwoHours } from "./utils";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavigationIcon from "@mui/icons-material/Navigation";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import { hospitalSpecialistServices } from "./utils";
import { districtColor2 } from "./utils";
import ShareMap from "./ShareMap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "./utils";
import LoadingOpening from "./Loading";

function WaitTime({
  userLocation,
  setUserLocation,
  showIconContainer,
  setShowIconContainer,
  CORS,
}) {
  //A&E waiting time
  const API1 = `${CORS}https://www.ha.org.hk/opendata/aed/aedwtdata-tc.json`;

  //Hospital address,website,contact
  const API2 = `${CORS}https://api.csdi.gov.hk/apim/dataquery/api/?id=fhb_rcd_1637028364270_14638&layer=geotagging&limit=200&offset=0`;

  //Distance and Hospital Name API
  const hospitalUrl = `${CORS}https://www.ha.org.hk/opendata/facility-hosp.json`;

  //For Distance API use
  const [hospitals, setHospitals] = useState([]);
  const [distances, setDistances] = useState([]);

  //For Hospital Tel API use
  const [isFetching2, setIsFetching2] = useState(false);
  const [hospitalsData, setHospitalsData] = useState([]);

  //For WaitTime API use
  const [isFetching, setIsFetching] = useState(false);
  const [latestTime, setLatestTime] = useState("");
  const [characters, setCharacters] = useState([]); // array

  //for searchBar use
  const [searchTerm, setSearchTerm] = useState("");

  //For Map use
  const [selectedHospitalLocation, setSelectedHospitalLocation] =
    useState(null);

  //Error msg
  const [errorMsg, setErrorMsg] = useState("");

  //For waitTimeButton use
  const [filterWait, setFilterWait] = useState(""); // "1" or "!1"

  // Ref to store slider instance
  const sliderRef = useRef(null);

  // Function to handle CloseIcon click
  const handleCloseIconClick = () => {
    setShowIconContainer(false);
  };

  // Reset the slider to the first slide when the search term is cleared
  useEffect(() => {
    if (searchTerm === "" && sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [searchTerm]);

  // Function to update the selected hospital location
  const handleHospitalSelect = (location) => {
    setSelectedHospitalLocation(location);
  };

  // Function to filter hospitals based on search term and waitTimebuttons
  const getFilteredDistances = () => {
    let filteredDistances = distances;

    // First, filter by search term if there's one
    if (searchTerm) {
      filteredDistances = filteredDistances.filter((distanceItem) =>
        distanceItem.hospital.institution_tc.includes(searchTerm)
      );
    }

    // Then, if there's a wait time filter, apply it
    if (filterWait) {
      filteredDistances = filteredDistances.filter((distanceItem) => {
        // Step 2 : Need to a matching hospital name for the upper part
        const characterItem = characters.find(
          (charItem) =>
            charItem.hospName === distanceItem.hospital.institution_tc
        );

        // Step 3 : further apply the button filter based on the 'topWait' value and the filterWait state
        if (characterItem) {
          const waitTime = characterItem.topWait;
          if (filterWait === "1") {
            return waitTime.includes("1");
          } else if (filterWait === "!1") {
            return !waitTime.includes("1");
          }
        }
        return false;
      });
    }

    return filteredDistances;
  };

  // Reset wait time button filter when search term changes
  useEffect(() => {
    setFilterWait("");
  }, [searchTerm]);

  //WaitTime API Fetching
  useEffect(() => {
    const getData = async () => {
      try {
        setIsFetching(true);
        const res = await fetch(API1);
        const { waitTime, updateTime } = await res.json();
        setCharacters(waitTime);
        setLatestTime(updateTime);
      } catch (err) {
        console.log(err);
      } finally {
        setIsFetching(false);
      }
    };
    getData();
  }, []);

  //OnClick function for the waitTime button
  const handleOneHourClick = () => {
    setFilterWait("1");
  };

  const handleTwoHourClick = () => {
    setFilterWait("!1");
  };

  // On Click function for hospital container
  const handleHospitalClick = (hospital) => {
    // Call the onHospitalSelect function provided by the parent component

    handleHospitalSelect({
      latitude: hospital.latitude,
      longitude: hospital.longitude,
      hospitalName: hospital.institution_tc,
    });
  };

  //Hospital Tel API fetching
  useEffect(() => {
    const getData2 = async () => {
      try {
        setIsFetching2(true);
        const res = await fetch(API2);
        const data = await res.json();

        // Create an array to hold all hospital names and contact numbers
        const hospitalsData = data.features.map((feature) => {
          const properties = feature.properties;
          // Replace <br/> with space or any other preferred separator
          const contact = properties.NSEARCH02_TC.replace("<br/>", " / ");
          return {
            name: properties.NAME_TC,
            contact: contact,
            website: properties.NSEARCH03_TC,
            address: properties.ADDRESS_TC,
            latitude: properties.LATITUDE,
            longitude: properties.LONGITUDE,
          };
        });
        setHospitalsData(hospitalsData);
      } catch (err) {
        console.log(err);
      } finally {
        setIsFetching2(false);
      }
    };
    getData2();
  }, []);

  //Distance API Fetching

  //Get User Geo Location
  useEffect(() => {
    fetchUserLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetchHospitalData();
    }
  }, [userLocation]);

  useEffect(() => {
    if (hospitals.length > 0 && userLocation) {
      calculateDistances(hospitals);
    }
  }, [hospitals, userLocation]);

  const fetchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLatitude = position.coords.latitude;
          const userLongitude = position.coords.longitude;
          setUserLocation({
            latitude: userLatitude,
            longitude: userLongitude,
          });
        },
        (error) => {
          setErrorMsg("⚠️ 請允許系統存取您的當前位置 及 重新更新頁面 ⚠️");
          // fetchUserLocation();
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const fetchHospitalData = async () => {
    try {
      const response = await fetch(hospitalUrl);
      const data = await response.json();
      const filteredHospitals = data.filter(
        (hospital) => hospital.with_AE_service_eng === "Yes"
      );
      setHospitals(filteredHospitals);
      calculateDistances(filteredHospitals);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateDistances = (hospitals) => {
    if (userLocation) {
      const distances = hospitals.map((hospital) => {
        const lat1 = parseFloat(hospital.latitude);
        const lon1 = parseFloat(hospital.longitude);
        const lat2 = userLocation.latitude;
        const lon2 = userLocation.longitude;
        const R = 6371; // Radius of the Earth in kilometers
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in kilometers
        return { hospital, distance };
      });
      //Sort distances in ascending order
      distances.sort((a, b) => a.distance - b.distance);
      setDistances(distances);
    }
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  // console.log(hospitals);
  // console.log(distances);
  // console.log(characters);

  return (
    <div className={styles["main-container"]}>
      <LoadingOpening />
      <h1>急症室等候時間</h1>
      {showIconContainer && (
        <div className={styles["taxi-icon-container"]}>
          <div className={styles["taxi-icon-wrap"]}>
            <CloseIcon
              onClick={handleCloseIconClick}
              role="button"
              tabIndex={0}
            />
            <a
              href="https://www.hktaxiapp.com/r/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://play-lh.googleusercontent.com/hcDITPghryGJ7i47u2U3naH29izIxUiNQb-QX0zimJJKQzAjuO7YIVHoyn7EbhAHU8yt=w480-h960-rw"
                alt="HKTaxi App"
                style={{
                  width: "5.5em",
                  backgroundColor: "#ffffff",
                  borderRadius: "1em",
                  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.08)",
                }}
              />
            </a>
          </div>
        </div>
      )}
      <p className={styles["errorMsg"]}>{errorMsg}</p>
      <div id="hospitalDisplayWrapper">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="MapWithDistanceWrapper">
          <ShareMap
            userLocation={userLocation}
            location={selectedHospitalLocation}
          />
        </div>
        {distances.length > 0 ? (
          <div>
            <div className={styles["hospital-container"]}>
              <div className={styles["locationtextAndSelectContainer"]}>
                <p className={styles["locationText"]}>
                  <LocationOnIcon sx={{ fontSize: 16, padding: 0.1 }} />
                  以下是距離您當前位置最近的急症室服務：
                </p>

                <div className={styles["waitTimeButtonContainer"]}>
                  <button
                    className={styles["oneHourButton"]}
                    onClick={handleOneHourClick}
                  >
                    1 小時
                  </button>
                  <button
                    className={styles["twoHourButton"]}
                    onClick={handleTwoHourClick}
                  >
                    2 小時或以上
                  </button>
                </div>
              </div>
              <Slider ref={sliderRef} {...settings}>
                {getFilteredDistances().map((item, index) => (
                  <div
                    key={index}
                    className={styles["hospital-item"]}
                    onClick={() => handleHospitalClick(item.hospital)}
                  >
                    <div
                      className={districtColor2(
                        // Use find to locate the matching service and return its district
                        hospitalSpecialistServices.find(
                          (obj) => obj.name === item.hospital.institution_tc
                        )?.district
                      )}
                    >
                      <p>
                        {
                          // Use find to locate the matching service and return its district
                          hospitalSpecialistServices.find(
                            (obj) => obj.name === item.hospital.institution_tc
                          )?.district
                        }
                      </p>
                    </div>
                    <h2>
                      {item.hospital.institution_tc}
                      <span>
                        &emsp;
                        <span class="glyphicon glyphicon-map-marker"></span>
                        {item.distance.toFixed(0)} km
                      </span>
                    </h2>
                    <img
                      src={
                        hospitalSpecialistServices.find(
                          (obj) => obj.name === item.hospital.institution_tc
                        )?.img
                      }
                      alt="hospital-image"
                      className={styles["hospital-image"]}
                    />
                    {isFetching ? (
                      <p>
                        <HourglassBottomIcon />
                        等候時間更新中...
                      </p>
                    ) : (
                      characters
                        .filter(
                          (char) =>
                            char.hospName === item.hospital.institution_tc
                        )
                        .map(({ hospName, topWait }) => (
                          <div key={hospName} className="wait-Time">
                            <p>
                              等候時間：
                              <span
                                className={
                                  isWaitTimeOverTwoHours(topWait)
                                    ? styles.redText
                                    : styles.blueText
                                }
                              >
                                {topWait}
                              </span>
                            </p>
                          </div>
                        ))
                    )}

                    {isFetching2 ? (
                      <p>
                        <HourglassBottomIcon />
                        詳細資訊更新中...
                      </p>
                    ) : (
                      hospitalsData
                        .filter(
                          (hospitalsData) =>
                            hospitalsData.name === item.hospital.institution_tc
                        )
                        .map(({ name, contact, website, address }) => (
                          <div key={name}>
                            <p>
                              <NavigationIcon style={{ color: "#2683fd" }} />
                              <a>&emsp;{address}</a>
                            </p>
                            <p>
                              <CallIcon style={{ color: "#2683fd" }} />

                              <a href={`tel:${contact}`}>&emsp; {contact}</a>
                            </p>
                            <p>
                              <InfoIcon style={{ color: "#2683fd" }} />
                              <a
                                href={website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                &emsp;查看更多
                              </a>
                            </p>
                          </div>
                        ))
                    )}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ) : (
          <p>
            <HourglassBottomIcon />
            醫院距離更新中...
          </p>
        )}

        <footer>
          <LastUploadTime latestTime={latestTime} />
        </footer>
      </div>
    </div>
  );
}

export default WaitTime;
