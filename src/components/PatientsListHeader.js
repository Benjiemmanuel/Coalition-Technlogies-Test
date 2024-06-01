import React from "react";
import styles from "../styles/PatientsListHeader.module.css";

const PatientsListHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Patients</span>
        <div className={styles.searchcontainer}>
          <img
            src="../svgIcons/search_FILL0_wght300_GRAD0_opsz24.svg"
            alt="search"
            className={styles.searchicon}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientsListHeader;
