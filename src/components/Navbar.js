import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import navbarData from "../data/navbarData.json"; 
const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleToggle = (index) => {
    setHoveredItem(index);
  };
  return (
    <div className={styles.navbar}>
      <img
        src="../assets/TestLogo (2).svg"
        alt="logo"
        className={styles.logo}
      />
      <div className={styles.navitems}>
        {navbarData.map((item, index) => (
          <div
            key={index}
            className={`${styles.navitem} ${
              hoveredItem === index ? styles.hovered : ""
            }`}
            onMouseEnter={() => handleToggle(index)}
            onMouseLeave={() => handleToggle(null)}
          >
            <img
              src={`../svgIcons/${item.icon}_FILL0_wght300_GRAD0_opsz24.svg`} 
              alt=""
            />{" "}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className={styles.profile}>
        <img
          src="../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
          alt=""
        />
        <div className={styles.profileinfo}>
          <h2>Dr. Jose Simmons</h2>
          <p>General Practitioner</p>
        </div>
        <div className={styles.verticalline}></div>
        <div className={styles.profileactions}>
          <img
            src="../svgIcons/settings_FILL0_wght300_GRAD0_opsz24.svg"
            alt=""
          />
          <img
            src="../svgIcons/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
