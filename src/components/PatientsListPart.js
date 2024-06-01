import React from "react";
import PatientsListHeader from "./PatientsListHeader";
import PatientsListInfo from "./PatientsListInfo";
import styles from "../styles/PatientsListPart.module.css";

const PatientsListPart = ({ onSelectPatient }) => {
  return (
    <div className={styles.container}>
      <PatientsListHeader />
      <PatientsListInfo onSelectPatient={onSelectPatient} />
    </div>
  );
};

export default PatientsListPart;
