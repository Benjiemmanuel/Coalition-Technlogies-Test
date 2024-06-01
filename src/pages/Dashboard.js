import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PatientsListPart from "../components/PatientsListPart";
import SelectedPatientProfile from "../components/SelectedPatientProfile";
import styles from "../styles/Dashboard.module.css";
import DiagnosisHistory from "../components/DiagonosisHistory";

const Dashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <Navbar className={styles.navbar} />
      </div>
      <div className={styles.content}>
        <PatientsListPart onSelectPatient={handleSelectPatient} />
        <DiagnosisHistory />
        <SelectedPatientProfile selectedPatient={selectedPatient} />
      </div>
    </div>
  );
};

export default Dashboard;
