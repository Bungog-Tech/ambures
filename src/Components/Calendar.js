import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import PatientData from '../mockdata/patientData'


export default function Calendar() {

  return <FullCalendar  plugins={[dayGridPlugin]} initialView="dayGridMonth" headerToolbar={{
    left:"prev,next",
    center:"title",
    right:"dayGridWeek,dayGridMonth"
  }} eventSources={PatientData} contentHeight={'auto'}/>;
}
