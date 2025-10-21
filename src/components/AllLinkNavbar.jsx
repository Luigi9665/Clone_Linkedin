import { NavLink } from "react-router";
import { HouseDoorFill, PeopleFill, BriefcaseFill, ChatDotsFill, BellFill } from "react-bootstrap-icons";

const AllLinkNavbar = () => {
  return (
    <>
      <NavLink to="/" className={({ isActive }) => `nav-link fw-bold p-0 px-md-1 px-xl-4 ${isActive ? "isActive" : "notActive"}`}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <HouseDoorFill className="fs-5" />
          <p style={{ fontSize: "11px" }} className="d-none d-xl-block m-0">
            Home
          </p>
        </div>
      </NavLink>
      <NavLink to="/Rete" className={({ isActive }) => `nav-link fw-bold p-0 px-md-1 px-xl-4 ${isActive ? "isActive" : "notActive"}`}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <PeopleFill className="fs-5" />
          <p style={{ fontSize: "11px" }} className="d-none d-xl-block m-0">
            Rete
          </p>
        </div>
      </NavLink>
      <NavLink to="/Lavoro" className={({ isActive }) => `nav-link fw-bold p-0 px-md-1 px-xl-4 ${isActive ? "isActive" : "notActive"}`}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <BriefcaseFill className="fs-5" />
          <p style={{ fontSize: "11px" }} className="d-none d-xl-block m-0">
            Lavoro
          </p>
        </div>
      </NavLink>
      <NavLink to="/Messaggistica" className={({ isActive }) => `nav-link fw-bold p-0 px-md-1 px-xl-4 ${isActive ? "isActive" : "notActive"}`}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <ChatDotsFill className="fs-5" />
          <p style={{ fontSize: "11px" }} className="d-none d-xl-block m-0">
            Messaggistica
          </p>
        </div>
      </NavLink>
      <NavLink to="/Notifiche" className={({ isActive }) => `nav-link fw-bold p-0 px-md-1 px-xl-4 ${isActive ? "isActive" : "notActive"}`}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <BellFill className="fs-5" />
          <p style={{ fontSize: "11px" }} className="d-none d-xl-block m-0">
            Notifiche
          </p>
        </div>
      </NavLink>
    </>
  );
};
export default AllLinkNavbar;
