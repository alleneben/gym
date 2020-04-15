import React from 'react';

import { NewForm, CategoryForm, OrderForm, LocationForm } from '../../forms';
import { DataTable, SCard } from '../../components';
import { Details } from '../'

import { useStore } from '../../store';

const NewContainer = () => {
    const { state } = useStore()
  
    
    
    const ordersdbcfg = {
        dbcfg:{s:'controller',a:'findmobile',m:'l',d:'orderin_fn', load:true,props:{'rid':'n','ord':'t','tel':'t','eti':'n'}},
        params: {rid:'',nam:'',eti:''}
    }
    const renderdom = (key) => {
        
        let cmp = {
            // list:<SCard><DataTable  tbcfg={itemstbcfg} /></SCard>,
            edit: 'edit',
            details: <Details />,
            new: <NewForm />,
            orders: <OrderForm dbcfg={ordersdbcfg}/>,
            category: <CategoryForm />,
            location: <LocationForm />,
            undefined: <OrderForm dbcfg={ordersdbcfg}/>
        }
        return cmp[key];
    }

    return (
        <div>
            { renderdom(state.updatedom) }
        </div>
    )
}

export default NewContainer;