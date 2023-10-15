const BirthdayResult = ({month, day, year}) => {

  const cleanSharedDay = (day) => {
    // Remove leading '0' if present
    if (day.length > 1 && day[0] === '0') {
      return day.slice(1);
    }
    return day;
  };
  
  const cleanSharedMonth = (month) => {
    // Remove leading '0' if present
    if (month.length > 1 && month[0] === '0') {
      const correctedMonth = parseInt(month.slice(1)) - 1
      return correctedMonth;
    }
    return month;
  };

  const birthday = new Date(year, cleanSharedMonth(month), cleanSharedDay(day)); // Change this to your actual birthday
  const currentDate = new Date();
  const timeDifference = currentDate - birthday;

  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.44) / (1000 * 60 * 60 * 24)));

  return (
    <div className="birthday-result-container">
      <p className="years">{ year == "" ? "--" : years} years</p>
      <p className="months">{ month == "" ? "--" : months} months</p>
      <p className="days">{ day == "" ? "--" : days} days</p>
    </div>
  );
};

export default BirthdayResult;
