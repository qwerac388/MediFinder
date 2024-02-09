import { useState } from "react";
import styles from "../App.module.css";
import ScrollTop from "./ScrollToTop";
import ShareApp from "./ShareApp";
import LoadingOpening from "./Loading";

function Opinion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  function handleSubmission() {
    localStorage.clear();
    let userData = {
      Name: name,
      Email: email,
      Text: text,
      Number: number,
    };
    localStorage.setItem("userInfo", JSON.stringify(userData));
    document.getElementsByClassName("span").style = "block";
    alert("Data recorded!");
    window.location.reload();
  }

  return (
    <div>
      <LoadingOpening />
      <h1>聯絡我們</h1>
      <div>
        <div className={styles["contactUsWrapper"]}>
          <h5>請填寫以下表格，我們會盡快回覆你</h5>
          <form>
            <label htmlFor="name">
              <input
                id="enter-name"
                type="text"
                className={styles["txtfield w-input"]}
                name="enter-name"
                data-name="enter-name"
                placeholder="姓名"
                onChange={(e) => setName(e.target.value)}
                style={{}}
              />
            </label>

            <label htmlFor="tel">
              <input
                id="enter-tel"
                type="text"
                className={styles["txtfield w-input"]}
                name="enter-tel2"
                placeholder="電話"
                onChange={(e) => setNumber(e.target.value)}
                style={{}}
              />
            </label>

            <label htmlFor="email">
              <input
                id="enter-email"
                type="text"
                className={styles["txtfield w-input"]}
                name="enter-email2"
                placeholder="電郵"
                onChange={(e) => setEmail(e.target.value)}
                style={{}}
              />
            </label>

            <label htmlFor="text">
              <textarea
                name="enter-content"
                id="enter-content"
                title="內容"
                placeholder="在此輸入內容"
                className={`txt_area w-input ${styles.textarea}`}
                onChange={(e) => setText(e.target.value)}
                style={{}}
              />
            </label>
          </form>

          <br />
        </div>

        <div className={styles["subscribeButtonWrapper"]}>
          <button onClick={handleSubmission} className="subscribeButton">
            提交
          </button>
        </div>
      </div>
      <div
        className={`${styles.shareFooterWrapper} d-flex justify-center align-center`}
      >
        <div className="centered-container">
          <ShareApp />
        </div>
        <ScrollTop />
      </div>
      <div className={styles["footer-wrapper"]}>
        <footer>© 資料歸香港公立醫院版權所有</footer>
        <footer>最後更新： 2024年1月8日 下午12時00分</footer>
      </div>
    </div>
  );
}

export default Opinion;
