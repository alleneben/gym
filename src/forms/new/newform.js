import React from 'react';

import { Field, Card, CardHeader, CardBody, CardFooter } from '../../components';

import utilstyle from '../../asset/scss/util.module.scss';
import styles from '../../asset/scss/forms.module.scss';


import useForm from '../hooks/useform';
import validateform from '../hooks/validateform';
import { api, combo } from '../../store/';

let form;

const NewForm = () => {
    const { onChange, val, handleSubmit, submitting,invalid, opacity } = useForm({},validateform,submitdata,{type:'',action:''})

    
    function submitdata(fmvalues){
        try {   
 
            const params  = api.utils.formatpost(fmvalues,form);
            return api.fxns.submit(params,api.fxns.endpoint)
        } catch (error) {
            
        }
    }  

    const buildield = (label,id,type,placeholder,fieldtype,onchange,value,required,styles,cstyles,cb,disabled) => {
        return <Field label={label} id={id} type={type} placeholder={placeholder} fieldtype={fieldtype} onchange={onchange} value={value} required={required} styles={styles} cstyles={cstyles} cb={cb} disabled={disabled}/>
    }

    const buildFormUI = () => {
        const snm = buildield('Surname','snm','text','','tt',onChange,val.snm || '',true,styles,{width:260,height:30},'',submitting);
        const fnm = buildield('Firstname','fnm','text','','tt',onChange,val.fnm || '',true,styles,{width:260,height:30});
        const sex = buildield('Gender','sex','','','cb',onChange,val.sex || '',true,styles, {width:260,height:30},combo().lcs.gender);
        const age = buildield('Age','age','number','','tt',onChange,val.age || '',true,styles);
        const had = buildield('Residential Address','had','text','','ta',onChange,val.had || '',true,styles);
        const eml = buildield('Email','eml','email','','tt',onChange,val.eml || '',true,styles);
        const tel = buildield('Cell Phone','tel','number','','tt',onChange,val.tel || '',true,styles);
        const mst = buildield('Marital Status','mst','','','cb',onChange,val.mst || '',true,styles,{},combo().lcs.maritalstatus);
        const sts = buildield('Working/Student','sts','','','cb',onChange,val.sts || '',true,styles,{},combo().lcs.status);
        const etl = buildield('Emergency Contact phone number','etl','number','','tt',onChange,val.etl || '',true,styles);
        const ecn = buildield('Emergency Contact Name','ecn','text','','tt',onChange,val.ecn || '',true,styles);

        const noo = buildield('Name of the ogranisation','noo','text','','tt',onChange,val.noo || '',true,styles);
        const loc = buildield('Location','loc','text','','tt',onChange,val.loc || '',true,styles);
        const pfi = buildield('Your Profession','pfi','text','','tt',onChange,val.pfi || '',true,styles);

        const ist = buildield('Name of Institution','ist','text','','tt',onChange,val.ist || '',true,styles);
        const sno = buildield('Student ID Card No','sno','text','','tt',onChange,val.sno || '',true,styles);
        const nre = buildield('Residence Status','nre','','','cb',onChange,val.nre || '',true,styles,{},combo().lcs.residentialstatus);

        // const dtc = buildield('Your Profession','pfi','date','','tt',onChange,val.pfi || '',true,styles);


    //     return <SCard title={'New Member'} footer={<Button btntext='Submit' disable={submitting} styles={`${utilstyle.btn} ${utilstyle.btnprimary}`} onclick={handleSubmit} />}  styles={utilstyle} cstyles={{width: 280,opacity: opacity}}>
    //     <fieldset>
    //         <legend>Personal Details</legend>
    //         { snm }{ fnm } { sex } { age } { had } { eml }
    //     </fieldset>
    //     <fieldset>
    //         <legend>Personal Details Cont</legend>
    //         { tel } { mst } { sts } { ecn } { etl } 
    //     </fieldset>
        // {/* {wos === 'w' ? <fieldset>
        //     <legend>Work Details</legend>
        //     { tel } { mst } { sts } { ecn } { etl } 
        // </fieldset> 
        // : wos === 's' ?
        // <fieldset>
        //     <legend>Student Details</legend>
        //     { tel } { mst } { sts } { ecn } { etl } 
        // </fieldset>
        // :''} */}
    // </SCard>;
        let formui = <Card className={utilstyle.card} submittingstyle={opacity}>
            <CardHeader className={utilstyle.cardheader}>
                <h5 style={{color:"red"}}>{ invalid.em ? invalid.em : invalid}</h5>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardBody className={utilstyle.cardbody}>
                    <fieldset>
                        <legend>Personal Details</legend>
                        { snm }{ fnm } { sex } { age } { had } { eml }
                    </fieldset>
                    <fieldset>
                        <legend>Personal Details Cont</legend>
                        { tel } { mst } { sts } { ecn } { etl } 
                    </fieldset>
                    {val.sts === '1' ? <fieldset>
                        <legend>Work Details</legend>
                        { noo } { loc } { pfi } 
                    </fieldset> 
                    : val.sts === '0' ?
                    <fieldset>
                        <legend>Student Details</legend>
                        { ist } { sno } { nre }
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