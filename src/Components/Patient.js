import React, { useEffect, useState } from "react";
import PatientListItem from "./PatientListItem";
import patientDataDaily from "../mockdata/dailyPatientData";
import { Button, ListGroup, Form, Modal, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Patient() {
  const [patientList, setPatientList] = useState([]);
  const [showPatient, setShowPatient] = useState(false);

  const prodDaily = patientDataDaily;
  const [startDate, setStartDate] = useState(new Date());

  const openPatient = () => {
    setShowPatient(true);
  };

  const closePatient = () => {
    setShowPatient(false);
  };

  useEffect(() => {
    const patientArr = prodDaily.map((patient) => {
      return <PatientListItem key={patient.id} patientData={patient} />;
    });
    setPatientList(patientArr);
  }, [prodDaily]);

  return (
    <>
      <div className="patientContainer">
        <Button className="addPatientButton" onClick={() => openPatient()}>
          Add New Patient
        </Button>
        <ListGroup>{patientList}</ListGroup>
      </div>

      <Modal show={showPatient} onHide={closePatient} data-backdrop="static">
        <Form>
          <Modal.Header closeButton>
            <Modal.Title> Add Patient</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <Form.Label>Fullname</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Purpose</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Bedridden" />
            </Form.Group>
            <Row>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Pickup Location</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Drop off Location</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label>Reservation Date</Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="border p-2 rounded"
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" type="submit">
              Add Patient
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
