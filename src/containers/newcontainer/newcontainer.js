import React from 'react';

import { NewForm, CategoryForm, OrderForm } from '../../forms';
import { DataTable, SCard } from '../../components';
import { Details } from '../'

import { useStore } from '../../store';

const NewContainer = () => {
    const { state } = useStore()
  
    
    const itemstbcfg = {
        name:'Items',
        header:['S/No','Meal','Price','Category','Status','Actions'],
        flds:[{n:'nam',f:'t'},{n:'prc',f:'t'},{n:'cnm',f:'t'}],
        dbcfg:{s:'controller',a:'find',m:'l',d:'items_fn', load:true,props:{'rid':'n','nam':'t','eti':'n'}},
        params: {rid:'',nam:''},
        actions:['edit'],
        status:['Enabled']
    }
    const ordersdbcfg = {
        dbcfg:{s:'controller',a:'findmobile',m:'l',d:'orderin_fn', load:true,props:{'rid':'n','ord':'t','tel':'t','eti':'n'}},
        params: {rid:'',nam:'',eti:''}
    }
    const renderdom = (key) => {
        
        let cmp = {
            list:<SCard><DataTable  tbcfg={itemstbcfg} /></SCard>,
            edit: 'edit',
            details: <Details />,
            new: <NewForm />,
            orders: <OrderForm dbcfg={ordersdbcfg}/>,
            category: <CategoryForm />,
            undefined: <NewForm />
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