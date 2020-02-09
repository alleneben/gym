import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faQrcode, faCalendarWeek, faSlidersH, faEnvelope, faBars, faTimes, faUsers, faRunning } from "@fortawesome/free-solid-svg-icons";

import SideNavItem from './sidenavitem';
import styles from './sidenav.module.scss';





const SideNav = () => {


    return(
        <>
        <input type="checkbox" id={styles.check}/>
        <label htmlFor={styles.check}>
            <FontAwesomeIcon
                id={styles.btn}
                style={{ fontSize: "1.1rem" }}
                icon={faBars} />{" "}
            <FontAwesomeIcon
                id={styles.cancel}
                style={{ fontSize: "1.1rem"}}
                icon={faTimes} />{" "}
        </label>
        <div className={styles.sidenav}>
            <header>Flex Fitness Center</header>
            <ul>
                {/* <SideNavItem path="/" linktext="Home" icon={faHome}/> */}
                <SideNavItem path="/app/dashboard" linktext="Dashboard" icon={faQrcode}/>
                <SideNavItem path="/app/new" linktext="Members" icon={faUsers}/>
                <SideNavItem path="/app/dashboard" linktext="Workouts" icon={faRunning}/>
                <SideNavItem path="/app/new" linktext="Events" icon={faCalendarWeek}/>
                <SideNavItem path="/app/dashboard" linktext="About" icon={faQuestionCircle}/>
                <SideNavItem path="/app/new" linktext="Services" icon={faSlidersH}/>
                <SideNavItem path="/app/dashboard" linktext="Contact" icon={faEnvelope}/>
            </ul>
        </div>
        </>
    )
}

export default SideNav;