import "./App.css";
import BirthdayEntry from "./components/BirthdayEntry";
import BirthdayResult from "./components/BirthdayResult";

function App() {
  return (
    <div className="container">
      <div className="top-row">
        <BirthdayEntry />
      </div>
      <div className="bottom-row">
        <BirthdayResult />
      </div>
    </div>
  );
}

export default App;
