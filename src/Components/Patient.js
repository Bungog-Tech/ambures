import React, { useEffect, useState } from "react";
import PatientListItem from "./PatientListItem";
import patientDataDaily from "../mockdata/dailyPatientData";
import { Button, ListGroup} from "react-bootstrap";

export default function Patient() {
  const [patientList, setPatientList] = useState([]);

  const prodDaily = patientDataDaily;


 
  


  useEffect(() => {
    const patientArr = prodDaily.map((patient) => {
      console.log(patient)
      return (
          
          <PatientListItem key= {patient.id}  patientData={ patient } />
       
      );
    });
    setPatientList(patientArr);
  }, [prodDaily]);

  
  return (
    <>
      <div className="patientContainer">
       <Button className="addPatientButton">Add New Patient</Button>
      <ListGroup>
        {patientList}
      </ListGroup>
      </div>
    </>
  );
}
