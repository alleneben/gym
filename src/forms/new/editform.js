import React from 'react';

import { Field, Card, CardHeader, CardBody, CardFooter } from '../../components';

import utilstyle from '../../asset/scss/util.module.scss';
import styles from '../../asset/scss/forms.module.scss';


import useForm from '../hooks/useform';
import validateform from '../hooks/validateform';
import { api, useStore } from '../../store/';

let form;

const EditForm = () => {
    const { state } = useStore()

    let dbvalues={ridn:state.data.rid}
    for(let key in state.cfg.fmflds){
        dbvalues[key] = state.data[key.substr(0,3)]
    }

    const { onChange, val, handleSubmit, submitting,invalid, opacity } = useForm({s:'controller',a:'save',d:state.cfg.name.toLowerCase()+'_'+state.updatedom+'_fn',m:'l',values:dbvalues},validateform,submitdata,{type:'updatedom',action:state.cfg.name.toLowerCase()})

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

    const itemsui = () => {
        const flds = {
            nam:{label:'Meal',id:'namt',type:'text',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.namt : '' || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:submitting},
            prc:{label:'Price',id:'prcn',type:'number',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.prcn : '' || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:''},
            cti:{label:'Category',id:'ctin',type:'',placeholder:'',fieldtype:'cb',onchange:onChange,value:val.values ? val.values.ctin : '' || '',required:true,styles:styles,cstyles:{},cb:'category_combo',disabled:''},

        }
        return flds;
    }
    const categoryui = () => {
        const flds = {
            nam:{label:'Name',id:'namt',type:'text',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.namt : '' || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:submitting},
            shc:{label:'Short Code',id:'shct',type:'text',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.shct : ''|| '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:''},
        }
        return flds;
    }
    const locationui = () => {
        const flds = {
            namt:{label:'Name',id:'namt',type:'text',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.namt : ''|| '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:submitting},
            chgn:{label:'Charge',id:'chgn',type:'text',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.chgn : '' || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:''},
        }
        return flds;
    }

    const genenrate = (key) => {
        let ui = {
            items: itemsui(),
            category: categoryui(),
            location: locationui()
        }

        return ui[key];
    }

    const buildFormUI = () => {
        const flds = genenrate(state.cfg.name.toLowerCase())
        // console.log(v);
        
        // const flds = {
        //     nam:{label:'Meal',id:'namt',type:'text',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.namt : '' || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:submitting},
        //     prc:{label:'Price',id:'prcn',type:'number',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.prcn : '' || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:''},
        //     cti:{label:'Category',id:'ctin',type:'',placeholder:'',fieldtype:'cb',onchange:onChange,value:val.values ? val.values.ctin : '' || '',required:true,styles:styles,cstyles:{},cb:'category_combo',disabled:''},

        // }
        let fmflds=[]
        for(let key in flds){
            fmflds.push(buildield(flds[key].label,flds[key].id,flds[key].type,flds[key].placeholder,flds[key].fieldtype,flds[key].onchange,flds[key].value,flds[key].required,flds[key].styles,flds[key].cstyles,flds[key].cb,flds[key].disabled) )
        }
  
        let formui = <Card className={utilstyle.card} submittingstyle={opacity}>
            <CardHeader className={utilstyle.cardheader}>
                <h5 style={{color:"red"}}>{ invalid.em ? invalid.em : invalid}</h5>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardBody className={utilstyle.cardbody}>
                    <fieldset>
                        <legend>{state.cfg.name}</legend>
                        { fmflds.map((fld,key) => fld) }
                        {/* { flds.nam } */}
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