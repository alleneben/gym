import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Card, CardHeader, CardBody, Field, CardFooter } from '../../components';

import styles from '../../asset/scss/forms.module.scss';
import loginstyles from './login.module.scss';

import useForm from '../hooks/useform';
import validateform from '../hooks/validateform';
import { api,useStore } from '../../store/';


const LoginForm = () => {
    const { state, dispatch } = useStore()

    const { onChange, val, handleSubmit, submitting, opacity } = useForm({s:'controller',a:'auth',m:'l'},validateform,submitdata)
    const [servererror, setservererror] = useState(null);

    function submitdata(){
        try {                        
            return api.fxns.submit(api.utils.formatpost(val),api.fxns.endpoint);
        } catch (error) {
            setservererror(error)
        }
    }   


    const buildfield = (label,id,type,placeholder,fieldtype,value,required,hidden,styles) => {
        return <Field label={label} id={id} type={type} placeholder={placeholder} fieldtype={fieldtype} onchange={onChange} value={value} required={required} hidden={hidden} styles={styles}/>
    }

    const buildlogin = () => {
        const unm = buildfield('Email','eml','email','','tt',val.eml || '',true,false,styles);
        const pwd = buildfield('Password','pwd','password','','tt',val.pwd || '',true,false,styles);

        let formui = <Card className={loginstyles.card}>
            <CardHeader className={loginstyles.cardheader}>
                <h2>Sign In</h2>
                <FontAwesomeIcon className={loginstyles.loginicon} icon={faUser}/>
            </CardHeader>
            
            <CardBody className={loginstyles.cardbody}>
                {unm}{pwd}
            </CardBody>
            <CardFooter className={loginstyles.cardfooter}>
                <button type="submit"  className={styles.button} onClick={handleSubmit}>SIGN IN</button>
                <p>Forgotten Password ?</p>
            </CardFooter>
            
        </Card>

        return formui;
    }

    const buildsignup = () => {
        const cnm = buildfield('Company Name','cnm','text','','tt',val.cnm || '',true,false,styles);
        const tel = buildfield('Phone Number','tel','number','','tt',val.tel || '',true,false,styles);
        const eml = buildfield('Email','eml','email','','tt',val.eml || '',true,false,styles);
        const pwd = buildfield('Password','pwd','password','','tt',val.pwd || '',true,false,styles);
        const cwd = buildfield('Confirm Password','cwd','password','','tt',val.cwd || '',true,false,styles);

        let formui = <Card className={loginstyles.card}>
            <CardHeader className={loginstyles.cardheader}>
                <h2>Sign Up</h2>
                <FontAwesomeIcon className={loginstyles.loginicon} icon={faUser}/>
            </CardHeader>
            
            <CardBody className={loginstyles.cardbody}>
                {cnm}{tel}{eml}{pwd}{cwd}
            </CardBody>
            <CardFooter className={loginstyles.cardfooter}>
                <button type="submit"  className={styles.button} onClick={handleSubmit}>SIGN UP</button>
            </CardFooter>
        
        </Card>

        return formui;
    }


    return(
        <div>
            { state.showlogin === true ? buildlogin() : buildsignup() }
        </div>
    )
}

export default LoginForm;