import "./App.css";
import BirthdayEntry from "./components/BirthdayEntry";
import BirthdayResult from "./components/BirthdayResult";
import { useState } from 'react';

function App() {
  const [month, setSharedMonth] = useState('');
  const [day, setSharedDay] = useState('');
  const [year, setSharedYear] = useState('');

  const updateSharedMonth = (newValue) => {
    setSharedMonth(newValue);
  };

  const updateSharedDay = (newValue) => {
    setSharedDay(newValue);
  };

  const updateSharedYear = (newValue) => {
    setSharedYear(newValue);
  }

  return (
    <div className="container">
      <div className="top-row">
        <BirthdayEntry 
         updateSharedMonth={updateSharedMonth} 
         updateSharedYear={updateSharedYear}
         updateSharedDay={updateSharedDay}/>
      </div>
      <div className="bottom-row">
        <BirthdayResult 
        month={month} 
        day={day}
        year={year}/>
      </div>
    </div>
  );
}

export default App;
