import React,{ useEffect, useState } from 'react';
import { OrderCard } from '../../components';
import './orderform.scss';

import { api } from '../../store';




const OrderForm = ({ dbcfg }) => {
    const [data, setdata] = useState([])

    useEffect(() => {
        const params  = api.utils.formatpostsearch(dbcfg);
        api.fxns.submit(params,api.fxns.endpoint)
        .then(rd => {
            if(rd.success){ 
                setdata(rd.sd)
                // dispatch({type:'',payload:'',type:''})                
            } else {
                console.log(rd);
            }
        },err => {
            console.log(err)
        })  

    },[])

    const content = () => {
        return data.map((rd,key) =>  <OrderCard key={key} {...rd} />)
    }

    return(
        
            <div className={"centered"}>
                <section className={"cards"}>
                   { content() }
                </section>
            </div>
        
    )
}


export default OrderForm;