import React from "react";

export default function DayoffDriverList({driverProp}){
    const data = driverProp;
    return(<p><strong>{data.name}</strong></p>)
}