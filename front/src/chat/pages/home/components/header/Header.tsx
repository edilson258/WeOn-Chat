import "./headerStyle.css";
import type { FC, ReactElement } from "react";
import { Search, ThreeDotsVertical } from "react-bootstrap-icons";

const Header:FC = ():ReactElement => {
  
  return (
    <div className="header">
      <h1>We On</h1>
      <div className="utils">
        <Search className="h-icon search" />
        <ThreeDotsVertical className="h-icon dots" />
      </div>
    </div>
  )
}

export default Header;
