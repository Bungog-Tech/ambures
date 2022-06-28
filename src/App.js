import React from "react";
import "./App.css";
import Calendar from "./Components/Calendar";
import Patient from "./Components/Patient";
import Driver from "./Components/Drivers";
import Navbar from "./Components/NavbarSection";
import { Row, Card, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar />
      <div className="container  mx-auto my-2">
        <Row>
          <Col md={10} xl={3} sm={10}>
            {" "}
            <Card className="p-2 my-2" border="primary">
              <Patient />
            </Card>
          </Col>
          <Col md={10} xl={6} sm={10}>
            <Card border="primary" className="p-2 bg-off-white">
              <div className="calendarContainer my-2">
                <Calendar />
              </div>
            </Card>
          </Col>
          <Col md={10} xl={3} sm={10}>
            <Card border="primary" className="p-2 my-2">
              {" "}
              <Driver />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
