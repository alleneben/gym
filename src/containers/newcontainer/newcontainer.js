import React from 'react';

import { NewForm } from '../../forms';
import { DataTable, SCard, CreditCard } from '../../components';
import { Details } from '../'

import { useStore } from '../../store';

const NewContainer = () => {
    const { state } = useStore()
  
    
    const itemstbcfg = {
        name:'Items',
        header:['S/No','Meal','Price','Category','Status','Actions'],
        flds:[{n:'nam',f:'t'},{n:'prc',f:'t'},{n:'cnm',f:'t'}],
        dbcfg:{s:'controller',a:'find',m:'l',d:'items_fn',c:'orders', load:true,props:{'rid':'n','nam':'t','eti':'n'}},
        params: {rid:'',nam:''},
        actions:['edit'],
        status:['Enabled']
    }
    const orderstbcfg = {
        name:'Orders',
        header:['S/No','Customer','Orderno','Phone','Location','Stamp','Status','Actions'],
        flds:[{n:'nam',f:'t'},{n:'ord',f:'t'},{n:'tel',f:'t'},{n:'loc',f:'t'},{n:'dcd',f:'f'}],
        dbcfg:{s:'controller',a:'find',m:'l',d:'orderin_fn',c:'orders', load:true,props:{'rid':'n','ord':'t','tel':'t','eti':'n'}},
        params: {rid:'',nam:''},
        actions:['details','edit'],
        status:['Enabled']
    }
    const renderdom = (key) => {
        
        let cmp = {
            list:<SCard><DataTable  tbcfg={itemstbcfg} /></SCard>,
            edit: 'edit',
            details: <Details />,
            new: <NewForm />,
            orders: <SCard><DataTable  tbcfg={orderstbcfg} /></SCard>,
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