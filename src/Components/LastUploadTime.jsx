import React from "react";
import styles from "../App.module.css";

function LastUploadTime(props) {
  return (
    <div className={styles["footer-wrapper"]}>
      <footer>© 資料歸香港公立醫院版權所有</footer>
      <footer>最後更新： {props.latestTime} </footer>
    </div>
  );
}

export default LastUploadTime;
