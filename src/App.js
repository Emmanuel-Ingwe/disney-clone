import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
