import "./navbarStyle.css";
import type { FC, ReactElement } from "react";

const Navbar:FC = ():ReactElement => {
  return (
    <nav className="nav">
      <div className="nav-item active">
        <p>Messages</p>
        <span>9</span>
      </div>
      
      <div className="nav-item">
        <p>Rooms</p>
        <span>3</span>
      </div>
      
      <div className="nav-item">
        <p>Calls</p>
        <span>5</span>
      </div>
    </nav>
  )
}

export default Navbar;
