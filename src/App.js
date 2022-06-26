import React from "react";
import "./App.css";
import Calendar from "./Components/Calendar";
import Patient from "./Components/Patient";
import Driver from "./Components/Drivers";
import Navbar from "./Components/navbar";
import {Row, Col} from 'react-bootstrap';

function App() {
  return (
    
    <>
      <Navbar />
      <div className="container">
        <Row>
          
         <Col md={3}> <Patient/></Col>
         <Col md={6}>
            <div className="calendarContainer">
              <Calendar />
            </div>
         </Col>
         <Col md={3}> <Driver/></Col>
          
        </Row>
      </div>
    </>
  );
}

export default App;
