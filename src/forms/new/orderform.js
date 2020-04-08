import React,{ useEffect, useState } from 'react';
import { OrderCard, Modal, Preview } from '../../components';
import './orderform.scss';

import { api } from '../../store';
import { useStore } from '../../store';


// import { subscribeToTimer } from '../../store/api.socket.io';


const OrderForm = ({ dbcfg }) => {
    const [data, setdata] = useState([])
    const { state, dispatch } = useStore()

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
        dispatch({type:'openmodal', payload:!state.openmodal, action:'openmodal', data:rd});
    }
    const handleSubmit = () => {

    }
    const content = () => {
        return data.map((rd,key) =>  <OrderCard key={key} {...rd} open={() => open(rd)} />)
    }
    const items = (data) => {    
        let dd = data.items ? data.items : [];
            
        return dd.map((rd,key) => <Preview {...rd} key={key}/>)
    }
console.log(state);

    return(
        <>
            <div className={"centered"}>
                <section className={"cards"} id="loader">
                    { content() }
                </section>
            </div>
            <Modal status={state.openmodal} onhide={open} title='Manage Order' handleSubmit={handleSubmit} submitting={'submitting'}>
                { state.data ? `${state.data.ord} :: GHC ${state.data.amt}` : '' }
                {state.data && items(state.data)}
            </Modal>
        </>  
    )
}


export default OrderForm;