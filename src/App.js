import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Header />} />
      </Routes>

    </div>
  );
}

export default App;
