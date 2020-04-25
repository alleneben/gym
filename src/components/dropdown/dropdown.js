import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// import { ReactComponent as PlusIcon } from '../../asset/icons/plus.svg'; 
import { ReactComponent as CogIcon } from '../../asset/icons/cog.svg'; 
import { ReactComponent as ChevronIcon } from '../../asset/icons/chevron.svg'; 




const DropDown = () => {
    const [activemenu, setactivemenu] = useState('main');

    const DropDownItem = (props) => {

        return(
            <div className="menu-item" onClick={() => props.goToMenu && setactivemenu(props.goToMenu)}>
                <span className="icon-button">{ props.leftIcon }</span>
                { props.children }

                <span className="icon-right">{ props.rightIcon }</span>
            </div>
        )
    }

    return(
        <div className="dropdown">
            <CSSTransition in={activemenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
                <div className="menu">
                    <DropDownItem>My Profile</DropDownItem>
                    <DropDownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="settings">
                        Settings
                    </DropDownItem>
                </div>
            </CSSTransition>

            <CSSTransition in={activemenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary">
                <div className="menu">
                    <DropDownItem leftIcon={<ChevronIcon />} rightIcon={<ChevronIcon />} goToMenu="main">
                        
                    </DropDownItem>
                    <DropDownItem leftIcon={<CogIcon />}>
                        Settings
                    </DropDownItem>
                    <DropDownItem leftIcon={<CogIcon />}>
                        Settings
                    </DropDownItem>
                    <DropDownItem leftIcon={<CogIcon />}>
                        Settings
                    </DropDownItem>
                    <DropDownItem leftIcon={<CogIcon />}>
                        Settings
                    </DropDownItem>
                    <DropDownItem leftIcon={<CogIcon />}>
                        Settings
                    </DropDownItem>
                </div>
            </CSSTransition>
        </div>
    )
}



export default DropDown;