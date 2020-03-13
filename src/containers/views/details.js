import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

import  { SCard, StatsCard, DataTable, Modal, Field, CreditCard } from '../../components';
import styles from './details.module.scss';
import formstyles from '../../asset/scss/forms.module.scss'

import { useStore } from '../../store';
import useForm from '../../forms/hooks/useform';
import validateform from '../../forms/hooks/validateform';
import { api } from '../../store/';

const Details = () => {
    const { state: { data } } = useStore()

    const [open, setopen] = useState(false)

    const tbcfg = {
        header:['S/No','Firstname','Surname','Phone','Address','Email','Status'],
        flds:[{n:'fnm',f:'t'},{n:'snm',f:'t'},{n:'tel',f:'t'},{n:'had',f:'t'},{n:'eml',f:'t'}],
        dbcfg:{s:'controller',a:'find',m:'l',d:'members_fn', load:true,props:{'rid':'n','nam':'t'}},
        params: {rid:data ? data.rid : '',nam:''},
        actions:[]
    }

    const openmodal = () => {
        // dispatch({type:'open', payload:data, action:'open'});
        setopen(!open)

    }

    const { onChange, val, handleSubmit, submitting,invalid, opacity } = useForm({s:'controller',a:'save',d:'newmember_fn',data:data,m:'l'},validateform,submitdata,{type:'newuser',action:'newuser'})

    
    function submitdata(bp){
        try {   
            const params  = api.utils.formatpost(bp,val);
            return api.fxns.submit(params,api.fxns.endpoint)
        } catch (error) {
            
        }
    }  

    return(
        <>
            <div className={styles.toppanel}>
                <div className={styles.profile}>
                    <img src={require('../../asset/img/bg.jpeg')} alt=""/>
                    <div className={styles.name}>
                        <p>{data ? data.fnm : 'Test'}, {data? data.snm : 'Test'}</p>
                        <p>{data ? data.tel : '00000000'}</p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <div onClick={openmodal} className={styles.icon}>
                        <FontAwesomeIcon
                        style={{ fontSize: "2rem", marginBottom:'5px', color:"#4a5568"}}
                        icon={faMoneyBill} />{" "}
                        Add payment
                    </div>
                </div>
            </div>
            <div className={styles.overview}>
                <h1>Overview</h1>
                <div className={styles.stats}>
                    <StatsCard footer={{background:'#f6fafd'}} title={'Total Paid'} footertitle="View ">
                        GHC 12,000
                    </StatsCard>
                    <StatsCard footer={{background:'#f6fafd'}} title={'Outstanding'} footertitle="View ">
                        GHC 30,000
                    </StatsCard>
                    <StatsCard footer={{background:'#f6fafd'}} title={'Received'} footertitle="View ">
                        GHC 150,000
                    </StatsCard>
                </div>
            </div>
            
            <div className={styles.overview}>
                <h1>Recent Activity</h1>
                <SCard title="Payments">
                    <DataTable tbcfg={tbcfg} re={true}/>
                </SCard>
            </div>
            
            <Modal status={open} onhide={openmodal} title='Payment' handleSubmit={handleSubmit}>
                <CreditCard data={data}>
                    <Field label={''} id={'amt'} type={'text'} placeholder={'Amount'} fieldtype={'tt'} onchange={onChange} value={val.amt} required={true} styles={formstyles} cstyles={{}} cb={'cb'} disabled={false}/>
                </CreditCard>
            </Modal>
        </>
    )
}

export default Details