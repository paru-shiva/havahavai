import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Airports from "./components/Airports";
import AirportDetails1 from "./components/AirportDetails1";
import AirportDetails2 from "./components/AirportDetails2";
import AirportDetails3 from "./components/AirportDetails3";

function App() {
  return (
    <div className="appComponent">
      <Routes>
        <Route exact path="/" Component={Airports} />
        <Route exact path="/airports" Component={Airports} />
        <Route exact path="/airports/1" Component={AirportDetails1} />
        <Route exact path="/airports/2" Component={AirportDetails2} />
        <Route exact path="/airports/3" Component={AirportDetails3} />
      </Routes>
    </div>
  );
}

export default App;
