import iconArrow from "../assets/images/icon-arrow.svg";
import { useState } from 'react';

const BirthdayEntry = ({updateSharedMonth, updateSharedDay, updateSharedYear }) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  
  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setMonth(selectedMonth); 
    
    const dayInput = document.getElementById("dayInput");
    if (selectedMonth === "02" || selectedMonth === "2") {
      dayInput.setAttribute("max", "28");
    } else if (["4", "04", "6", "06", "9", "09", "11"].includes(selectedMonth)) {
      dayInput.setAttribute("max", "30");
    } else {
      dayInput.setAttribute("max", "31");
    }
  };

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setYear(selectedYear);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidDay = parseInt(day) >= 1 && parseInt(day) <= 31;
    const isValidMonth = parseInt(month) >= 1 && parseInt(month) <= 12;
    const isValidYear = parseInt(year) >= 1 && parseInt(year) <= 9999; 

    if (isValidDay && isValidMonth && isValidYear) {
      updateSharedMonth(month);
      updateSharedDay(day);
      updateSharedYear(year);
    } else {
      alert("Invalid input. Please check your day, month, and year values.");
    }
  };

  return (
    <div className="birthday-entry-container">
      <form className="birthday-entry">
        <div className="birthday-inputs">
          <div className="day-input">
            <label>DAY</label>
            <input
              id="dayInput"
              type="number"
              placeholder="DD"
              min="1"
              max="31"
              value={day} 
              onChange={(event) => setDay(event.target.value)} 
            />
          </div>
          <div className="month-input">
            <label>MONTH</label>
            <input
              type="number"
              placeholder="MM"
              min="1"
              max="12"
              value={month} 
              onChange={handleMonthChange}
            />
          </div>
          <div className="year-input">
            <label>YEAR</label>
            <input type="number" 
            placeholder="YYYY" 
            value={year}
            onChange={handleYearChange}
             />
          </div>
        </div>
        <div className="button-container">
          <hr />
          <div className="submit-button">
            <img onClick={handleSubmit} className="icon-arrow" src={iconArrow} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BirthdayEntry;
