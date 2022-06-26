import React from "react";
import { Card, Button } from "react-bootstrap";

export default function DriverList({ driverData }) {
  return (<Card>
    <Card.Header>{driverData.status}</Card.Header>
    <Card.Body>
      <Card.Title>{driverData.name}</Card.Title>
      <Card.Text>
        {driverData.from} - {driverData.to}
      </Card.Text>
      <Button variant="primary">Check Passenger</Button>
    </Card.Body>
  </Card>)
}
