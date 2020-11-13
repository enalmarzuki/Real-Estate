import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../../assets/scss/styles.scss";
import HomePage from "../HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
