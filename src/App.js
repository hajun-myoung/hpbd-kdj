import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<>hi there</>} />
      </Routes>
    </Router>
  );
}

export default App;
