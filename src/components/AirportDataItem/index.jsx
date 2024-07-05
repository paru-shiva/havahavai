import "./index.css";
import { Link } from "react-router-dom";

const AirportDataItem = ({ data }) => {
  const { airportName, code, country, terminals, id } = data;
  return (
    <div className="airportDataItemComponent">
      <input className="chkbx" type="checkbox" />
      <Link className="airportName" to={`/airports/${id}`}>
        <p>{airportName}</p>
      </Link>
      <p className="country">{country}</p>
      <p className="code">{code}</p>
      <p className="noOfTerminals">{terminals.length}</p>
      <img className="delIcon" src="../../deleteIcon.svg" />
    </div>
  );
};

export default AirportDataItem;
