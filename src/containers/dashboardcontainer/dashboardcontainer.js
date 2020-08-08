import React from 'react';

import styles from './styles.module.scss';
import { DataTable } from '../../components';
import { OrderForm } from '../../forms';

const DashboardContainer = (props) => {

    const pay = () => {
        const params = {
            "price": 1,
            "network": "mtn",
            "recipient_number": "026xxxxxxx",
            "sender": "024xxxxxxx",
            "option": "rmta",
            "apikey": "fcaef91c8b3b9c83ae1e",
            "orderID": ""
          }

        fetch('https://client.teamcyst.com/api_call.php',{method: 'post', body: params})
        .then(rd => rd.json())
        .then(rd=>{
            console.log(rd);
            
        })
    }

    const cfg = {
        name:'Items',
        header:['S/No','Image','Meal','Price','Category','Status','Actions'],
        flds:[{n:'img',f:'i'},{n:'nam',f:'t'},{n:'prc',f:'t'},{n:'cnm',f:'t'}],
        dbcfg:{s:'controller',a:'findmobile',m:'l',d:'items_fn', load:true,props:{'rid':'n','nam':'t','eti':'n'}},
        params: {rid:'',nam:''},
        actions:[
            {
                fn:'edit'                
            },
            {
                fn:'add'
            },
            {
                fn:'del'
            }
        ],
        status:['Enabled'],
    }
    const ordersdbcfg = {
        dbcfg:{s:'controller',a:'findmobile',m:'l',d:'orderin_fn', load:true,props:{'rid':'n','ord':'t','tel':'t','eti':'n'}},
        params: {rid:'',nam:'',eti:''}
    }
    return(
        
        <>
            Dashboard
            {/* <DataTable  tbcfg={cfg} /> */}
            <OrderForm dbcfg={ordersdbcfg}/>
        </>

    )

}

export default DashboardContainer;