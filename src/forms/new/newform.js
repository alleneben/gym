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
  

    const { onChange,onFileChange, val, handleSubmit, submitting,invalid, opacity } = useForm({s:'controller',a:'save',d:'newitem_fn',m:'l',values:{}},validateform,submitdata,{type:'newrecord',action:'newrecord'})

    
    
    const cfg = {
        name:'Items',
        header:['S/No','Image','Meal','Price','Category','Status','Actions'],
        flds:[{n:'img',f:'i'},{n:'nam',f:'t'},{n:'prc',f:'t'},{n:'cnm',f:'t'}],
        dbcfg:{s:'controller',a:'find',m:'l',d:'items_fn', load:true,props:{'rid':'n','nam':'t','eti':'n'}},
        params: {rid:'',nam:''},
        actions:[
            {
                fn:'edit'                
            }
        ],
        fmflds: {
            namt:{label:'Meal',id:'namt',type:'text',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.namt : '' || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:submitting},
            prcn:{label:'Price',id:'prcn',type:'number',placeholder:'',fieldtype:'tt',onchange:onChange,value:val.values ? val.values.prcn : '' || '',required:true,styles:styles,cstyles:{width:260,height:30},cb:'',disabled:''},
            ctin:{label:'Category',id:'ctin',type:'',placeholder:'',fieldtype:'cb',onchange:onChange,value:val.values ? val.values.ctin : '' || '',required:true,styles:styles,cstyles:{},cb:'category_combo',disabled:''},
            imgt:{label:'Image',id:'imgt',type:'file',placeholder:'',fieldtype:'fl',onchange:onFileChange,value:val.values ? val.values.imgt : '' || '',required:true,styles:styles,cstyles:{width:260,height:30,'padding-bottom': 30},cb:'',disabled:''},

        },
        status:['Enabled'],
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
        // const snm = buildield('Meal','snmt','text','','tt',onChange,val.snmt || '',true,styles,{width:260,height:30},'',submitting);
        // const mst = buildield('Category','mstn','','','cb',onChange,val.mstn || '',true,styles,{},'category_combo');
        // const fnm = buildield('Price','fnmn','number','','tt',onChange,val.fnmn || '',true,styles,{width:260,height:30});
        const { fmflds } = cfg
        let flds=[]
        for(let key in fmflds){
            flds.push(buildield(fmflds[key].label,fmflds[key].id,fmflds[key].type,fmflds[key].placeholder,fmflds[key].fieldtype,fmflds[key].onchange,fmflds[key].value,fmflds[key].required,fmflds[key].styles,fmflds[key].cstyles,fmflds[key].cb,fmflds[key].disabled) )
        }
        
  
        let formui = <Card className={utilstyle.card} submittingstyle={opacity}>
            <CardHeader className={utilstyle.cardheader}>
                <h5 style={{color:"red"}}>{ invalid.em ? invalid.em : invalid}</h5>
                {/* <h5 style={{color:"green"}}>{ state.newuserdd ? 'Record Added' : 'No record added'}</h5> */}
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardBody className={utilstyle.cardbody}>
                    <fieldset>
                        <legend>Details</legend>
                        { flds.map((fld,key) => fld) }
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
           <DataTable  tbcfg={cfg} reclen={state.records ? state.records.sd[0].rid : 0} />

        </>
    )
}

export default NewForm;