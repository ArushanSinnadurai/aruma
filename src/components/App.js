import "./App.css";
import Navbar from "./Navbar/Navbar";
import Homepage from "./HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div class="wrapper">
      <Router>
        <div id="navbar">
          <Navbar />
          <div className="Homepage">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
