import React, { useEffect, useState } from "react";
import driverData from "./../mockdata/driverData";
import DriverCapsule from "./DriverCapsule";

export default function Driver() {
  const [driverList, setDriverList] = useState([]);
  const driverDatas  = driverData;

  useEffect(() => {
    const driverArr = driverDatas.map((driver) => {
      return (<DriverCapsule key= {driver.id} driverData={driver}></DriverCapsule>);
    });
    setDriverList(driverArr);
  }, [driverDatas]);
  return (<div className="driverContainer">{driverList}</div>);
}
