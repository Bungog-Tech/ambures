import React from "react";
import "./App.css";
import Calendar from "./Components/Calendar";
import Patient from "./Components/Patient";
import Driver from "./Components/Drivers";
import Navbar from "./Components/navbar";

function App() {
  return (
    
    <>
      <Navbar />
      <div className="container">
        
        <Patient/>
        <div className="calendarContainer">
          <Calendar />
        </div>
        <Driver/>
        
      </div>
    </>
  );
}

export default App;
