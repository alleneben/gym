import React, { useEffect } from 'react';


import styles from './start.module.scss';
import { LoginForm, SignupForm } from '../forms';
import { DataTable, SCard } from '../components';

import { api,useStore } from '../store';


const Start = (props) => {
    const {state, dispatch} = useStore();
    const tbcfg = {
        header:['S/No','Firstname','Surname','Phone','Address','Email','Status','Action'],
        flds:[{n:'fnm',f:'t'},{n:'snm',f:'t'},{n:'tel',f:'t'},{n:'had',f:'t'},{n:'eml',f:'t'}],
        dbcfg:{s:'controller',a:'findt',m:'l',d:'members_fn', load:true,props:{'rid':'n','nam':'t'}},
        params: {rid:'',nam:''},
        actions:['details','edit']
    }

    useEffect(() => {
        let fm = new FormData()
        fm.append('s','session')
        fm.append('a','sessioncreate')
        fm.append('m','l')

        api.fxns.submit(fm,api.fxns.endpoint)
        .then(rd=> {
            let out = rd;
            if(out.success){
                if (out.sd.lst) {
                    dispatch({ type:'sess', payload:out.sd,action:'usd' });
                    props.history.push('/app/dashboard');
                }
            }
        }, err => console.log(err))
        
        // if(!!state.loginsuccess) return  props.history.push('/app/dashboard');
        
    },[state])
    
    const route = () => {
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
                {/* <button className={styles.login} onClick={() => route()}>{state.showlogin ? 'Sign Up' : 'Sign In'}</button> */}
            </nav>
            {/* <SCard title="Members">
                <DataTable tbcfg={tbcfg} />
            </SCard> */}
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
