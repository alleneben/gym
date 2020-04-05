import React from 'react';

import { Field, Card, CardHeader, CardBody, CardFooter } from '../../components';

import utilstyle from '../../asset/scss/util.module.scss';
import styles from '../../asset/scss/forms.module.scss';


import useForm from '../hooks/useform';
import validateform from '../hooks/validateform';
import { api, combo } from '../../store/';

let form;

const NewForm = () => {
    const { onChange, val, handleSubmit, submitting,invalid, opacity } = useForm({s:'controller',a:'save',d:'newmember_fn',m:'l',c:'gym'},validateform,submitdata,{type:'newuser',action:'newuser'})

    
    function submitdata(fmvalues){
        try {   
            const params  = api.utils.formatpostfieldset(fmvalues,form);
            return api.fxns.submit(params,api.fxns.endpoint)
        } catch (error) {
            
        }
    }  

    const buildield = (label,id,type,placeholder,fieldtype,onchange,value,required,styles,cstyles,cb,disabled) => {
        return <Field label={label} id={id} type={type} placeholder={placeholder} fieldtype={fieldtype} onchange={onchange} value={value} required={required} styles={styles} cstyles={cstyles} cb={cb} disabled={disabled}/>
    }

    const buildFormUI = () => {
        const snm = buildield('Surname','snmt','text','','tt',onChange,val.snmt || '',true,styles,{width:260,height:30},'',submitting);
        const fnm = buildield('Firstname','fnmt','text','','tt',onChange,val.fnmt || '',true,styles,{width:260,height:30});
        const sex = buildield('Gender','sexn','','','cb',onChange,val.sexn || '',true,styles, {width:260,height:30},combo().lcs.gender);
        const age = buildield('Age','agen','number','','tt',onChange,val.agen || '',true,styles);
        const had = buildield('Residential Address','hadt','text','','ta',onChange,val.hadt || '',true,styles);
        const eml = buildield('Email','emlt','email','','tt',onChange,val.emlt || '',true,styles);
        const tel = buildield('Cell Phone','telt','number','','tt',onChange,val.telt || '',true,styles);
        const mst = buildield('Marital Status','mstn','','','cb',onChange,val.mstn || '',true,styles,{},combo().lcs.maritalstatus);
        const sts = buildield('Working/Student','stsn','','','cb',onChange,val.stsn || '',true,styles,{},combo().lcs.status);
        const etl = buildield('Emergency Contact phone number','etlt','number','','tt',onChange,val.etlt || '',true,styles);
        const ecn = buildield('Emergency Contact Name','ecnt','text','','tt',onChange,val.ecnt || '',true,styles);

        const noo = buildield('Name of the ogranisation','noot','text','','tt',onChange,val.noot || '',true,styles);
        const loc = buildield('Location','loct','text','','tt',onChange,val.loct || '',true,styles);
        const pfn = buildield('Your Profession','pfnt','text','','tt',onChange,val.pfnt || '',true,styles);

        const ist = buildield('Name of Institution','istt','text','','tt',onChange,val.istt || '',true,styles);
        const sno = buildield('Student ID Card No','snot','text','','tt',onChange,val.snot || '',true,styles);
        const nre = buildield('Residence Status','nren','','','cb',onChange,val.nren || '',true,styles,{},combo().lcs.residentialstatus);

  
        let formui = <Card className={utilstyle.card} submittingstyle={opacity}>
            <CardHeader className={utilstyle.cardheader}>
                <h5 style={{color:"red"}}>{ invalid.em ? invalid.em : invalid}</h5>
                {/* <h5 style={{color:"green"}}>{ state.newuserdd ? 'Record Added' : 'No record added'}</h5> */}
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardBody className={utilstyle.cardbody}>
                    <fieldset>
                        <legend>Personal Details</legend>
                        { snm }{ fnm }{ sex }{ age }{ had }{ eml }
                    </fieldset>
                    <fieldset>
                        <legend>Personal Details Cont</legend>
                        { tel }{ mst }{ sts }{ ecn }{ etl } 
                    </fieldset>
                    {val.stsn === '1' ? 
                    <fieldset>
                        <legend>Work Details</legend>
                        { noo }{ loc }{ pfn } 
                    </fieldset> 
                    : val.stsn === '0' ?
                    <fieldset>
                        <legend>Student Details</legend>
                        { ist }{ sno }{ nre }
                    </fieldset>
                    :''}
                </CardBody>
                <CardFooter className={utilstyle.cardfooter}>
                    <button type="submit"  className={styles.button}>Submit</button>
                </CardFooter>
            </form>
        </Card>

        return formui;
    }
    
    return (
        <>
           { form = buildFormUI() } 
        </>
    )
}

export default NewForm;