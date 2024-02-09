import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import styles from "../App.module.css";
import CallIcon from "@mui/icons-material/Call";
import LoadingOpening from "./Loading";
import ScrollTop from "./ScrollToTop";
import ShareApp from "./ShareApp";

function Ambulance() {
  const componentRef = useRef();
  const printPage = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "UrgentHotLines",
    onAfterPrint: () => alert("Success"),
  });

  const data = [
    {
      機構: "指揮及控制中心",
      電話: 999,
    },
    {
      機構: "緊急短訊求助服務(須登記)",
      電話: 992,
    },
    {
      機構: "消防處救護車調派中心",
      電話: 27353355,
    },
    {
      機構: "聖約翰救護車熱線",
      電話: 1878000,
    },
    {
      機構: "聖約翰救護車－港島",
      電話: 25766555,
    },
    {
      機構: "聖約翰救護車－九龍",
      電話: 27135555,
    },
    {
      機構: "聖約翰救護車－新界",
      電話: 26392555,
    },
  ];

  return (
    <>
      <LoadingOpening />
      <div ref={componentRef}>
        <div className={styles["hotlineWrapper"]}>
          <h1>緊急求助熱線</h1>
        </div>
        <section className={styles["mainHotlineWrapper"]}>
          <div className={styles["hotlineWithNameWrapper"]}>
            <div className={styles["hotlineWithName"]}>
              {data.map((item, index) => (
                <div key={index}>
                  <h2>{item.機構}</h2>
                  <CallIcon style={{ color: "#2683fd" }} /> &emsp;
                  <Link to={`tel:${item.電話}`}>{item.電話}</Link>
                </div>
              ))}
            </div>
            <div className={styles["hotlineInfoWrapper"]}>
              <h3>致電者請提供以下資料：</h3>
              <ol>
                <li>
                  簡述發生的緊急的情況(有人暈倒、受傷、病人出現病徵等狀況)
                </li>
                <li>
                  提供具體詳細的事發地點描述(周圍的建築物名稱、街道地址等)
                </li>
                <li>
                  簡述傷病者情況(年齡、性別、病歷、病徵，傷者之受傷程度等)
                </li>
                <li>
                  為了方便救護員與你聯絡, 請提供能夠隨時聯絡到你的電話號碼
                </li>
              </ol>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className={styles["hotlineButtonWrapper"]}>
                <button onClick={printPage}>列印／存檔</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles["shareFooterWrapper"]}>
        <ShareApp />
        <ScrollTop />
      </div>
      <div className={styles["footer-wrapper"]}>
        <footer>© 資料歸香港公立醫院版權所有</footer>
        <footer>最後更新： 2024年1月8日 下午12時00分</footer>
      </div>
    </>
  );
}

export default Ambulance;
