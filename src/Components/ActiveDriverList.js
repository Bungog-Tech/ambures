import React from "react";


export default function ActiveDriverList({ driverProp }) {
  const Datax = driverProp;

  return (
    <> 
     <p><strong>{Datax.name}</strong> <span>{Datax.from}-{Datax.to}</span></p>
    </>
  );
}
