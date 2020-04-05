import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Card, CardHeader, CardBody, Field, CardFooter } from '../../components';

import styles from '../../asset/scss/forms.module.scss';
import loginstyles from './login.module.scss';

import useForm from '../hooks/useform';
import validateform from '../hooks/validateform';
import { api } from '../../store/';

let form;
const LoginForm = () => {


    const { onChange, val, handleSubmit,invalid,opacity } = useForm({s:'controller',a:'auth',d:'security_login',m:'l',c:'gym'},validateform,submitdata,{type:'loginsuccess',action:'loginsuccess'})


    function submitdata(bp){
        try {   

            const params  = api.utils.formatpost(bp,form);
            return api.fxns.submit(params,api.fxns.endpoint)
        } catch (error) {
            
        }
    }   


    
    const buildfield = (label,id,type,placeholder,fieldtype,value,required,styles) => {
        return <Field label={label} id={id} type={type} placeholder={placeholder} fieldtype={fieldtype} onchange={onChange} value={value} required={required} styles={styles}/>
    }

    const buildlogin = () => {
        const unm = buildfield('Email','emlt','email','','tt',val.emlt || '',true,styles);
        const pwd = buildfield('Password','pwdt','password','','tt',val.pwdt || '',true,styles);

        let formui = <Card className={loginstyles.card} submittingstyle={opacity}>
            <CardHeader className={loginstyles.cardheader}>
                <h2>Sign In</h2>
                <FontAwesomeIcon className={loginstyles.loginicon} icon={faUser}/>
                <h5 style={{color:"red"}}>{ invalid.em ? invalid.em : invalid}</h5>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardBody className={loginstyles.cardbody}>
                    {unm}{pwd}
                </CardBody>
                <CardFooter className={loginstyles.cardfooter}>
                    <button type="submit"  className={styles.button}>SIGN IN</button>
                    <p>Forgotten Password ?</p>
                </CardFooter>
            </form> 
        </Card>

        return formui;
    }

    


    return(
        <div>
            { form = buildlogin() }
        </div>
    )
}

export default LoginForm;