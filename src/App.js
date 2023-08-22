import "./App.css";
import BirthdayEntry from "./components/BirthdayEntry";
import BirthdayResult from "./components/BirthdayResult";

function App() {
  return (
    <div className="container">
      <div class="top-row">
        <BirthdayEntry />
      </div>
      <div class="bottom-row">
        <BirthdayResult />
      </div>
    </div>
  );
}

export default App;
