import React,{ useEffect, useState } from 'react';
import { OrderCard } from '../../components';
import './orderform.scss';

import { api } from '../../store';

import { subscribeToTimer } from '../../store/api.socket.io';


const OrderForm = ({ dbcfg }) => {
    const [data, setdata] = useState([])

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

    const content = () => {
        return data.map((rd,key) =>  <OrderCard key={key} {...rd} />)
    }

    return(
        
            <div className={"centered"}>
                <section className={"cards"} id="loader">
                
                   { content() }
                </section>
            </div>
        
    )
}


export default OrderForm;