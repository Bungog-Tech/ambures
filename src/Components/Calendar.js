import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import PatientData from '../mockdata/patientData'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';


export default function Calendar() {

  return <FullCalendar  plugins={[dayGridPlugin, bootstrap5Plugin ]} 
  initialView="dayGridMonth"
  headerToolbar={{
    left:"prev,next",
    center:"title",
    right:"dayGridMonth",
    height:"auto",
  }}
  eventSources={PatientData} 
  contentHeight={'auto'}
  contentWidth={'auto'}
  themeSystem={'bootstrap5'}/>;
}
