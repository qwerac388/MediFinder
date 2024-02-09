import React from "react";
import styles from "./ServicePage.module.css";

function ServicePageSearchBar({ searchTerm, setSearchTerm }) {
  // const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Pass the search term to the parent component
  };

  return (
    <div className={styles["allsearchInputWrapper"]}>
      <div className={styles["searchInputWrapper"]}>
        <input
          type="search"
          placeholder="輸入公立醫院名稱以搜尋"
          onChange={handleSearchChange}
          value={searchTerm}
        />
        <button id={styles["searchButton"]}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    </div>
  );
}
export default ServicePageSearchBar;
