import iconArrow from "../assets/images/icon-arrow.svg";
import { useState } from 'react';

const BirthdayEntry = ({updateCalendarValues}) => {
  const [formData, setFormData] = useState({
    month: "", day: "", year: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {}

    const month = parseInt(formData.month);
    const day = parseInt(formData.day);
    const year = parseInt(formData.year);

    const isValidDay = day >= 1 && day <= 31;
    const isValidMonth = month >= 1 && month <= 12;
    const isValidYear = year >= 1 && year <= 9999; 

    if(!isValidDay ) {
      validationErrors.day = "invalid day"
    }
    if(!isValidMonth ) {
      validationErrors.month = "invalid month"
    }
    if(!isValidYear ) {
      validationErrors.year = "invalid year"
    }

    const monthMaxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    
    if (day > monthMaxDays[month - 1] || (month === 2 && day > 29 && isLeapYear(year))) {
      validationErrors.day = "Day is out of range";
    }

    if(!day) {
      validationErrors.day = "day is required"
    }
    if(!month) {
      validationErrors.month = "month is required"
    }
    if(!year) {
      validationErrors.year = "year is required"
    }

    setErrors(validationErrors)

    if (isValidDay && isValidMonth && isValidYear && Object.keys(validationErrors).length === 0) {
      updateCalendarValues(formData);
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
              name="day"
              type="number"
              placeholder="DD"
              min="1"
              max="31"
              onChange={handleChange} 
            />
            {errors.day && <span className="error-validation">{errors.day}</span>}

          </div>
          <div className="month-input">
            <label>MONTH</label>
            <input
              type="number"
              name="month"
              placeholder="MM"
              min="1"
              max="12"
              onChange={handleChange} 
            />
              {errors.month && <span className="error-validation">{errors.month}</span>}
          </div>
          <div className="year-input">
            <label>YEAR</label>
            <input 
              type="number" 
              name="year"
              placeholder="YYYY" 
              onChange={handleChange} 
             />
              {errors.year && <span className="error-validation">{errors.year}</span>}
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
