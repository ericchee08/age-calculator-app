import iconArrow from "../assets/images/icon-arrow.svg";
import { useState } from 'react';

const BirthdayEntry = ({updateSharedMonth, updateSharedDay }) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  
  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setMonth(selectedMonth); 

    const dayInput = document.getElementById("dayInput");
    if (selectedMonth === "02") {
      dayInput.setAttribute("max", "28");
    } else if (["04", "06", "09", "11"].includes(selectedMonth)) {
      dayInput.setAttribute("max", "30");
    } else {
      dayInput.setAttribute("max", "31");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSharedMonth(month);
    updateSharedDay(day);
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
            <input type="number" placeholder="YYYY" />
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
