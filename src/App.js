import WaitTime from "./Components/WaitTime";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styles from "./App.module.css";
import ServicePage from "./Components/ServicePage/ServicePage";
import AboutUsPage from "./Components/AboutUsPage";
import PageNotFound from "./Components/PageNotFound";
import GeneralPage from "./Components/GeneralPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ambulance from "./Components/Ambulance";
import Opinion from "./Components/Opinion";

function App() {
  const [userLocation, setUserLocation] = useState(null);

  // for icon container visibility
  const [showIconContainer, setShowIconContainer] = useState(true);

  //For enabling CORS
  // https://cors-anywhere.herokuapp.com/corsdemo

  // const CORS = "https://cors-anywhere.herokuapp.com/";

  //Heroku
  const CORS = "https://medifinder-cors-proxy-b5d17a79cd70.herokuapp.com/";

  return (
    <Router>
      <div className={styles["navBar-homepage"]}>
        <nav>
          {/* Links to navigate between pages */}

          <Link to="/about-us"> 主要頁</Link>
          <Link to="/MediFinder"> 急症室</Link>
          <Link to="/service">專科服務</Link>
          <Link to="/general">普通科</Link>
          <Link to="/ambulance">緊急熱線</Link>
          <Link to="/opinion">聯絡我們</Link>
        </nav>
      </div>

      <Routes>
        <Route
          path="/service"
          element={
            <ServicePage
              userLocation={userLocation}
              showIconContainer={showIconContainer}
              setShowIconContainer={setShowIconContainer}
              CORS={CORS}
            />
          }
        />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/MediFinder"
          element={
            <WaitTime
              userLocation={userLocation}
              setUserLocation={setUserLocation}
              showIconContainer={showIconContainer}
              setShowIconContainer={setShowIconContainer}
              CORS={CORS}
            />
          }
        />
        <Route
          path="/general"
          element={
            <GeneralPage
              userLocation={userLocation}
              showIconContainer={showIconContainer}
              setShowIconContainer={setShowIconContainer}
              CORS={CORS}
            />
          }
        />
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/opinion" element={<Opinion />} />
      </Routes>
    </Router>
  );
}

export default App;
