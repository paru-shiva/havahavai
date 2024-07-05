import "./index.css";
import Header from "../Header";
import Sidebar from "../Sidebar";

const AirportDetails2 = () => {
  const data = JSON.parse(localStorage.getItem("airportsInfo")).actualData;

  const [airData] = data.filter((eachItem) => eachItem.id === 2);

  const terminals = airData.terminals;
  console.log(terminals);

  return (
    <div className="airportsComponent">
      <Header />
      <div className="airportsMain">
        <Sidebar />
        <div className="mainBdy">
          <div className="terminalSection">
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
            <button className="addBtn">+ Add Terminal</button>
          </div>
          <h3>Services</h3>
          <div className="inps">
            <div className="inp">
              <label>Service Name</label>
              <input
                placeholder="Lost & Found"
                className="inputEl inputElStyle "
                type="text"
              />
            </div>
            <div className="inp">
              <label>Category</label>
              <select className="dropdownStyle inputElStyle">
                <option>option1</option>
                <option>option2</option>
              </select>
            </div>
            <div className="inp">
              <label>Sub Category</label>
              <select className="dropdownStyle inputElStyle">
                <option>option1</option>
                <option>option2</option>
              </select>
            </div>
            <button className="saveBtn">Save</button>
          </div>
          <div className="inp">
            <label>Description</label>
            <input
              placeholder="Type Here"
              className="inputEl inputElStyle "
              type="text"
            />
          </div>
          <p>Lounge</p>
          <hr className="hr" />
          <p>Money Exchange</p>
        </div>
      </div>
    </div>
  );
};

export default AirportDetails2;
