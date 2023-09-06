const BirthdayEntry = () => {
  return <div className="birthday-entry-container">
    <form className="birthday-entry">
      <div className="birthday-inputs">
        <div className="day-input">
          <label>DAY</label>
          <input type="text" placeholder="DD"/>
        </div>
        <div className="month-input">
          <label>MONTH</label>
          <input type="text" placeholder="MM"/>
        </div>
        <div className="year-input">
          <label>YEAR</label>
          <input type="text" placeholder="YYYY"/>
        </div>
      </div>
      <hr />
    </form>
  </div>;
};

export default BirthdayEntry;
