import React, { useEffect } from 'react';


import styles from './start.module.scss';
import { LoginForm, SignupForm } from '../forms';

import { useStore } from '../store';


const Start = (props) => {
    const {state, dispatch} = useStore();

    useEffect(() => {
        if(!!state.loginsuccess) return  props.history.push('/app/dashboard');
        
    },[state])
    
    const route = () => {
        console.log(state);
        let t = state.showlogin ? 'showsignup' : 'showlogin';
        dispatch({ type:t, payload:state.showlogin }); 
    }
    

    return(
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Company</li>
                </ul>
                <button className={styles.login} onClick={() => route()}>{state.showlogin ? 'Sign Up' : 'Sign In'}</button>
            </nav>
            <div className={styles.landing}>
                <div className={styles.left}>
                    <h2>Inspire Gymnasium</h2>
                    <span>online management</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa eveniet sapiente. Odio id quaerat temporibus asperiores rerum dolores. Animi repellat, consectetur quo optio numquam quis qui, corporis as
                    </p>
                </div>
                {state.showlogin && <LoginForm />} 
                {state.showsignup && <SignupForm/>}
            </div>
        </div>
    )
}


export default Start;
