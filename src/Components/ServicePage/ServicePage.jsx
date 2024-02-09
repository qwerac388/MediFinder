import styles from "./ServicePage.module.css";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavigationIcon from "@mui/icons-material/Navigation";
import InfoIcon from "@mui/icons-material/Info";
import ClassIcon from "@mui/icons-material/Class";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import React, { useState, useEffect, useRef } from "react";
import { hospitalSpecialistServices } from "../utils";
import ServicePageButton from "./ServicePageButton";
import ServicePageMap from "./ServicePageMap";
import { districtColor } from "../utils";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import ServicePageSearchBar from "./ServicePageSearchBar";
import Slider from "react-slick";
import LoadingOpening from "../Loading";

function ServicePage({
  userLocation,
  CORS,
  showIconContainer,
  setShowIconContainer,
}) {
  const BookingWaitTimeAPI = `${CORS}https://www.ha.org.hk/opendata/sop/sop-waiting-time-tc.json`;

  //for BookingAPI use
  const [isFetching3, setIsFetching3] = useState(false);
  const [hospitalsBooking, setHospitalsBooking] = useState([]);

  //for selected button
  const [selectedService, setSelectedService] = useState(null);

  //for Distance use
  const [allHospitals, setAllHospitals] = useState([]);

  //for searchBar use
  const [searchTerm, setSearchTerm] = useState("");

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

  // On Click function for hospital container
  const handleHospitalClick2 = (hospital) => {
    // Call the onHospitalSelect function provided by the parent component

    handleHospitalSelect2({
      latitude: hospital.latitude,
      longitude: hospital.longitude,
      hospitalName: hospital.name,
    });

    // const scrollToPosition = () => {
    //   window.scrollTo({
    //     top: 100, // Scroll to the top of the page
    //     behavior: "smooth", // Add smooth scrolling behavior
    //   });
    // };
    // scrollToPosition();
  };

  //BookingWaitTime API Fetching
  useEffect(() => {
    const getData3 = async () => {
      try {
        setIsFetching3(true);
        const res = await fetch(BookingWaitTimeAPI);
        const data = await res.json();
        setHospitalsBooking(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsFetching3(false);
      }
    };
    getData3();
  }, []);

  // Calculate Distances and sort them
  useEffect(() => {
    if (userLocation) {
      const distances = hospitalSpecialistServices.map((hospital) => {
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
      distances.sort((a, b) => a.distance - b.distance); // Sort by distance
      setAllHospitals(distances); // Set sorted hospitals with distances
    }
  }, [userLocation]); // This effect should only run when userLocation changes

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };
  //slider setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
        },
      },
    ],
  };

  //li slider setting
  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
        },
      },
    ],
  };

  console.log(hospitalsBooking);
  console.log(allHospitals);

  return (
    <div className={styles["servicePage-container"]}>
      <LoadingOpening />
      <h1>專科服務</h1>
      <div className={styles["allComponents"]}>
        <div className={styles["left-container"]}>
          <ServicePageSearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
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
          <ServicePageButton setSelectedService={setSelectedService} />

          <div className={styles["specialistServices-container"]}>
            <div className={styles["serviceText-container"]}>
              <p className={styles["locationText"]}>
                <LocationOnIcon sx={{ fontSize: 16, padding: 0.1 }} />
                以下是距離您當前位置最近的專科醫院：
              </p>
            </div>
            {allHospitals.length > 0 ? (
              <Slider
                ref={sliderRef}
                key={isFetching3 ? "loading" : "loaded"}
                {...settings}
              >
                {isFetching3 ? (
                  <p>
                    <HourglassBottomIcon />
                    資料更新中...
                  </p>
                ) : (
                  allHospitals
                    .filter(
                      (obj) =>
                        (selectedService === null ||
                          obj.hospital.specialistServices[selectedService] ===
                            1) &&
                        obj.hospital.name.includes(searchTerm)
                    )
                    .map((obj) => (
                      <div
                        key={obj.hospital.name}
                        className={styles["border"]}
                        onClick={() => handleHospitalClick2(obj.hospital)}
                      >
                        <div className={styles["upperCardContainer"]}>
                          <div className={styles["upperCardLeftContainer"]}>
                            <div className={styles[districtColor(obj)]}>
                              <p>{obj.hospital.district}</p>
                            </div>
                            <h2 className={styles["bold"]}>
                              {obj.hospital.name}&emsp;
                              <span>
                                <span class="glyphicon glyphicon-map-marker"></span>
                                {obj.distance.toFixed(1)}km
                              </span>
                            </h2>

                            <img
                              src={obj.hospital.img}
                              alt="hospital-image"
                              className={styles["hospital-image"]}
                            />
                          </div>
                          <div className={styles["upperCardRightContainer"]}>
                            <p>
                              <NavigationIcon style={{ color: "#2683fd" }} />
                              &emsp;
                              <a>{obj.hospital.address}</a>
                            </p>
                            <p>
                              <CallIcon style={{ color: "#2683fd" }} />
                              &emsp;
                              <a href={`tel:${obj.hospital.contact}`}>
                                {obj.hospital.contact}
                              </a>
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
                                經「 HA Go 」預約新症
                              </a>
                            </p>

                            <p>
                              <InfoIcon style={{ color: "#2683fd" }} />
                              <a
                                href={obj.hospital.website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                &emsp;查看更多
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className={styles["breakLine"]}></div>
                        <h4 className={styles["newServices-title"]}>
                          <ClassIcon />
                          {obj.hospital.type} 新症平均輪候時間 :
                        </h4>

                        <ol>
                          <Slider {...settings2}>
                            {/* to filter out the matched selected service according to user click and move it to the first position inside the ul list using spread in arrays */}
                            {/* {service=key, avaiable= value} */}
                            {/* { ===1checks if selectedService is truthy (i.e., not null, undefined, '', false, or 0), } */}
                            {[
                              ...(selectedService &&
                              obj.hospital.specialistServices[
                                selectedService
                              ] === 1
                                ? [[selectedService, 1]]
                                : []),
                              ...Object.entries(
                                obj.hospital.specialistServices
                              ).filter(
                                ([service, available]) =>
                                  available === 1 && service !== selectedService
                              ),
                            ].map(([service, _], index) => {
                              const isSelectedService =
                                service === selectedService;
                              // Find the booking wait time for the current service
                              const waitTimeUrgent = hospitalsBooking.find(
                                (time) =>
                                  time.cluster === obj.hospital.type &&
                                  time.specialty === service &&
                                  time.Category === "緊急新症 - 中位數"
                              );

                              const waitTimeStableSemiUrgent =
                                hospitalsBooking.find(
                                  (time) =>
                                    time.cluster === obj.hospital.type &&
                                    time.specialty === service &&
                                    time.Category === "半緊急新症 - 中位數"
                                );

                              const waitTimeStable = hospitalsBooking.find(
                                (time) =>
                                  time.cluster === obj.hospital.type &&
                                  time.specialty === service &&
                                  time.Category === "穩定新症 - 中位數"
                              );

                              const waitTimeStableLongest =
                                hospitalsBooking.find(
                                  (time) =>
                                    time.cluster === obj.hospital.type &&
                                    time.specialty === service &&
                                    time.Category === "穩定新症 - 最長"
                                );

                              return (
                                <li
                                  key={index}
                                  className={
                                    isSelectedService
                                      ? styles.selectedService
                                      : ""
                                  }
                                >
                                  <p className={styles["bold-service"]}>
                                    {service}
                                  </p>
                                  <span>
                                    {isFetching3 ? (
                                      <p>
                                        <HourglassBottomIcon />
                                        新症大慨輪候時間更新中...
                                      </p>
                                    ) : (
                                      <p>
                                        {waitTimeUrgent ? (
                                          <div>
                                            <p className={styles["red"]}>
                                              {/* <AccessTimeIcon
                                          style={{ color: "#2683fd" }}
                                        /> */}
                                              緊急新症：{waitTimeUrgent.Value}
                                            </p>
                                            <p className={styles["orange"]}>
                                              {/* <AccessTimeIcon
                                          style={{ color: "#2683fd" }}
                                        /> */}
                                              半緊急新症：
                                              {waitTimeStableSemiUrgent.Value}
                                            </p>
                                            <p className={styles["blue"]}>
                                              {/* <AccessTimeIcon
                                          style={{ color: "#2683fd" }}
                                        /> */}
                                              穩定新症：{waitTimeStable.Value}{" "}
                                              (最長：
                                              {waitTimeStableLongest.Value})
                                            </p>
                                          </div>
                                        ) : (
                                          <span>
                                            *新症輪候時間只適用於耳鼻喉科丶眼科丶婦科丶內科丶骨科丶兒科丶精神科及外科
                                          </span>
                                        )}
                                      </p>
                                    )}
                                  </span>
                                </li>
                              );
                            })}
                          </Slider>
                        </ol>
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
          </div>
        </div>
        <div className={styles["right-container"]}>
          <ServicePageMap
            userLocation={userLocation}
            location={selectedHospitalLocation2}
          />
        </div>
      </div>
      <div className={styles["footer-wrapper"]}>
        <footer>© 資料歸香港公立醫院版權所有</footer>
        <footer>更新頻率 : 每季 (1月、4月、7月及10月) </footer>
      </div>
    </div>
  );
}

export default ServicePage;
