import React from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";
import LoadingOpening from "./Loading";

function AboutUsPage() {
  return (
    <main>
      <LoadingOpening />

      <section
        className={`${styles["mainWrapper"]} ${styles["relativeWrapper"]}`}
      >
        <section
          className={`${styles["introWrapper"]} ${styles["relativeIntroWrapper"]}`}
        >
          <div className={styles["introTextWrapper"]}>
            <br></br>
            <h3>助你輕鬆搜尋</h3>
            <h1>
              附近的<span className={styles["coolText"]}>24小時</span>開放急症室
            </h1>

            <p>
              同時還能夠了解附近醫院的專科門診時間表和新症輪候時間。
              <br></br>
              無論您需要緊急處理還是尋找其他醫療服務，這個網站都能幫助您找到最適合您需求的醫療資源。
            </p>
            <section className={styles["chooseServiceButtonWrapper"]}>
              <button id={styles["nearbyHospitalButton"]}>
                <Link to="/UrgentTrackProject">附近急症室</Link>
              </button>
              <button id={styles["chooseServiceButton"]}>
                <Link to="/service">專科服務</Link>
              </button>
            </section>
          </div>

          <div>
            <img
              src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=1480&t=st=1704681542~exp=1704682142~hmac=a148819c2566433fc587b27abaf93864311d96b64a7c03be3221c8d12ef18572"
              className={styles["imgWrapper"]}
            ></img>
          </div>
        </section>
        <br></br>

        <div className={styles["footer-wrapper"]}>
          <footer>© 資料歸香港公立醫院版權所有</footer>
          <footer>最後更新： 2024年1月8日 下午12時00分</footer>
        </div>
      </section>
    </main>
  );
}

export default AboutUsPage;
