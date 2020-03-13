import React from 'react';

import { NewForm } from '../../forms';
import { DataTable, SCard, CreditCard } from '../../components';
import { Details } from '../'

import { useStore } from '../../store';

const NewContainer = () => {
    const { state } = useStore()
  
    
    const tbcfg = {
        header:['S/No','Firstname','Surname','Phone','Address','Email','Status','Actions'],
        flds:[{n:'fnm',f:'t'},{n:'snm',f:'t'},{n:'tel',f:'t'},{n:'had',f:'t'},{n:'eml',f:'t'}],
        dbcfg:{s:'controller',a:'find',m:'l',d:'members_fn', load:true,props:{'rid':'n','nam':'t'}},
        params: {rid:'',nam:''},
        actions:['details','edit']
    }
    const renderdom = (key) => {
        
        let cmp = {
            list:<SCard><DataTable  tbcfg={tbcfg} /></SCard>,
            edit: 'edit',
            details: <Details />,
            new: <NewForm />,
            bill: <CreditCard />,
            undefined: <CreditCard />
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