import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Header />} />
        <Route path="/" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
