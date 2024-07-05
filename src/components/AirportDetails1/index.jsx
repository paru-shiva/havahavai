import "./index.css";
import Header from "../Header";
import Sidebar from "../Sidebar";

const AirportDetails = () => {
  const data = JSON.parse(localStorage.getItem("airportsInfo")).actualData;

  const [airData] = data.filter((eachItem) => eachItem.id === 1);

  const terminals = airData.terminals;
  console.log(terminals);

  return (
    <div className="airportsComponent">
      <Header />
      <div className="airportsMain">
        <Sidebar />
        <div className="mainBdy">
          {terminals.map((eachItem) => (
            <div className="df" key={eachItem.terminalName}>
              <img className="icon" src="../../image.png" />
              <div className="dfc">
                <p className="terminalInfo terminalHead">
                  {eachItem.terminalName}
                </p>
                <p className="terminalInfo">{eachItem.metaData}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirportDetails;
