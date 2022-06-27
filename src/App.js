import React from "react";
import "./App.css";
import Calendar from "./Components/Calendar";
import Patient from "./Components/Patient";
import Driver from "./Components/Drivers";
import Navbar from "./Components/navbar";
import {Row,Card, Col} from 'react-bootstrap';

function App() {
  return (
    
    <>
      <Navbar />
      <div className="container  mx-auto my-2">
        <Row>
          
         <Col md={3} xl={3} sm={10}> <Card className="p-2 my-2"><Patient/></Card></Col>
         <Col md={6} xl={6} sm={10}>
            <Card  className="p-2">
              <div className="calendarContainer my-2">
                <Calendar />
              </div>
            </Card>
         </Col>
         <Col md={3} xl={3} sm={10}><Card  className="p-2 my-2"> <Driver/></Card></Col>
          
        </Row>
      </div>
    </>
  );
}

export default App;
