import React from "react";

export default function StandbyDriverList({ driverProp }){
    const data = driverProp;
    return(<p><strong>{data.name}</strong></p>)
}