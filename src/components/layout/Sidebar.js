import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { menus } = props;
  return (
    <div className="nav-side">
      <ul>
        {menus.map((data) => {
          return (
            <Link to={data.path} className="nav-side-link">
              #{data.id}-{data.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
