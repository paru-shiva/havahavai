import "./index.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AirportDataItem from "../AirportDataItem";

const AirportBody = () => {
  const airportsData = {
    actualData: [
      {
        id: 1,
        airportName: "Indra Gandhi International Airport",
        country: "India",
        code: "DEL",
        terminals: [
          {
            terminalName: "Terminal 1",
            metaData: "This is meta data of Terminal 1",
          },
          {
            terminalName: "Terminal 2",
            metaData: "This is meta data of Terminal 2",
          },
        ],
      },
      {
        id: 2,
        airportName: "Dubai International Airport",
        country: "UAE",
        code: "DXB",
        terminals: [
          {
            terminalName: "Terminal 1 DB",
            metaData: "This is meta data of Terminal 1 Dubai",
          },
        ],
      },
      {
        id: 3,
        airportName: "Heatthrow Airport",
        country: "England",
        code: "LHR",
        terminals: [
          {
            terminalName: "Terminal 1 Eng",
            metaData: "This is meta data of Terminal 1 England",
          },
        ],
      },
    ],
  };

  if (localStorage.getItem("airportsInfo") === null) {
    const data = JSON.stringify(airportsData);
    localStorage.setItem("airportsInfo", data);
  }

  let airportsInformation = JSON.parse(localStorage.getItem("airportsInfo"));
  airportsInformation = airportsInformation.actualData;

  return (
    <div className="airportBodyComponent">
      <div className="apBodyHeader">
        <h3>Airports</h3>
        <button className="addBtn">+ Add new</button>
      </div>
      <div className="dataHeadings">
        <input className="chkbxTitle" type="checkbox" />
        <p className="airportNameH">All Airports</p>
        <p className="countryH">Country</p>
        <p className="codeH">Code</p>
        <p className="noOfTerminalsH">Terminals</p>
      </div>
      <div className="airportsData">
        <ul className="airportsList" type="none">
          {airportsInformation.map((eachItem) => (
            <li key={eachItem.id}>
              <AirportDataItem data={eachItem} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AirportBody;
