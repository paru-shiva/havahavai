import "./index.css";
import Header from "../Header";
import Sidebar from "../Sidebar";
import AirportBody from "../AirportsBody";

const Airports = () => {
  return (
    <div className="airportsComponent">
      <Header />
      <div className="airportsMain">
        <Sidebar />
        <AirportBody />
      </div>
    </div>
  );
};

export default Airports;
