import React from 'react';

import { Field, Card, CardHeader, CardBody, CardFooter, SCard, DataTable } from '../../components';

import utilstyle from '../../asset/scss/util.module.scss';
import styles from '../../asset/scss/forms.module.scss';


import useForm from '../hooks/useform';
import validateform from '../hooks/validateform';
import { api, useStore } from '../../store/';

let form;

const NewForm = () => {
    const { state } = useStore()
    const { onChange, val, handleSubmit, submitting,invalid, opacity } = useForm({s:'controller',a:'save',d:'newitem_fn',m:'l'},validateform,submitdata,{type:'newrecord',action:'newrecord'})

    const tbcfg = {
        name:'Items',
        header:['S/No','Meal','Price','Category','Status','Actions'],
        flds:[{n:'nam',f:'t'},{n:'prc',f:'t'},{n:'cnm',f:'t'}],
        dbcfg:{s:'controller',a:'find',m:'l',d:'items_fn', load:true,props:{'rid':'n','nam':'t','eti':'n'}},
        params: {rid:'',nam:''},
        actions:['edit'],
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
        const snm = buildield('Meal','snmt','text','','tt',onChange,val.snmt || '',true,styles,{width:260,height:30},'',submitting);
        const mst = buildield('Category','mstn','','','cb',onChange,val.mstn || '',true,styles,{},'category_combo');
        const fnm = buildield('Price','fnmn','number','','tt',onChange,val.fnmn || '',true,styles,{width:260,height:30});
        
  
        let formui = <Card className={utilstyle.card} submittingstyle={opacity}>
            <CardHeader className={utilstyle.cardheader}>
                <h5 style={{color:"red"}}>{ invalid.em ? invalid.em : invalid}</h5>
                {/* <h5 style={{color:"green"}}>{ state.newuserdd ? 'Record Added' : 'No record added'}</h5> */}
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardBody className={utilstyle.cardbody}>
                    <fieldset>
                        <legend>Details</legend>
                        { snm }{ fnm }{ mst }
                    </fieldset>
                </CardBody>
                <CardFooter className={utilstyle.cardfooter}>
                    <button type="submit"  className={styles.button}>Submit</button>
                </CardFooter>
            </form>
            <SCard><DataTable  tbcfg={tbcfg} reclen={state.records ? state.records.sd.length : 0} /></SCard>
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