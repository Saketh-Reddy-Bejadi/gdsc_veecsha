import { Link } from "react-router-dom";
import "./SideBar.css";

export const SideBar = ({ viewBox, toggleMenu }) => {
  const ClickedBtn = () => {
    toggleMenu();
  };

  return (
    <>
      <div
        id="sidebarHide"
        className={`sidebar ${viewBox ? "open" : "closed"}`}
      >
        <p>Menu</p>
        <div className="SBcontents">
          <Link onClick={ClickedBtn} to="/">
            Home
          </Link>
          <Link onClick={ClickedBtn} to="/Services">
            Services
          </Link>
          <Link onClick={ClickedBtn} to="/WebDev">
            Web Dev
          </Link>
          <Link onClick={ClickedBtn} to="/DSA">
            DSA
          </Link>
        </div>
      </div>
    </>
  );
};
