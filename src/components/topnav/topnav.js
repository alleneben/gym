import React from 'react';
import { ReactComponent as BellIcon } from '../../asset/icons/bell.svg'; 
import { ReactComponent as MessengerIcon } from '../../asset/icons/messenger.svg'; 
import { ReactComponent as CaretIcon } from '../../asset/icons/caret.svg'; 
import { ReactComponent as PlusIcon } from '../../asset/icons/plus.svg'; 
import { ReactComponent as CogIcon } from '../../asset/icons/cog.svg'; 
import { ReactComponent as ChevronIcon } from '../../asset/icons/chevron.svg'; 
import { ReactComponent as ArrowIcon } from '../../asset/icons/arrow.svg'; 
import { ReactComponent as BoltIcon } from '../../asset/icons/bolt.svg'; 




import TopNavItem from './topnavitem';
import { DropDown } from '../dropdown';







const TopNav = () => {



    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <TopNavItem icon={<PlusIcon />}/>
                <TopNavItem icon={<BellIcon />}/>
                <TopNavItem icon={<MessengerIcon />}/>
                <TopNavItem icon={<CaretIcon />}>
                    <DropDown />
                </TopNavItem>
            </ul>
        </nav>
    );
}

export default TopNav;