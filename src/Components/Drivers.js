import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import driverData from "./../mockdata/driverData";
import ActiveDriverList from "./ActiveDriverList";
import StandbyDriverList from "./StandbyDriverList";
import DayoffDriverList from "./DayOffDriverList";

export default function Driver() {
  const driverDatalist = driverData;
  const [activeDriverdata, setActiveDriverData] = useState([]);
  const [standbyDriverData, setStandbyDriverData] = useState([]);
  const [dayOffDriverData, setDayOffDriverData] = useState([])

  useEffect(() => {
    const activeDriverArr = driverDatalist.map((driver) => {
      if (driver.status === "On Road") {
        return <ActiveDriverList key={driver.id} driverProp={driver} />;
      }
      return "";
    });
    const standByDriverArr = driverDatalist.map((driver) => {
      if (driver.status === "On Standby") {
        return <StandbyDriverList key={driver.id} driverProp={driver} />;
      }
      return "";
    });
    const dayOffDriverDataArr = driverDatalist.map((driver) => {
        if (driver.status === "Day Off") {
          return <DayoffDriverList key={driver.id} driverProp={driver} />;
        }
        return "";
      });
    setStandbyDriverData(standByDriverArr);
    setActiveDriverData(activeDriverArr);
    setDayOffDriverData(dayOffDriverDataArr)
  }, [driverDatalist]);

  // if(driver.status === "On Standby"){}
  // if(driver.status === "On Dayoff"){}

  // <Card.Title>{driverData.name}</Card.Title>
  // <Card.Text>
  //   {driverData.from} - {driverData.to}
  // </Card.Text>
  return (
    <>
      <Card border="success" className="my-2">
        <Card.Header style={{backgroundColor: "#198754",color:"white",fontWeight: 'bold' }} >On Road</Card.Header>
        <Card.Body>{activeDriverdata}</Card.Body>
      </Card>
      <Card border="danger" className="my-2">
        <Card.Header style={{backgroundColor: "#FF0066",color:"white",fontWeight: 'bold' }}>On Stand by</Card.Header>
        <Card.Body>{standbyDriverData}</Card.Body>
      </Card>
      <Card  border="secondary" className="my-2">
        <Card.Header style={{backgroundColor: "#6c757d",color:"white",fontWeight: 'bold' }}>Day Off</Card.Header>
        <Card.Body>{dayOffDriverData}</Card.Body>
      </Card>
    </>
  );
}
