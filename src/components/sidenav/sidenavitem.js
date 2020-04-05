import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SideNavItems = ({ path, linktext,icon }) => {

  // if (path==='logout') {
  //   setTimeout(()=>{
  //     window.location.reload()

  //   },3000)
  // }

  return (
    <li>
      <NavLink to={path ==='logout' ? '/' : path}>
      <FontAwesomeIcon
        style={{ fontSize: "1.1rem", marginRight: ".3rem" }}
        icon={icon} />{" "}
        { linktext }
      </NavLink>
    </li>
  );
};

export default SideNavItems;
