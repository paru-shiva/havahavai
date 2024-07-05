import "./index.css";

const othersList = ["List 1", "List 2", "List 3"];

const Sidebar = () => {
  return (
    <div className="sidebarComponent">
      <div className="options">
        <div className="homeOptions homeButton">
          <img src="../../homeIcon.svg" />
          <p className="homeMenu">Home</p>
        </div>
        <div className="homeOptions"></div>
        <img src="../../dashboardIcon.svg" />
      </div>

      <div className="service">
        <p className="servicesHeading">Services</p>
        <p className="airportsBg">Airports</p>
        <p className="vids">Videos</p>
      </div>

      <div className="service">
        <p className="servicesHeading">Others</p>
        <ul className="othersList" type="none">
          {othersList.map((eachItem) => (
            <li className="listItem" key={eachItem}>
              {eachItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
