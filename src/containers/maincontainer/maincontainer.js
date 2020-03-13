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

    const actions = (state) => {
        let btns = state.menu.map((d,k) => d.submenu && d.submenu.map((s,y) =><Button btntext={s.nam} ico={s.ico} styles={`${btnstyles.btnoutline}`} onclick={()=>btnaction(s.typ,s.pay,s.act)}/>)) 
        
        return btns
    }
    return(
        <div className={styles.container}>
            <SideNav state={state}/>
            <nav className={styles.nav}>{state.dd ? state.dd.enm : 'Allen'}</nav>
            <main className={styles.main}>
                {
                    props.match.path === '/app/dashboard' ? '' :
                    state.menu && <div className={styles.actions}> {actions(state)} </div>
                }
                {/* <div className={styles.actions}>
                    <Button btntext='Edit' styles={btnstyles.btnoutline}/>
                    <Button btntext='Update' styles={btnstyles.btnoutline}/>
                    <Button btntext='View' styles={btnstyles.btnoutline}/>
                </div> */}
                <InnerRoutes />
            </main>
        </div>
    )

}

export default MainContainer;