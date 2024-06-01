import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/PatientsListInfo.module.css";

const PatientsListInfo = ({ onSelectPatient }) => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            auth: {
              username: "coalition",
              password: "skills-test",
            },
          }
        );
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, []);

  const handlePatientClick = (index) => {
    setSelectedPatient(patients[index]);
    onSelectPatient(patients[index]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.patientList}>
        {patients.map((patient, index) => (
          <div
            key={patient.id}
            className={styles.profilecontainer}
            onClick={() => handlePatientClick(index)}
          >
            <img
              src={patient.profile_picture}
              alt="Patient"
              className={styles.profileimage}
            />
            <div className={styles.info}>
              <h3>{patient.name}</h3>
              <div className={styles.details}>
                <span>{patient.gender}</span>
                <span>{patient.age}</span>
              </div>
            </div>
            <div className={styles.moreiconcontainer}>
              <img
                src="../svgIcons/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
                alt="More"
                className={styles.moreicon}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsListInfo;
