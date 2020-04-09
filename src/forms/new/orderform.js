import React,{ useEffect, useState } from 'react';
import { OrderCard, Modal, Preview } from '../../components';
import './orderform.scss';

import { api } from '../../store';
import { useStore } from '../../store';
import useForm  from '../hooks/useform';
import validateform from '../hooks/validateform';


// import { subscribeToTimer } from '../../store/api.socket.io';


const OrderForm = ({ dbcfg }) => {
    const [data, setdata] = useState([])
    const [item, setitem] = useState({})
    const { state, dispatch } = useStore()
    const { handleSubmit } = useForm({s:'controller',a:'save',d:'update_order_fn',m:'l'},validateform,submitdata,{type:'payment',action:'payment'})

    
    function submitdata(bp){
        try {   
            const params  = api.utils.formatpost(bp,state);
            return api.fxns.submit(params,api.fxns.endpoint)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        let loader = document.getElementById('loader')
        loader.classList.add('loading');

        const params  = api.utils.formatpostsearch(dbcfg);
        api.fxns.submit(params,api.fxns.endpoint)
        .then(rd => {
            loader.classList.remove('loading');
            if(rd.success){ 
                setdata(rd.sd)
                // subscribeToTimer((err, rd) => );
                // dispatch({type:'',payload:'',type:''})                
            } else {
                console.log(rd);
            }
        },err => {
            loader.classList.remove('loading');
            console.log(err)
        })  
    },[])

    const open = (rd) => {

        setitem(rd)       
        dispatch({type:'openmodal', payload:!state.openmodal, action:'openmodal', data:item ? item : rd,fn:rd});
    }

    const content = () => {
        return data.map((rd,key) =>  <OrderCard key={key} {...rd} open={() => open(rd)} />)
    }

    const items = (data) => {    
        let dd = data.items ? data.items : [];
        return dd.map((rd,key) => <Preview {...rd} key={key}/>)
    }

    return(
        <>
            <div className={"centered"}>
                <section className={"cards"} id="loader">
                    { content() }
                </section>
            </div>
            <Modal status={state.openmodal} onhide={(rd) => open(rd)} title='Manage Order' handleSubmit={handleSubmit} submitting={'submitting'} fns={['cancel','undo','submit']}>
                    { state.data ? `${state.data.ord}` : '' }
                    <div>{ state.data ? `Current State:: ${state.data.osn} ->  New State:: ${state.data.nsn}` : '' }</div>
                    { state.data && items(state.data) }
            </Modal>
        </>  
    )
}


export default OrderForm;