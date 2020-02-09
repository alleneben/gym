import React, {useState} from 'react';

import { SCard, Field, Button } from '../../components';

import utilstyle from '../../asset/scss/util.module.scss';
import styles from '../../asset/scss/forms.module.scss';


import useForm from '../hooks/useform';
import validateform from '../hooks/validateform';


const NewForm = ({ submit }) => {
    const { onChange, val, handleSubmit, submitting, opacity } = useForm({},validateform,submitdata)
    const [servererror, setservererror] = useState(null);

    function submitdata(){
        try {

          return submit(val);
        } catch (error) {
          setservererror(error)
        }
    }

    const buildield = (label,id,type,placeholder,fieldtype,onchange,value,required,styles,cstyles,cb,disabled) => {
        return <Field label={label} id={id} type={type} placeholder={placeholder} fieldtype={fieldtype} onchange={onchange} value={value} required={required} styles={styles} cstyles={cstyles} cb={cb} disabled={disabled}/>
    }

    const buildFormUI = () => {
        const snm = buildield('Surname','snm','text','','tt',onChange,val.snm || '',true,styles,{width:260,height:30},'',submitting);
        const fnm = buildield('Firstname','fnm','text','','tt',onChange,val.fnm || '',true,styles,{width:260,height:30});
        const sex = buildield('Gender','sex','','','cb',onChange,val.sex || '',true,styles, {width:260,height:30},'sp_country_combo');
        const age = buildield('Age','age','number','','tt',onChange,val.age || '',true,styles);
        const had = buildield('Residential Address','had','text','','ta',onChange,val.had || '',true,styles);
        const eml = buildield('Email','eml','email','','tt',onChange,val.eml || '',true,styles);
        const tel = buildield('Cell Phone','tel','number','','tt',onChange,val.tel || '',true,styles);
        const mst = buildield('Marital Status','mst','','','cb',onChange,val.mst || '',true,styles,{},'sp_country_combo');
        const sts = buildield('Working/Student','sts','','','cb',onChange,val.sts || '',true,styles,{},'sp_country_combo');
        const etl = buildield('Emergency Contact phone number','etl','number','','tt',onChange,val.etl || '',true,styles);
        const ecn = buildield('Emergency Contact Name','ecn','text','','tt',onChange,val.ecn || '',true,styles);



        return <SCard title='New Member' footer={<Button btntext='Submit' disable={submitting} styles={`${utilstyle.btn} ${utilstyle.btnprimary}`} onclick={handleSubmit} />}  styles={utilstyle} cstyles={{width: 280,opacity: opacity}}>
        <fieldset>
            <legend>Personal Details</legend>
            { snm }{ fnm } { sex } { age } { had } { eml }
        </fieldset>
        <fieldset>
            <legend>Personal Details Cont</legend>
            { tel } { mst } { sts } { ecn } { etl } 
        </fieldset>
        {/* {wos === 'w' ? <fieldset>
            <legend>Work Details</legend>
            { tel } { mst } { sts } { ecn } { etl } 
        </fieldset> 
        : wos === 's' ?
        <fieldset>
            <legend>Student Details</legend>
            { tel } { mst } { sts } { ecn } { etl } 
        </fieldset>
        :''} */}
    </SCard>;
    }
    
    return (
        <>
           { buildFormUI() } 
        </>
    )
}

export default NewForm;