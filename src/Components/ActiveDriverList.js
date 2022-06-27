import React from "react";
import { Button } from "react-bootstrap";


export default function ActiveDriverList({ driverProp }) {
  const Datax = driverProp;

  return (
    <> 
     <p><strong>{Datax.name}</strong> <Button style={{float:"right"}}><i class='fas fa-ellipsis-h'></i></Button></p> 
     
     <p>{Datax.from}-{Datax.to} </p>
   
    </>
  );
}
