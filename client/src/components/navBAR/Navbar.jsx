import { useState } from "react";
import "./navbar.scss";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src="/house.jpeg"></img>
          <span>House-Estate</span>
        </a>

        <a href="/">
          <span>Home</span>
        </a>

        <a href="/">
          <span>About</span>
        </a>

        <a href="/">
          <span>Contacts</span>
        </a>
        <a href="/">
          <span>Agents</span>dsd
        </a>

        <a></a>
      </div>
      <div className="right">
        <a href="/">
          <span>Sign -In</span>
        </a>
        <a href="/">
          <span className="register">Sign-Up</span>
        </a>
        <div
          className="menuicon"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src="/menu.png"></img>
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">
            <span>Home</span>
          </a>

          <a href="/">
            <span>About</span>
          </a>

          <a href="/">
            <span>Contacts</span>
          </a>
          <a href="/">
            <span>Agents</span>dsd
          </a>

          <a href="/">
            <span>Sign In</span>dsd
          </a>

          <a href="/">
            <span>Sign Up</span>dsd
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
