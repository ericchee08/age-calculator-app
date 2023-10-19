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

    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    const isValidDay = day >= 1 && day <= 31;
    const isValidMonth = month >= 1 && month <= 12;
    const isValidYear = year >= 1 && year <= currentYear; 

    

    if(!isValidDay ) {
      validationErrors.day = "Must be a valid day"
    }
    if(!isValidMonth ) {
      validationErrors.month = "Must be a valid month"
    }
    if(!isValidYear ) {
      validationErrors.year = "Must be in the past"
    }

    const monthMaxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    
    if (day > monthMaxDays[month - 1] || (month === 2 && day > 29 && isLeapYear(year))) {
      validationErrors.day = "Day is out of range";
    }

    if(!day) {
      validationErrors.day = "Must be a valid day"
    }
    if(!month) {
      validationErrors.month = "Must be a valid day"
    }
    if(!year) {
      validationErrors.year = "Must be a valid year"
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
            <label className={errors.day ? "error-label" : ""}>DAY</label>
            <input
              type="number"
              name="day"
              placeholder="DD"
              min="1"
              max="31"
              onChange={handleChange} 
              className={errors.day ? "error-input" : ""}

            />
            {errors.day && <span className="error-validation">{errors.day}</span>}

          </div>
          <div className="month-input">
            <label className={errors.month ? "error-label" : ""}>MONTH</label>
            <input 
              type="number"
              name="month"
              placeholder="MM"
              min="1"
              max="12"
              onChange={handleChange} 
              className={errors.month ? "error-input" : ""}
            />
              {errors.month && <span className="error-validation">{errors.month}</span>}
          </div>
          <div className="year-input">
            <label className={errors.year ? "error-label" : ""}>YEAR</label>
            <input 
              type="number" 
              name="year"
              placeholder="YYYY" 
              onChange={handleChange} 
              className={errors.year ? "error-input" : ""}
             />
              {errors.year && <span className="error-validation">{errors.year}</span>}
          </div>
        </div>
        <div className="button-container">
          <hr />
          <div onClick={handleSubmit} className="submit-button">
            <img className="icon-arrow" src={iconArrow} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BirthdayEntry;
