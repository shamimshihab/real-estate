import { Outlet } from "react-router-dom";
import Navbar from "../navBAR/Navbar";

function Layout() {
  return (
    <>
      {" "}
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="content">
          {/* <HomePage /> */}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
