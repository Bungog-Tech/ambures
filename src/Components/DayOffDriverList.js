import React from "react";
import { Button } from "react-bootstrap";

export default function DayoffDriverList({driverProp}){
    const data = driverProp;
    return(<p><strong>{data.name}</strong>  <span style={{float:"right"}}><Button  variant="outline-secondary" ><i className='fas fa-ellipsis-h'></i></Button></span></p>)
}