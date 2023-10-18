import "./App.css";
import BirthdayEntry from "./components/BirthdayEntry";
import BirthdayResult from "./components/BirthdayResult";
import { useState } from 'react';

function App() {
  const [calendarValues, setCalendarValues] = useState({
    month: "",
    day: "",
    year: ""
  })

  const updateCalendarValues = (newValue) => {
    setCalendarValues(newValue);
  };

  return (
    <div className="container">
      <div className="top-row">
        <BirthdayEntry 
         updateCalendarValues={updateCalendarValues} 
      />
      </div>
      <div className="bottom-row">
        <BirthdayResult calendarValues={calendarValues}/>
      </div>
    </div>
  );
}

export default App;
