import React from "react";
import PatientPersonalProfile from "./PatientPersonalProfile";

const SelectedPatientProfile = ({ selectedPatient }) => {
  return (
    <div>
      {selectedPatient && <PatientPersonalProfile patient={selectedPatient} />}
    </div>
  );
};

export default SelectedPatientProfile;
