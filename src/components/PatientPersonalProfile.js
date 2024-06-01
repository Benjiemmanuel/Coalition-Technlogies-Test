import React from "react";
import Button from "./Button";
import styles from "../styles/PatientPersonalProfile.module.css";

const PatientPersonalProfile = ({ patient }) => {
  return (
    patient && (
      <div className={styles.overallContainer}>
        <div className={styles.container}>
          <div className={styles.profileHeader}>
            <img
              src={patient.profile_picture}
              alt={patient.name}
              className={styles.profileImage}
            />
            <h3>{patient.name}</h3>
          </div>
          <div className={styles.profileDetails}>
            <div className={styles.detailItem}>
              <img src="../svgIcons/BirthIcon.svg" alt="Birth Icon" />
              <div className={styles.detailItemList}>
                <p>Date of Birth</p>
                <p>{patient.date_of_birth}</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <img src="../svgIcons/FemaleIcon.svg" alt="Female Icon" />
              <div className={styles.detailItemList}>
                <p>Gender</p>
                <p>{patient.gender}</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <img src="../svgIcons/PhoneIcon.svg" alt="Phone Icon" />
              <div className={styles.detailItemList}>
                <p>Contact Info</p>
                <p>{patient.phone_number}</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <img
                src="../svgIcons/PhoneIcon.svg"
                alt="Emergency Contact Icon"
              />
              <div className={styles.detailItemList}>
                <p>Emergency Contacts</p>
                <p>{patient.emergency_contact}</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <img src="../svgIcons/InsuranceIcon.svg" alt="Insurance Icon" />
              <div className={styles.detailItemList}>
                <p>Insurance Provider</p>
                <p>{patient.insurance_type}</p>
              </div>
            </div>
          </div>
          <Button onClick={() => alert("Button clicked!")}>
            Show All Information
          </Button>
        </div>
        <div className={styles.labResults}>
          <h3>Lab Results</h3>
          <div className={styles.labResultsList}>
            <div className={styles.labResultItem}>
              <span>Blood Test</span>
              <img
                src="../svgIcons/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt="Download Icon"
              />
            </div>
            <div className={styles.labResultItem}>
              <span>CT Scans</span>
              <img
                src="../svgIcons/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt="Download Icon"
              />
            </div>
            <div className={styles.labResultItem}>
              <span>Radiology Reports</span>
              <img
                src="../svgIcons/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt="Download Icon"
              />
            </div>
            <div className={styles.labResultItem}>
              <span>X-Rays</span>
              <img
                src="../svgIcons/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt="Download Icon"
              />
            </div>
            <div className={styles.labResultItem}>
              <span>Urine Test</span>
              <img
                src="../svgIcons/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt="Download Icon"
              />
            </div>
          </div>
          </div>
      </div>
    )
  );
};

export default PatientPersonalProfile;
