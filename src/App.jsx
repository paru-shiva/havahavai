import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Airports from "./components/Airports";

function App() {
  return (
    <div className="appComponent">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/airports" Component={Airports} />
      </Routes>
    </div>
  );
}

export default App;
