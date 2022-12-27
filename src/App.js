import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
        </Route>
        <Login />
      </Routes>

    </div>
  );
}

export default App;
