import React from "react";

import ActiveDriverPopOverButton from "./ActiveDriverPopOverButton";


export default function ActiveDriverList({ driverProp }) {
  const Datax = driverProp;

  return (
    <> 
     <div><strong>{Datax.name}</strong><ActiveDriverPopOverButton keyData={Datax.id} /></div> 
      
     <p>{Datax.from}-{Datax.to} </p>
   
    </>
  );
}
