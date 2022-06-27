import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import PatientData from '../mockdata/patientData'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import interactionPlugin from '@fullcalendar/interaction';



export default function Calendar() {

  return <FullCalendar  plugins={[dayGridPlugin, bootstrap5Plugin ,interactionPlugin ]} 
  initialView="dayGridMonth"
  headerToolbar={{
    left:"prev,next",
    center:"title",
    right:"dayGridDay,dayGridWeek,dayGridMonth",
    height:"auto",
  }}
  eventSources={PatientData} 
  contentHeight={'auto'}
  contentWidth={'auto'}
  themeSystem={'bootstrap5'}
  dateClick={function dateClick(info){  alert(`${info.date.getFullYear()}-${info.date.getMonth()}-${info.date.getDay()}`);}}
  
  
  />;
}
