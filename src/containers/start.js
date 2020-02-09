import React from 'react';


import styles from './start.module.scss';
import { LoginForm } from '../forms';

import { useStore } from '../store';


const Start = () => {
    const {state, dispatch} = useStore();
    
    const route = () => {
       dispatch({ type:'showlogin', payload:state.showlogin }); 
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
                <LoginForm />
            </div>
        </div>
    )
}


export default Start;
