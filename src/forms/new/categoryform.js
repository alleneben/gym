import React from 'react';

import { Field, Card, CardHeader, CardBody, CardFooter, SCard, DataTable } from '../../components';

import utilstyle from '../../asset/scss/util.module.scss';
import styles from '../../asset/scss/forms.module.scss';


import useForm from '../hooks/useform';
import validateform from '../hooks/validateform';
import { api, useStore } from '../../store/';

let form;

const CategoryForm = () => {
    const { state } = useStore()
    const { onChange, val, handleSubmit, submitting,invalid, opacity } = useForm({s:'controller',a:'save',d:'newcategory_fn',m:'l',values:{}},validateform,submitdata,{type:'newrecord',action:'newrecord'})

    const cfg = {
        name:'Category',
        header:['S/No','Name','Shortcode','Status','Actions'],
        flds:[{n:'nam',f:'t'},{n:'shc',f:'t'}],
        dbcfg:{s:'controller',a:'find',m:'l',d:'categories_fn', load:true,props:{'rid':'n','nam':'t','eti':'n'}},
        params: {rid:'',nam:'',eti:''},
        actions:[
            {
                fn:'edit'
            }
        ],
        fmflds: {
            namt:{label:'Name',id:'namt',type:'text',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.namt : '' || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:submitting},
            shct:{label:'Short Code',id:'shct',type:'text',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.shct : '' || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:''},
        },
        status:['Enabled']
    }
    
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
        // const snm = buildield('Name','snmt','text','','tt',onChange,val.snmt || '',true,styles,{width:260,height:30},'',submitting);
        // const fnm = buildield('Short Code','fnmt','text','','tt',onChange,val.fnmt || '',true,styles,{width:260,height:30});
        
        const { fmflds } = cfg
        let flds=[]
        for(let key in fmflds){
            flds.push(buildield(fmflds[key].label,fmflds[key].id,fmflds[key].type,fmflds[key].placeholder,fmflds[key].fieldtype,onChange,fmflds[key].value,fmflds[key].required,fmflds[key].styles,fmflds[key].cstyles,fmflds[key].cb,fmflds[key].disabled) )
        }
  
        let formui = <Card className={utilstyle.card} submittingstyle={opacity}>
            <CardHeader className={utilstyle.cardheader}>
                <h5 style={{color:"red"}}>{ invalid.em ? invalid.em : invalid}</h5>
                {/* <h5 style={{color:"green"}}>{ state.newuserdd ? 'Record Added' : 'No record added'}</h5> */}
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardBody className={utilstyle.cardbody}>
                    <fieldset>
                        <legend>Category</legend>
                        { flds.map((fld,key) => fld) }
                    </fieldset>
                </CardBody>
                <CardFooter className={utilstyle.cardfooter}>
                    <button type="submit"  className={styles.button}>Submit</button>
                </CardFooter>
            </form>
            <SCard><DataTable  tbcfg={cfg} reclen={state.records ? state.records.sd.length : 0} /></SCard>
        </Card>

        return formui;
    }
    
    return (
        <>
           { form = buildFormUI() } 
        </>
    )
}

export default CategoryForm;