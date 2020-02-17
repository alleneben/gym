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
const SignupForm = () => {

    const { onChange, val, handleSubmit,invalid,opacity } = useForm({s:'controller',a:'signup',d:'signup',m:'l'},validateform,submitdata,{type:'showlogin',action:false})


    function submitdata(fmvalues){
        try {   
 
            const params  = api.utils.formatpost(fmvalues,form);
            return api.fxns.submit(params,api.fxns.endpoint)
        } catch (error) {
            
        }
    }   



    const buildfield = (label,id,type,placeholder,fieldtype,value,required,styles) => {
        return <Field label={label} id={id} type={type} placeholder={placeholder} fieldtype={fieldtype} onchange={onChange} value={value} required={required} styles={styles}/>
    }

    

    const buildsignup = () => {
        const cnm = buildfield('Company Name','cnmt','text','','tt',val.cnmt || '',true,styles);
        const tel = buildfield('Phone Number','telt','number','','tt',val.telt || '',true,styles);
        const eml = buildfield('Email','emlt','email','','tt',val.emlt || '',true,styles);
        const pwd = buildfield('Password','pwdt','password','','tt',val.pwdt || '',true,styles);
        const cwd = buildfield('Confirm Password','cwdt','password','','tt',val.cwdt || '',true,styles);

        let formui = <Card className={loginstyles.card} submittingstyle={opacity}>
            <CardHeader className={loginstyles.cardheader}>
                <h2>Sign Up</h2>
                <FontAwesomeIcon className={loginstyles.loginicon} icon={faUser}/>
                <h5 style={{color:"red"}}>{ invalid.em ? invalid.em : invalid}</h5>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardBody className={loginstyles.cardbody}>
                    {cnm}{tel}{eml}{pwd}{cwd}
                </CardBody>
                <CardFooter className={loginstyles.cardfooter}>
                    <button type="submit"  className={styles.button}>SIGN UP</button>
                </CardFooter>
            </form>
        </Card>

        return formui;
    }


    return(
        <div>
            {  form = buildsignup() }
        </div>
    )
}

export default SignupForm;