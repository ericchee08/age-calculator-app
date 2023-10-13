import "./App.css";
import BirthdayEntry from "./components/BirthdayEntry";
import BirthdayResult from "./components/BirthdayResult";
import { useState } from 'react';

function App() {
  const [month, setSharedMonth] = useState('');
  const [day, setSharedDay] = useState('');

  const updateSharedMonth = (newValue) => {
    setSharedMonth(newValue);
  };

  const updateSharedDay = (newValue) => {
    setSharedDay(newValue);
  };

  return (
    <div className="container">
      <div className="top-row">
        <BirthdayEntry 
         updateSharedMonth={updateSharedMonth} 
         updateSharedDay={updateSharedDay}/>
      </div>
      <div className="bottom-row">
        <BirthdayResult 
        month={month} 
        day={day}/>
      </div>
    </div>
  );
}

export default App;
