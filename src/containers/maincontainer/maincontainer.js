import React from 'react';
import InnerRoutes from '../../routes/inner-routes';

import { SideNav, Button } from '../../components';
import styles from './maincontainer.module.scss';
import btnstyles from '../../asset/scss/util.module.scss';

import { useStore } from '../../store';

const MainContainer = (props) => {
    const {state, dispatch} = useStore();
    
    const btnaction = (t,p,a) => {
        
        dispatch({type:t, payload:p, action:a})
    }

    return(
        <div className={styles.container}>
            <SideNav state={state}/>
            <nav className={styles.nav}>{state.dd ? state.dd.enm : 'Allen'}</nav>
            <main className={styles.main}>
                {
                    props.match.path === '/app/dashboard' ? '' :
                    state.menu && 
                    state.menu.map((d,k) =>
                        d.submenu && d.submenu.map((s,y) =><Button btntext={s.nam} styles={`${btnstyles.btn} ${btnstyles[s.col]}`} onclick={()=>btnaction(s.typ,s.pay,s.act)}/>)
                    ) 
                }
                <InnerRoutes />
            </main>
        </div>
    )

}

export default MainContainer;