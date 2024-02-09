import React from "react";
import { useEffect, useState, useRef } from "react";
import SearchBar from "./SearchBar";
import ShareMap from "./ShareMap";
import styles from "../App.module.css";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavigationIcon from "@mui/icons-material/Navigation";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import { hongKongDistricts } from "./utils";
import Slider from "react-slick";
import { districtColor3 } from "./utils";
import LoadingOpening from "./Loading";

function GeneralPage({
  userLocation,
  showIconContainer,
  setShowIconContainer,
}) {
  const generalAPI = `https://www.ha.org.hk/opendata/facility-gop.json`;

  const quotaAPI = `https://www.ha.org.hk/pas_gopc/pas_gopc_avg_quota_pdf/g0_9uo7a_p-tc.json`;

  //for searchBar use
  const [searchTerm, setSearchTerm] = useState("");

  // For generalAPI use
  const [isFetching4, setIsFetching4] = useState(false);
  const [hospitalGeneral, setHospitalGeneral] = useState([]);

  // For quotaAPI use
  const [isFetching5, setIsFetching5] = useState(false);
  const [hospitalQuota, setHospitalQuota] = useState([]);

  // For Distance use
  const [sortedGeneralHospitals, setSortedGeneralHospitals] = useState([]);

  //for Map use
  const [selectedHospitalLocation2, setSelectedHospitalLocation2] =
    useState(null);

  // Ref to store slider instance
  const sliderRef = useRef(null);

  // Reset the slider to the first slide when the search term is cleared
  useEffect(() => {
    if (searchTerm === "" && sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [searchTerm]);

  // Function to handle CloseIcon click
  const handleCloseIconClick = () => {
    setShowIconContainer(false);
  };

  const handleHospitalSelect2 = (location) => {
    setSelectedHospitalLocation2(location);
  };

  //for selected district value
  const [filterValue, setFilterValue] = useState(null);

  const handleSelectChange = (event) => {
    setFilterValue(event.target.value === "篩選" ? null : event.target.value);
  };

  // On Click function for hospital container
  const handleHospitalClick2 = (hospital) => {
    // Call the onHospitalSelect function provided by the parent component

    handleHospitalSelect2({
      latitude: hospital.latitude,
      longitude: hospital.longitude,
      hospitalName: hospital.institution_tc,
    });

    const scrollToPosition = () => {
      window.scrollTo({
        top: 100, // Scroll to the top of the page
        behavior: "smooth", // Add smooth scrolling behavior
      });
    };
    scrollToPosition();
  };

  // General API Fetching
  useEffect(() => {
    const getData4 = async () => {
      try {
        setIsFetching4(true);
        const res = await fetch(generalAPI);
        const data = await res.json();
        setHospitalGeneral(data);
        console.log(hospitalGeneral); // Move the console.log inside the useEffect
      } catch (err) {
        console.log(err);
      } finally {
        setIsFetching4(false);
      }
    };
    getData4();
  }, []);

  // Quota API Fetching
  useEffect(() => {
    const getData5 = async () => {
      try {
        setIsFetching5(true);
        const res = await fetch(quotaAPI);
        const data = await res.json();
        setHospitalQuota(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsFetching5(false);
      }
    };
    getData5();
  }, []);

  // Calculate Distances, sort them and update state
  useEffect(() => {
    if (userLocation && hospitalGeneral.length) {
      const calculateDistances = () => {
        return hospitalGeneral.map((hospital) => {
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
          return { hospital, distance }; // Add distance data to the hospital object
        });
      };

      const distances = calculateDistances();
      distances.sort((a, b) => a.distance - b.distance);
      setSortedGeneralHospitals(distances);

      // Apply district filter if filterValue is set, otherwise use all distances
      const filteredDistances = filterValue
        ? distances.filter(
            (obj) =>
              hospitalQuota.find(
                (quota) => quota.Clinic === obj.hospital.institution_tc
              )?.District === filterValue
          )
        : distances;

      setSortedGeneralHospitals(filteredDistances);
    }
  }, [userLocation, hospitalGeneral, filterValue]); // Add filterValue to the dependency array

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  //slider setting
  const settings4 = {
    dots: true,
    infinite: false,
    speed: 500,
    initialSlide: 0, // Start with the first slide
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0, // Ensure the first slide is shown on mobile
          dots: false,
        },
      },
    ],
  };

  console.log(hospitalGeneral);
  console.log(hospitalQuota);
  console.log(sortedGeneralHospitals);

  return (
    <div className={styles["main-container"]}>
      <LoadingOpening />
      <h1>普通科門診診所</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ShareMap
        userLocation={userLocation}
        location={selectedHospitalLocation2}
      />
      <div className={styles["serviceText-container"]}>
        {/* to remove the floating icon once user clicked x */}
        {showIconContainer && (
          <div className={styles["iconContainer"]}>
            <div className={styles["iconWrap"]}>
              <CloseIcon
                onClick={handleCloseIconClick}
                role="button"
                tabIndex={0}
              />
              <a
                href="https://www3.ha.org.hk/hago/Home/DownloadApps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles["haGO"]}
                  src="https://play-lh.googleusercontent.com/IZP8Pl7b1QSsMTerRcnL9ekl7uosH7DCJGeNLsNLb4vlxBc_9KV9wgvYzZcLk3FiHd4"
                  alt="HA-GO"
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
        <div className={styles["locationtextAndSelectContainer"]}>
          <p className={styles["locationText"]}>
            <LocationOnIcon sx={{ fontSize: 16, padding: 0.1 }} />
            以下是距離您當前位置最近的普通科門診：
          </p>
          <div className={styles["selectContainer"]}>
            {
              <select
                className={styles["select"]}
                onChange={handleSelectChange}
              >
                <option>篩選</option>
                {hongKongDistricts.map((district, index) => (
                  <option value={district} key={index}>
                    {district}
                  </option>
                ))}
              </select>
            }
          </div>
        </div>
        <section className={styles["specialistServices-container"]}>
          {/* {to fix dynamically changing data and added a condition to display first slider on mobile} */}
          {sortedGeneralHospitals.length > 0 ? (
            <Slider
              key={isFetching4 ? "loading" : "loaded"}
              ref={sliderRef}
              {...settings4}
            >
              {isFetching4 ? (
                <p>
                  <HourglassBottomIcon />
                  資料更新中...
                </p>
              ) : (
                sortedGeneralHospitals
                  .filter((obj) =>
                    obj.hospital.institution_tc.includes(searchTerm)
                  ) //for input function
                  .map((hospital, index) => (
                    <div
                      key={index}
                      className={styles["hospital-item"]}
                      onClick={() => handleHospitalClick2(hospital.hospital)}
                    >
                      {/* <div
                    className={districtColor2(
                      //// Use find to locate the matching 醫院聯網 and return its district
                      hospitalSpecialistServices.find(
                        (obj) => obj.type === hospital.hospital.cluster_tc
                      )?.district
                    )}
                  >
                    {
                      // Use find to locate the matching 醫院聯網 and return its district
                      hospitalSpecialistServices.find(
                        (obj) => obj.type === hospital.hospital.cluster_tc
                      )?.district
                    }
                  </div> */}
                      <div
                        className={districtColor3(
                          // Use find to locate the matching clinic name and return its 18區 styling
                          hospitalQuota.find(
                            (obj) =>
                              obj.Clinic === hospital.hospital.institution_tc
                          )?.District
                        )}
                      >
                        {/* {Use find to locate the matching clinic name and return to its 18區} */}
                        <p className={styles["generalPageDistrictColor"]}>
                          {
                            hospitalQuota.find(
                              (obj) =>
                                obj.Clinic === hospital.hospital.institution_tc
                            )?.District
                          }
                        </p>
                      </div>
                      <h2 className={styles["bold"]}>
                        {hospital.hospital.institution_tc}&emsp;
                        <span>
                          <span class="glyphicon glyphicon-map-marker"></span>
                          {hospital.distance.toFixed(1)}km
                        </span>
                      </h2>
                      {/* 
                  <h4 className={styles["newServices-title"]}>
                    <ClassIcon />
                    {hospital.hospital.cluster_tc}
                  </h4> */}

                      <p>
                        <QueryBuilderIcon style={{ color: "#2683fd" }} />
                        &emsp;
                        {/* {Use find to locate the matching clinic name and return to its 18區} */}
                        {isFetching5 ? (
                          <p>
                            <HourglassBottomIcon />
                            資料更新中...
                          </p>
                        ) : (
                          hospitalQuota.find(
                            (obj) =>
                              obj.Clinic === hospital.hospital.institution_tc
                          )?.["Doctor Consultation Sessions"]
                        )}
                      </p>
                      <p>
                        <CalendarMonthIcon style={{ color: "#2683fd" }} />
                        &emsp;
                        {/* {Apple mobile device will redirect to App store, Andriod --> Google store, Desktop device all redirect to Google store} */}
                        <a
                          href="https://www3.ha.org.hk/hago/Home/DownloadApps/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          經 「 HA Go 」預約新症
                        </a>
                      </p>
                      <p>
                        <NavigationIcon style={{ color: "#2683fd" }} />
                        &emsp;
                        <a>{hospital.hospital.address_tc}</a>
                      </p>
                    </div>
                  ))
              )}
            </Slider>
          ) : (
            <p>
              <HourglassBottomIcon />
              醫院距離更新中...
            </p>
          )}
        </section>
      </div>
      <div className={styles["footer-wrapper"]}>
        <footer>© 資料歸香港公立醫院版權所有</footer>
        <footer>更新頻率 : 每季 (1月、4月、7月及10月) </footer>
      </div>
    </div>
  );
}

export default GeneralPage;
