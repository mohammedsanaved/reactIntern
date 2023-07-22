import "./App.css";
import Home from "./components/Home";
import TableApi from "./components/TableApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<TableApi />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
