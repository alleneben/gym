import React from 'react';

import { NewForm, CategoryForm, OrderForm, LocationForm } from '../../forms';
import { Details } from '../'

import { useStore } from '../../store';

const NewContainer = () => {
    const { state } = useStore()
    // console.log(state);
        
    const ordersdbcfg = {
        dbcfg:{s:'controller',a:'findmobile',m:'l',d:'orderin_fn', load:true,props:{'rid':'n','ord':'t','tel':'t','eti':'n'}},
        params: {rid:'',nam:'',eti:''}
    }
    const renderdom = (key) => {
        
        let cmp = {
            // edit: <EditForm data={state}/>,
            details: <Details />,
            items: <NewForm />,
            orders: <OrderForm dbcfg={ordersdbcfg}/>,
            category: <CategoryForm />,
            locations: <LocationForm />,
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