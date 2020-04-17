import React from 'react';

import { Field, Card, CardHeader, CardBody, CardFooter } from '../../components';

import utilstyle from '../../asset/scss/util.module.scss';
import styles from '../../asset/scss/forms.module.scss';


import useForm from '../hooks/useform';
import validateform from '../hooks/validateform';
import { api, useStore } from '../../store/';

let form;

const EditForm = ({ data }) => {
    const { state } = useStore()
    const { onChange, val, handleSubmit, submitting,invalid, opacity } = useForm({s:'controller',a:'save',d:'newitem_fn',m:'l'},validateform,submitdata,{type:'newrecord',action:'newrecord'})

console.log(state);

    
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
        // const flds = {
        //     snm:{label:'Meal',id:'snmt',type:'text',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.snmt || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:submitting},
        //     mst:{label:'Category',id:'mstn',type:'',placeholder:'',fieldtype:'cb',onchange:onChange,value:val.mstn || '',required:true,styles:styles,cstyles:{},cb:'category_combo',disabled:''},
        //     fnm:{label:'Price',id:'fnmn',type:'number',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.fnmn || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:''}
        // }
        const { flds } = state
        let fmflds=[]
        for(let key in flds){
            fmflds.push(buildield(flds[key].label,flds[key].id,flds[key].type,flds[key].placeholder,flds[key].fieldtype,onChange,flds[key].value,flds[key].required,flds[key].styles,flds[key].cstyles,flds[key].cb,flds[key].disabled) )
        }
  
        let formui = <Card className={utilstyle.card} submittingstyle={opacity}>
            <CardHeader className={utilstyle.cardheader}>
                <h5 style={{color:"red"}}>{ invalid.em ? invalid.em : invalid}</h5>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardBody className={utilstyle.cardbody}>
                    <fieldset>
                        <legend>{state.tbname}</legend>
                        { fmflds.map((fld,key) => fld) }
                    </fieldset>
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

export default EditForm;