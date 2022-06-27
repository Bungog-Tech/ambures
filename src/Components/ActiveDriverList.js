import React from "react";
import { Button } from "react-bootstrap";


export default function ActiveDriverList({ driverProp }) {
  const Datax = driverProp;

  return (
    <> 
     <p><strong>{Datax.name}</strong> <Button variant="outline-secondary" style={{float:"right"}}><i className='fas fa-ellipsis-h'></i></Button></p> 
     
     <p>{Datax.from}-{Datax.to} </p>
   
    </>
  );
}
